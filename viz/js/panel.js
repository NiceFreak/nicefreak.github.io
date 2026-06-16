function cleanPhrase(text) {
  return String(text || '')
    .replace(/\s+/g, ' ')
    .replace(/^[：:，,、\s]+|[。；;，,\s]+$/g, '')
    .trim();
}

function fieldValue(d, keys) {
  for (const key of keys) {
    const value = d && d[key];
    if (value == null || value === '') continue;
    return cleanPhrase(value);
  }
  return '';
}

function splitValues(value) {
  return String(value || '')
    .split(/[、,，;；/／|｜]+/)
    .map(cleanPhrase)
    .filter(Boolean);
}

function uniqueCompact(items) {
  const seen = new Set();
  return items.map(cleanPhrase).filter(item => {
    if (!item) return false;
    const key = item.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function otherNodeForLink(d, l) {
  const sourceId = rawEndpointId(l.source);
  const targetId = rawEndpointId(l.target);
  if (sourceId !== d.id && targetId !== d.id) return null;
  return nodeById.get(sourceId === d.id ? targetId : sourceId) || null;
}

function relationLinks(d, type) {
  return filteredLinks.filter(l =>
    (!type || l.type === type) &&
    (rawEndpointId(l.source) === d.id || rawEndpointId(l.target) === d.id)
  );
}

function relatedNodes(d, type, nodeType) {
  const nodesForType = relationLinks(d, type)
    .map(l => otherNodeForLink(d, l))
    .filter(n => n && (!nodeType || n.type === nodeType));
  const seen = new Set();
  return nodesForType.filter(n => {
    if (seen.has(n.id)) return false;
    seen.add(n.id);
    return true;
  });
}

function relatedNames(d, type, nodeType) {
  return relatedNodes(d, type, nodeType).map(n => n.label);
}

function detailSegments(d) {
  const explicit = fieldValue(d, ['一句话简介', '简介', 'summary', 'intro', 'description', '备注', 'notes', 'note']);
  const text = explicit || String(d.detail || '').split('｜')[0];
  return text.split(/[；。]/).map(cleanPhrase).filter(Boolean);
}

function summaryAnchor(d) {
  const segments = detailSegments(d);
  return segments.find(s => !/^(创始人|联合创始人|旗下|成员|位于|大本营)[：:]/.test(s)) || '';
}

function styleAnchors(d) {
  const explicit = []
    .concat(splitValues(fieldValue(d, ['主风格', 'mainStyle', 'main_style', 'primaryStyle', 'primary_style', 'primaryGenre', 'primary_genre', 'genre', 'style'])))
    .concat(splitValues(fieldValue(d, ['次风格', 'secondaryStyle', 'secondary_style', 'secondaryGenre', 'secondary_genre', 'subGenre', 'sub_genre'])));
  const detailStyle = String(d.detail || '').split('｜')[1] || '';
  return uniqueCompact(explicit.concat(splitValues(detailStyle))).map(s => formatLabel('style', s)).slice(0, 2);
}

function cityThroughRelatedEntity(d) {
  const carriers = []
    .concat(relatedNodes(d, 'membership', 'Band'))
    .concat(relatedNodes(d, 'affiliation', 'Band'))
    .concat(relatedNodes(d, 'collaboration', 'Band'))
    .concat(relatedNodes(d, 'appearance', 'Venue'));
  for (const node of carriers) {
    const city = directCityAnchor(node.id);
    if (city) return city;
  }
  return '';
}

function cityAnchor(d) {
  const explicit = fieldValue(d, ['城市', 'city', 'homeCity', 'home_city', 'baseCity', 'base_city', 'location']);
  if (explicit) return formatLabel('place', explicit);
  if (d.type === 'City') return placeAnchorFromNodeId(d.id);
  return directCityAnchor(d.id) || indirectCityAnchor(d) || cityThroughRelatedEntity(d);
}

function labelAnchors(d) {
  const explicit = splitValues(fieldValue(d, ['签约厂牌', '厂牌信息', '厂牌', 'recordLabel', 'record_label', 'labelName', 'label_name']));
  const linked = relatedNames(d, 'affiliation', 'Label');
  const self = d.type === 'Label' ? [d.label] : [];
  return uniqueCompact(self.concat(explicit, linked)).slice(0, 2);
}

function roleBandAnchors(d) {
  return uniqueCompact(
    relatedNames(d, 'membership', 'Band')
      .concat(relatedNames(d, 'affiliation', 'Band'))
      .concat(relatedNames(d, 'appearance', 'Band'))
  ).slice(0, 3);
}

function collaborationAnchors(d) {
  return uniqueCompact(
    relatedNames(d, 'collaboration')
      .concat(relatedNames(d, 'appearance').filter(name => name !== d.label))
  ).slice(0, 3);
}

function localEntityAnchors(d) {
  if (d.type !== 'City') return [];
  return uniqueCompact(
    relatedNames(d, 'location_of', 'Band')
      .concat(relatedNames(d, 'location_of', 'Label'))
      .concat(relatedNames(d, 'location_of', 'Venue'))
  ).slice(0, 3);
}

function successionAnchors(d) {
  const predecessors = [];
  const successors = [];
  relationLinks(d, 'succession').forEach(l => {
    const sourceId = rawEndpointId(l.source);
    const targetId = rawEndpointId(l.target);
    if (targetId === d.id && nodeById.has(sourceId)) predecessors.push(nodeById.get(sourceId).label);
    if (sourceId === d.id && nodeById.has(targetId)) successors.push(nodeById.get(targetId).label);
  });
  return {
    predecessors: uniqueCompact(predecessors).slice(0, 2),
    successors: uniqueCompact(successors).slice(0, 2),
  };
}

function rosterAnchors(d) {
  if (d.type !== 'Label') return [];
  const fromLinks = relatedNames(d, 'affiliation', 'Band');
  const fromDetail = (String(d.detail || '').match(/旗下[：:]\s*([^；]+)/) || [])[1];
  return uniqueCompact(fromLinks.concat(splitValues(fromDetail))).slice(0, 3);
}

function joinNames(items, limit = 2) {
  return uniqueCompact(items).slice(0, limit).join('、');
}

function compactFact(line, maxLength = 28) {
  const text = cleanPhrase(line);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
}

function isIdentitySignal(segment) {
  const text = cleanPhrase(segment);
  return text.length > 1 && /[\p{Script=Han}A-Za-z]/u.test(text);
}

function fieldGroundedFacts(d) {
  const succession = successionAnchors(d);
  return {
    type: formatLabel('type', d.type),
    city: cityAnchor(d),
    styles: styleAnchors(d),
    labels: labelAnchors(d),
    bands: roleBandAnchors(d),
    localEntities: localEntityAnchors(d),
    roster: rosterAnchors(d),
    collaborators: collaborationAnchors(d),
    predecessors: succession.predecessors,
    successors: succession.successors,
    summary: summaryAnchor(d),
  };
}

function identitySummary(d) {
  const segments = detailSegments(d).filter(isIdentitySignal);
  const important = segments.filter(s => !/^(创始人|联合创始人|旗下|成员|位于|大本营)[：:]/.test(s));
  const picked = (d.type === 'Label' && important.length ? important : segments)[0];
  if (picked) return cleanPhrase(picked);

  const f = fieldGroundedFacts(d);
  if (f.bands.length) return cleanPhrase(`关联 ${joinNames(f.bands, 2)}`);
  if (f.roster.length) return cleanPhrase(`旗下 ${joinNames(f.roster, 2)}`);
  if (f.localEntities.length) return cleanPhrase(`承载 ${joinNames(f.localEntities, 2)}`);
  return '';
}

function firstAnchor(items) {
  return uniqueCompact(items)[0] || '';
}

function isSummaryRepeat(fact, summary) {
  const a = cleanPhrase(fact).toLowerCase();
  const b = cleanPhrase(summary).toLowerCase();
  return !!(a && b && (a === b || (a.length > 8 && b.includes(a)) || (b.length > 8 && a.includes(b))));
}

function relationFallback(d) {
  const link = relationLinks(d)[0];
  const other = link ? otherNodeForLink(d, link) : null;
  return other ? `${other.label} 关系相邻节点` : `${formatLabel('type', d.type)}关系节点`;
}

function identityAnchorFact(d, f) {
  const style = firstAnchor(f.styles);
  const label = firstAnchor(d.type === 'Label' ? f.labels.filter(name => name !== d.label) : f.labels);
  const band = firstAnchor(f.bands);

  if (d.type === 'Band') {
    if (label) return `${label} 体系乐队`;
    if (style) return `${style}乐队`;
    return '地下音乐乐队';
  }
  if (d.type === 'Person') {
    if (band) return `${band} 关联人物`;
    if (label) return `${label} 关联人物`;
    return '场景关系人物';
  }
  if (d.type === 'Label') {
    if (f.city) return `${f.city}独立发行厂牌`;
    return '独立发行厂牌';
  }
  if (d.type === 'City') return '本地音乐场景枢纽';
  if (d.type === 'Venue') return '现场空间节点';
  if (d.type === 'Event') return '演出事件节点';
  if (d.type === 'Project') return '场景组织节点';
  return `${formatLabel('type', d.type)}关系节点`;
}

function structuralRoleFact(d, f) {
  const predecessor = firstAnchor(f.predecessors);
  const successor = firstAnchor(f.successors);
  const label = firstAnchor(d.type === 'Label' ? f.labels.filter(name => name !== d.label) : f.labels);
  const roster = firstAnchor(f.roster);
  const band = firstAnchor(f.bands);
  const localEntity = firstAnchor(f.localEntities);
  const collaborator = firstAnchor(f.collaborators);

  if (successor) return `${successor} 的直接前身`;
  if (predecessor) return `承接 ${predecessor} 的后继节点`;
  if (d.type === 'Band' && label) return `${label} 核心阵列成员`;
  if (d.type === 'Label' && roster) return `${roster} 所在厂牌体系`;
  if (d.type === 'Person' && band) return `${band} 成员关系节点`;
  if (d.type === 'City' && localEntity) return `${localEntity} 所在本地网络`;
  if ((d.type === 'Venue' || d.type === 'Event') && band) return `${band} 现场关系节点`;
  if (collaborator) return `${collaborator} 合作关系节点`;
  return relationFallback(d);
}

function triggerSegmentFact(d, summary) {
  const summaryKey = cleanPhrase(summary).toLowerCase();
  const triggerPattern = /DIY|巡演|票价|拒绝|定义|引荐|起点|发源地|证明|边界|自毁|音量|视觉|声音|发行|地下|场景|体系|组织|推动|促成|影响|核心|World Domination|International Pop Underground/i;
  return detailSegments(d)
    .filter(isIdentitySignal)
    .filter(segment => cleanPhrase(segment).toLowerCase() !== summaryKey)
    .filter(segment => !/^(创始人|联合创始人|旗下|成员|位于|大本营)[：:]/.test(segment))
    .filter(segment => !/\b(19[7-9]\d|20[0-2]\d)年?\b|[12]\d{3}\s*[–-]\s*[12]?\d{0,3}/.test(segment))
    .find(segment => triggerPattern.test(segment)) || '';
}

function explorationTriggerFact(d, f, summary) {
  const segment = triggerSegmentFact(d, summary);
  if (segment) return segment;

  const successor = firstAnchor(f.successors);
  const predecessor = firstAnchor(f.predecessors);
  const label = firstAnchor(d.type === 'Label' ? f.labels.filter(name => name !== d.label) : f.labels);
  const band = firstAnchor(f.bands);

  if (successor) return `追踪 ${successor} 延伸路径`;
  if (predecessor) return `追踪 ${predecessor} 来源路径`;
  if (d.type === 'Label' || firstAnchor(f.roster)) return '查看厂牌发行网络';
  if (label) return `查看 ${label} 发行网络`;
  if (firstAnchor(f.localEntities)) return '打开本地场景网络';
  if (firstAnchor(f.collaborators)) return '沿合作关系继续探索';
  if (band) return `沿 ${band} 关系继续探索`;
  return '继续查看相邻节点';
}

function identityFacts(d) {
  const f = fieldGroundedFacts(d);
  const summary = identitySummary(d);
  const facts = [];
  const add = value => {
    const fact = compactFact(value);
    if (fact && !facts.includes(fact) && !isSummaryRepeat(fact, summary)) facts.push(fact);
  };

  add(identityAnchorFact(d, f));
  add(structuralRoleFact(d, f));
  add(explorationTriggerFact(d, f, summary));
  [
    relationFallback(d),
    '沿关系网络继续探索',
    `${formatLabel('type', d.type)}网络节点`,
  ].forEach(candidate => {
    if (facts.length < 3) add(candidate);
  });
  return facts.slice(0, 3);
}

// Focus controller & neighborhood state
const focusPanel = document.getElementById('focus-panel');
const focusName = document.getElementById('focus-name');
const focusType = document.getElementById('focus-type');
const focusIdentity = document.getElementById('focus-identity');
const focusSummary = document.getElementById('focus-summary');
const focusFacts = document.getElementById('focus-facts');
const focusChips = document.getElementById('focus-chips');

function renderFocusController(d) {
  if (!d) {
    focusPanel.classList.remove('show');
    focusIdentity.classList.add('empty');
    focusName.textContent = '';
    focusType.textContent = '';
    focusSummary.textContent = '';
    focusFacts.replaceChildren();
    focusChips.replaceChildren();
    return;
  }
  focusName.textContent = d.label;
  focusType.textContent = formatLabel('type', d.type);
  focusType.style.color = COLORS[d.type] || '#888';
  const summary = identitySummary(d);
  const facts = identityFacts(d);
  focusSummary.textContent = summary;
  focusFacts.replaceChildren();
  facts.forEach(fact => {
    const el = document.createElement('span');
    el.className = 'fp-fact';
    el.textContent = fact;
    focusFacts.appendChild(el);
  });
  focusIdentity.classList.remove('empty');
  focusChips.replaceChildren();

  relationTypes.forEach(rel => {
    const hasRelation = focusLinks(d, rel).length > 0;
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'rel-chip';
    chip.textContent = formatLabel('relation', rel);
    chip.disabled = !hasRelation;
    chip.classList.toggle('active', activeRelationType === rel);
    chip.style.color = activeRelationType === rel ? (LINK_COLORS[rel] || '#e8e4dc') : '';
    chip.addEventListener('click', e => {
      e.stopPropagation();
      activeRelationType = activeRelationType === rel ? null : rel;
      applyFocusState(true);
    });
    focusChips.appendChild(chip);
  });
  focusPanel.classList.add('show');
}
