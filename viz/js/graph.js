// ── 渲染 ──
const svg = d3.select('#svg');
const root = d3.select('#root');
const width = window.innerWidth;
const height = window.innerHeight;

// 是否移动端（多处复用：触屏热区、标签精简、提示框底部抽屉、自适应缩放）
const isMobile = () => window.innerWidth < 768;
const minReadableScale = () => isMobile() ? 0.72 : 0.35;
const maxReadableScale = () => isMobile() ? 1.25 : 1.15;
const clampScale = scale => Math.max(minReadableScale(), Math.min(scale, maxReadableScale()));

const zoom = d3.zoom()
  .on('zoom', e => {
    root.attr('transform', e.transform);
    if (!highlightOn) applyLabelVisibility(e.transform.k);
  });

zoom.scaleExtent([minReadableScale(), maxReadableScale()]);
svg.call(zoom);

// 图例（点击可切换显示/隐藏某一类实体）
const legendEl = document.getElementById('legend');
Object.keys(typeLabels).forEach(type => {
  const item = document.createElement('div');
  item.className = 'legend-item';
  item.dataset.type = type;
  item.innerHTML = `<div class="legend-dot" style="background:${COLORS[type]}"></div>${formatLabel('type', type)}`;
  item.addEventListener('click', () => {
    if (hiddenTypes.has(type)) hiddenTypes.delete(type); else hiddenTypes.add(type);
    item.classList.toggle('off', hiddenTypes.has(type));
    applyTypeFilter();
    if (activeNode && hiddenTypes.has(activeNode.type)) clearSelection();
    else if (activeNode) applyFocusState(true);
    else updateViewSummary();
  });
  legendEl.appendChild(item);
});

// 按类型显示/隐藏（隐藏节点时，连到它的关系也一并隐藏）
function applyTypeFilter() {
  nodeEl.style('display', d => hiddenTypes.has(d.type) ? 'none' : null);
  linkEl.style('display', d =>
    (hiddenTypes.has((d.source.type)) || hiddenTypes.has((d.target.type))) ? 'none' : null);
}

// 力导向
const filteredIds = new Set(filteredNodes.map(n => n.id));
// 清洗关系：丢弃数组空洞、指向不存在节点的关系，并按 来源>目标:类型 合并标签
const linkByKey = new Map();
const droppedLinks = [];
links.forEach(l => {
  if (!l || !filteredIds.has(l.source) || !filteredIds.has(l.target)) {
    if (l) droppedLinks.push(l);
    return;
  }
  const key = l.source + '>' + l.target + ':' + l.type;
  const existing = linkByKey.get(key);
  if (!existing) {
    linkByKey.set(key, { ...l });
    return;
  }
  if (l.label && !existing.label.includes(l.label)) existing.label += '；' + l.label;
});
const filteredLinks = Array.from(linkByKey.values());
if (droppedLinks.length) {
  console.warn('[network data] dropped links with missing endpoints:', droppedLinks);
}
const sceneNodeWarnings = scenes
  .map(sc => ({ scene: sc.id, missing: (sc.nodes || []).filter(id => !filteredIds.has(id)) }))
  .filter(sc => sc.missing.length);
if (sceneNodeWarnings.length) {
  console.warn('[network data] scenes reference missing nodes:', sceneNodeWarnings);
}

const sim = d3.forceSimulation(filteredNodes)
  .force('link', d3.forceLink(filteredLinks).id(d => d.id).distance(d => {
    if (d.type === 'location_of') return 140;
    if (d.type === 'membership') return 80;
    if (d.type === 'affiliation') return 100;
    if (d.type === 'appearance') return 70;
    return 120;
  }).strength(d => {
    if (d.type === 'location_of') return 0.3;
    if (d.type === 'membership') return 0.9;
    if (d.type === 'appearance') return 0.5;
    return 0.6;
  }))
  // 节点数量大幅增加（150+），加大斥力让网络铺得更开、减少重叠
  .force('charge', d3.forceManyBody().strength(d => {
    if (d.type === 'City') return -520;
    if (d.type === 'Label') return -560;
    if (d.type === 'Band') return -320;
    return -200;
  }))
  .force('center', d3.forceCenter(width / 2, height / 2))
  // 轻微向心力：把松散连接 / 不相连的子图（如波士顿 Mission of Burma 一支）拉回画面中心附近
  .force('x', d3.forceX(width / 2).strength(0.05))
  .force('y', d3.forceY(height / 2).strength(0.05))
  .force('collision', d3.forceCollide().radius(d => nodeRadius(d) + 14));

// 节点半径：移动端整体略放大，便于辨识与点按
function nodeRadius(d) {
  const m = isMobile() ? 1.15 : 1;
  if (d.type === 'Label') return 18 * m;
  if (d.type === 'City') return 14 * m;
  if (d.type === 'Band') return 12 * m;
  if (d.type === 'Venue') return 10 * m;
  if (d.type === 'Event') return 7 * m;
  return 9 * m;
}

// 连线
const linkEl = root.append('g')
  .selectAll('line')
  .data(filteredLinks)
  .join('line')
  .attr('class', 'link')
  .attr('stroke', d => LINK_COLORS[d.type] || '#666')
  .attr('stroke-width', d => d.type === 'membership' ? 1.5 : d.type === 'location_of' ? 0.8 : d.type === 'appearance' ? 0.9 : 1.2)
  .attr('stroke-dasharray', d => d.type === 'location_of' ? '3,4' : d.type === 'succession' ? '6,3' : d.type === 'appearance' ? '1,3' : null);

// 节点
const nodeEl = root.append('g')
  .selectAll('g')
  .data(filteredNodes)
  .join('g')
  .attr('class', 'node')
  .call(d3.drag()
    .on('start', (e, d) => { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
    .on('drag',  (e, d) => { d.fx = e.x; d.fy = e.y; })
    .on('end',   (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; })
  );

// 透明热区圆：扩大可点按/悬停范围（移动端尤其重要，手指比鼠标粗）
nodeEl.append('circle')
  .attr('class', 'hit')
  .attr('r', d => nodeRadius(d) + (isMobile() ? 16 : 8))
  .attr('fill', 'transparent');

nodeEl.append('circle')
  .attr('class', 'dot')
  .attr('r', nodeRadius)
  .attr('fill', d => COLORS[d.type] || '#888')
  .attr('fill-opacity', 0.72)
  .attr('stroke', d => COLORS[d.type] || '#888')
  .attr('stroke-width', 1.5)
  .attr('stroke-opacity', 0.28);

// 标签精简：缩得太小看不清时，只保留「锚点」类标签（城市/厂牌/乐队），放大后再显示全部
// 这样移动端聚焦局部时标签清晰可读，缩放总览时又不会糊成一团
const ANCHOR_LABEL = new Set(['City', 'Label', 'Band']);
let highlightOn = false;
function applyLabelVisibility(scale) {
  if (scale == null) scale = d3.zoomTransform(svg.node()).k;
  const showMinor = scale >= 0.55;
  nodeEl.selectAll('text.node-name').style('display', n => (showMinor || ANCHOR_LABEL.has(n.type)) ? null : 'none');
}

nodeEl.append('text')
  .attr('class', 'node-name')
  .text(d => d.label)
  .attr('dy', d => nodeRadius(d) + 11)
  .attr('text-anchor', 'middle')
  .attr('font-size', d => d.type === 'Label' ? (isMobile() ? 11 : 10) : (isMobile() ? 10 : 9))
  .attr('fill', d => d.type === 'City' ? '#7ab87a' : '#b0aaa0')
  .attr('letter-spacing', '0.04em');

function rawEndpointId(endpoint) {
  return endpoint && endpoint.id ? endpoint.id : endpoint;
}

function placeAnchorFromNodeId(id) {
  const node = nodeById.get(id);
  return node ? formatLabel('place', node.label) : '';
}

function directCityAnchor(id) {
  const link = filteredLinks.find(l => l.type === 'location_of' && (rawEndpointId(l.source) === id || rawEndpointId(l.target) === id));
  if (!link) return '';
  const otherId = rawEndpointId(link.source) === id ? rawEndpointId(link.target) : rawEndpointId(link.source);
  return placeAnchorFromNodeId(otherId);
}

function indirectCityAnchor(d) {
  if (d.type !== 'Person') return '';
  const membership = filteredLinks.find(l => l.type === 'membership' && (rawEndpointId(l.source) === d.id || rawEndpointId(l.target) === d.id));
  if (!membership) return '';
  const otherId = rawEndpointId(membership.source) === d.id ? rawEndpointId(membership.target) : rawEndpointId(membership.source);
  return directCityAnchor(otherId);
}

function endpointId(endpoint) {
  return endpoint && endpoint.id ? endpoint.id : endpoint;
}

function linkTouchesNode(l, id) {
  return endpointId(l.source) === id || endpointId(l.target) === id;
}

function focusLinks(d, relType = activeRelationType) {
  return filteredLinks.filter(l => {
    if (!linkTouchesNode(l, d.id)) return false;
    if (relType && l.type !== relType) return false;
    return isLinkVisible(l);
  });
}

function focusNodesFromLinks(d, linksForFocus) {
  const connected = new Set([d.id]);
  linksForFocus.forEach(l => {
    connected.add(endpointId(l.source));
    connected.add(endpointId(l.target));
  });
  return connected;
}

function visibleNeighborhoodIds(d) {
  return focusNodesFromLinks(d, focusLinks(d, null));
}

function secondHopState(firstHopIds) {
  const secondHopIds = new Set();
  const pathHintLinks = new Set();
  filteredLinks.forEach(l => {
    if (!isLinkVisible(l)) return;
    const sid = endpointId(l.source);
    const tid = endpointId(l.target);
    const sourceIsFirst = firstHopIds.has(sid);
    const targetIsFirst = firstHopIds.has(tid);
    if (sourceIsFirst === targetIsFirst) return;
    const nextId = sourceIsFirst ? tid : sid;
    if (firstHopIds.has(nextId)) return;
    secondHopIds.add(nextId);
    pathHintLinks.add(l);
  });
  return { secondHopIds, pathHintLinks };
}

function isStepTraceLink(l) {
  if (!activeNode || !previousNode || activeNode.id === previousNode.id) return false;
  if (!isLinkVisible(l)) return false;
  const sid = endpointId(l.source);
  const tid = endpointId(l.target);
  return (sid === activeNode.id && tid === previousNode.id) || (sid === previousNode.id && tid === activeNode.id);
}

// 刚刚走过的那一步对应的直接连接（可能不止一条：同一对节点间不同关系类型各算一条）
function stepTraceLinks() {
  if (!activeNode || !previousNode || activeNode.id === previousNode.id) return [];
  return filteredLinks.filter(isStepTraceLink);
}

function applyFocusState(reframe = false) {
  if (!activeNode) {
    clearFocusVisuals();
    return;
  }
  if (activeRelationType && focusLinks(activeNode, activeRelationType).length === 0) {
    activeRelationType = null;
  }

  const linksForFocus = focusLinks(activeNode);
  const connected = focusNodesFromLinks(activeNode, linksForFocus);
  const focusLinkSet = new Set(linksForFocus);
  const { secondHopIds, pathHintLinks } = secondHopState(connected);

  nodeEl.classed('dimmed', n => !connected.has(n.id) && !secondHopIds.has(n.id) && (!previousNode || n.id !== previousNode.id));
  nodeEl.classed('highlighted', n => connected.has(n.id));
  nodeEl.classed('second-hop', n => secondHopIds.has(n.id));
  nodeEl.classed('previous-node', n => previousNode && n.id === previousNode.id && n.id !== activeNode.id);
  nodeEl.classed('focus-center', n => n.id === activeNode.id);
  nodeEl.classed('neighbor', n => n.id !== activeNode.id && connected.has(n.id));
  linkEl.classed('dimmed', l => !focusLinkSet.has(l) && !pathHintLinks.has(l) && !isStepTraceLink(l));
  linkEl.classed('highlighted', l => focusLinkSet.has(l));
  linkEl.classed('path-hint', l => pathHintLinks.has(l));
  linkEl.classed('step-trace', isStepTraceLink);

  // 焦点模式下只保留焦点邻域与锚点标签，迫使理解回到 graph。
  highlightOn = true;
  nodeEl.selectAll('text.node-name').style('display', n =>
    (connected.has(n.id) || ANCHOR_LABEL.has(n.type)) ? null : 'none');

  renderFocusController(activeNode);
  updateViewSummary();
  if (reframe) focusNeighborhoodView(activeNode, connected, 320);
}

function clearFocusVisuals() {
  nodeEl
    .classed('dimmed', false)
    .classed('highlighted', false)
    .classed('second-hop', false)
    .classed('previous-node', false)
    .classed('focus-center', false)
    .classed('neighbor', false);
  linkEl.classed('dimmed', false).classed('highlighted', false).classed('path-hint', false).classed('step-trace', false);
  // 还原为按当前缩放比例决定的标签可见性
  highlightOn = false;
  applyLabelVisibility();
  renderFocusController(null);
}

// 两个节点之间的直接可见连接（用于把轨迹串成「A —[关系]→ B」）。无直接边则返回 null。
function directLinkBetween(aId, bId) {
  return filteredLinks.find(l => {
    if (!isLinkVisible(l)) return false;
    const s = endpointId(l.source), t = endpointId(l.target);
    return (s === aId && t === bId) || (s === bId && t === aId);
  }) || null;
}

function syncTrailDerived() {
  activeNode = trail.length ? trail[trail.length - 1] : null;
  previousNode = trail.length >= 2 ? trail[trail.length - 2] : null;
}

function selectNode(d) {
  const existingIndex = trail.findIndex(n => n.id === d.id);
  if (existingIndex >= 0) {
    // 点到轨迹里已经走过的节点 = 逐级回退到那一步
    trail.length = existingIndex + 1;
  } else {
    trail.push(d);
  }
  syncTrailDerived();
  activeRelationType = null;
  applyFocusState(true);
}

function clearSelection() {
  trail.length = 0;
  syncTrailDerived();
  activeRelationType = null;
  clearFocusVisuals();
  updateViewSummary();
}

nodeEl
  // 点击节点只移动焦点；panel 只是关系控制层，不承载详情阅读。
  .on('click', function(e, d) {
    e.stopPropagation();
    selectNode(d);
  });

// 点击空白处清除高亮（移动端无 mouseout 时尤其重要）
svg.on('click', clearSelection);
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') clearSelection();
});

// tick
sim.on('tick', () => {
  linkEl
    .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
  nodeEl.attr('transform', d => `translate(${d.x},${d.y})`);
});

// 当前视图摘要
updateViewSummary();

// 自适应缩放：根据所有节点的包围盒，把整张网络缩放/平移到视口内（留出边距）
// 取代固定缩放——节点变多后能保证移动端首屏就能看到全貌
function fitView(duration = 0) {
  if (!filteredNodes.length) return;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  filteredNodes.forEach(n => {
    if (n.x == null || n.y == null) return;
    minX = Math.min(minX, n.x); maxX = Math.max(maxX, n.x);
    minY = Math.min(minY, n.y); maxY = Math.max(maxY, n.y);
  });
  if (!isFinite(minX)) return;
  const w = window.innerWidth, h = window.innerHeight;
  const pad = isMobile() ? 26 : 72;
  const gw = (maxX - minX) || 1, gh = (maxY - minY) || 1;
  const scale = isMobile()
    ? Math.min((w - pad * 2) / gw, (h - pad * 2) / gh, maxReadableScale())
    : clampScale(Math.min((w - pad * 2) / gw, (h - pad * 2) / gh));
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  const t = d3.zoomIdentity.translate(w / 2, h / 2).scale(scale).translate(-cx, -cy);
  (duration ? svg.transition().duration(duration) : svg).call(zoom.transform, t);
}

function frameNodeSetView(centerNode, nodeIds, duration = 0, options = {}) {
  const nodesForFrame = filteredNodes.filter(n => nodeIds.has(n.id) && isNodeVisible(n));
  if (!nodesForFrame.length || centerNode.x == null || centerNode.y == null) return;
  let minDx = 0, maxDx = 0, minDy = 0, maxDy = 0;
  nodesForFrame.forEach(n => {
    if (n.x == null || n.y == null) return;
    const dx = n.x - centerNode.x;
    const dy = n.y - centerNode.y;
    minDx = Math.min(minDx, dx);
    maxDx = Math.max(maxDx, dx);
    minDy = Math.min(minDy, dy);
    maxDy = Math.max(maxDy, dy);
  });

  const w = window.innerWidth, h = window.innerHeight;
  const leftPad = isMobile() ? 18 : 90;
  const rightPad = isMobile() ? 18 : 300;
  const topPad = isMobile() ? 138 : 88;
  const bottomPad = isMobile() ? 92 : 94;
  const availableW = Math.max(220, w - leftPad - rightPad);
  const availableH = Math.max(220, h - topPad - bottomPad);
  const gw = Math.max(Math.max(Math.abs(minDx), Math.abs(maxDx)) * 2, 120);
  const gh = Math.max(Math.max(Math.abs(minDy), Math.abs(maxDy)) * 2, 120);
  const currentScale = d3.zoomTransform(svg.node()).k;
  const fitScale = Math.min(availableW / gw, availableH / gh);
  let scale = currentScale;
  if (options.allowInitialReadableScale) {
    scale = Math.min(Math.max(fitScale, minReadableScale()), maxReadableScale());
  } else if (options.allowSoftScale) {
    const softMin = currentScale * 0.95;
    const softMax = currentScale * 1.05;
    scale = Math.min(Math.max(clampScale(fitScale), softMin), softMax);
    scale = clampScale(scale);
  }

  const desiredX = options.viewportCenter ? w / 2 : leftPad + availableW / 2;
  const desiredY = options.viewportCenter ? h / 2 : topPad + availableH / 2;
  let targetX = desiredX;
  let targetY = desiredY;
  if (options.keepFrameVisible) {
    const minTargetX = leftPad - minDx * scale;
    const maxTargetX = w - rightPad - maxDx * scale;
    const minTargetY = topPad - minDy * scale;
    const maxTargetY = h - bottomPad - maxDy * scale;
    if (minTargetX <= maxTargetX) targetX = Math.min(Math.max(desiredX, minTargetX), maxTargetX);
    if (minTargetY <= maxTargetY) targetY = Math.min(Math.max(desiredY, minTargetY), maxTargetY);
  }
  const t = d3.zoomIdentity.translate(targetX, targetY).scale(scale).translate(-centerNode.x, -centerNode.y);
  (duration ? svg.transition().duration(duration).ease(d3.easeCubicOut) : svg).call(zoom.transform, t);
}

function focusNeighborhoodView(centerNode, connectedIds, duration = 0) {
  frameNodeSetView(centerNode, connectedIds, duration, {
    allowSoftScale: true,
    viewportCenter: true,
    keepFrameVisible: true,
  });
}

// 焦点节点：连接最密集的枢纽（多为某座城市或核心厂牌），作为移动端的引导入口
function computeFocusNode() {
  const deg = {};
  filteredLinks.forEach(l => {
    const s = l.source.id || l.source, t = l.target.id || l.target;
    deg[s] = (deg[s] || 0) + 1; deg[t] = (deg[t] || 0) + 1;
  });
  let best = null, bestDeg = -1;
  filteredNodes.forEach(n => { const d = deg[n.id] || 0; if (d > bestDeg) { bestDeg = d; best = n; } });
  return best;
}
const focusNode = computeFocusNode();

// 入口视图：
// - 桌面端：自适应铺满全图（空间足够、可悬停）
// - 移动端：fit 到入口枢纽的一阶邻域，避免把整张图压到不可识别
function entryView(duration = 0) {
  if (!isMobile()) return fitView(duration);
  const f = focusNode;
  if (!f || f.x == null) return fitView(duration);
  frameNodeSetView(f, visibleNeighborhoodIds(f), duration, { allowInitialReadableScale: true });
}

// 预热力导向：在首屏绘制前同步收敛到最终布局，然后只定位一次相机。
// 这样可避免移动端「收敛漂移」以及收敛后相机二次回中造成的整体轻微位移抖动。
sim.alpha(1).stop();
for (let i = 0; i < 320; i++) sim.tick();
// 把最终位置一次性刷到 DOM
linkEl
  .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
  .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
nodeEl.attr('transform', d => `translate(${d.x},${d.y})`);
applyLabelVisibility(1.05);
// 入口视图只在这里定位一次，后续相机只随用户操作和焦点反馈移动。
entryView(0);

// 控制按钮
document.getElementById('btn-zoom-in').addEventListener('click', () =>
  svg.transition().call(zoom.scaleBy, 1.4));
document.getElementById('btn-zoom-out').addEventListener('click', () =>
  svg.transition().call(zoom.scaleBy, 0.7));
// 重置 = 清除焦点并回到入口视图（桌面铺满全图 / 移动端回到枢纽）
document.getElementById('btn-reset').addEventListener('click', () => {
  clearSelection();
  entryView(600);
});

// 旋屏 / 窗口尺寸变化：更新力的中心、按当前断点重算半径与热区，并重新适配视图
let resizeTimer = null, lastW = window.innerWidth;
window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  // 移动端忽略「仅高度变化」（多为地址栏显隐）——否则会无谓重排并让相机抖动
  if (isMobile() && w === lastW) return;
  lastW = w;
  zoom.scaleExtent([minReadableScale(), maxReadableScale()]);
  sim.force('center', d3.forceCenter(w/2, h/2));
  sim.force('x', d3.forceX(w/2).strength(0.05));
  sim.force('y', d3.forceY(h/2).strength(0.05));
  // 跨断点时重算与移动端相关的视觉量
  nodeEl.select('circle.dot').attr('r', nodeRadius);
  nodeEl.select('circle.hit').attr('r', d => nodeRadius(d) + (isMobile() ? 16 : 8));
  nodeEl.select('text.node-name').attr('dy', d => nodeRadius(d) + 11);
  if (!highlightOn) applyLabelVisibility();
  updateViewSummary();
  sim.alpha(0.2).restart();
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => entryView(400), 350);
});
