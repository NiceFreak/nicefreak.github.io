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

function sceneAnchor(d) {
  const explicit = fieldValue(d, ['章节来源', 'chapterSource', 'chapter_source', 'sourceChapter', 'source']);
  if (explicit) return explicit;
  const scene = scenes.find(sc => (sc.nodes || []).includes(d.id));
  return scene ? cleanPhrase(scene.label) : '';
}

function chapterAnchor(d) {
  const explicit = fieldValue(d, ['章节', 'chapterName', 'chapterTitle']);
  if (explicit) return explicit;
  if (d.chapter === 0) return '引言';
  return d.chapter ? `第${d.chapter}章` : '';
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

function compactLine(line, maxLength = 38) {
  const text = cleanPhrase(line);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
}

function compactFact(line) {
  return cleanPhrase(line);
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
    scene: sceneAnchor(d),
    chapter: chapterAnchor(d),
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

function identityDetailFacts(d, summary) {
  const summaryKey = cleanPhrase(summary).toLowerCase();
  return detailSegments(d)
    .filter(isIdentitySignal)
    .filter(segment => cleanPhrase(segment).toLowerCase() !== summaryKey)
    .filter(segment => !/^(创始人|联合创始人|旗下|成员|位于|大本营)[：:]/.test(segment))
    .slice(0, 2);
}

function identityFacts(d) {
  const f = fieldGroundedFacts(d);
  const facts = [];
  const add = value => {
    const fact = compactFact(value);
    if (fact && !facts.includes(fact)) facts.push(fact);
  };
  const addJoined = (label, items, limit = 2) => {
    const joined = joinNames(items, limit);
    if (joined) add(`${label}: ${joined}`);
  };

  identityDetailFacts(d, identitySummary(d)).forEach(add);

  if (d.type === 'Band') {
    addJoined('风格', f.styles);
    if (f.city) add(`城市: ${f.city}`);
    addJoined('厂牌', f.labels, 1);
    if (f.chapter) add(f.chapter);
  } else if (d.type === 'Person') {
    addJoined('乐队', f.bands);
    if (f.city) add(`场景: ${f.city}`);
    if (f.chapter) add(f.chapter);
  } else if (d.type === 'Label') {
    addJoined('旗下', f.roster);
    if (f.city) add(`城市: ${f.city}`);
    if (f.chapter) add(f.chapter);
  } else if (d.type === 'City') {
    addJoined('关联', f.localEntities);
    if (f.scene) add(f.scene);
    if (f.chapter) add(f.chapter);
  } else if (d.type === 'Venue' || d.type === 'Event') {
    if (f.city) add(`城市: ${f.city}`);
    addJoined('相关', f.bands);
    if (f.chapter) add(f.chapter);
  } else {
    addJoined('相关', f.bands);
    if (f.city) add(`场景: ${f.city}`);
    if (f.chapter) add(f.chapter);
  }

  if (facts.length < 3) addJoined('风格', f.styles);
  if (facts.length < 3 && f.city) add(`城市: ${f.city}`);
  if (facts.length < 3 && f.chapter) add(f.chapter);
  return facts.slice(0, 2);
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
  focusIdentity.classList.toggle('empty', !summary && !facts.length);
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
