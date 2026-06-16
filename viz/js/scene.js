// ── Scene 叠加 ──
const sceneListEl = document.getElementById('scene-list');
scenes.forEach(sc => {
  const btn = document.createElement('button');
  btn.className = 'scene-btn';
  btn.textContent = sc.label;
  btn.dataset.scId = sc.id;
  btn.onclick = () => activateScene(sc, btn);
  sceneListEl.appendChild(btn);
});

// 折叠/展开场景面板（移动端默认收起，只留一个标题条）
const scenePanel = document.getElementById('scene-panel');
const sceneTitle = document.getElementById('scene-title');
const sceneClear = document.getElementById('scene-clear');
sceneTitle.addEventListener('click', () => scenePanel.classList.toggle('collapsed'));
sceneClear.addEventListener('click', clearScene);
// 点击面板以外的任意区域收起展开的场景面板
document.addEventListener('click', e => {
  if (!scenePanel.contains(e.target)) scenePanel.classList.add('collapsed');
});
if (isMobile()) scenePanel.classList.add('collapsed');

function activateScene(sc, btn) {
  if (activeScene && activeScene.id === sc.id) { clearScene(); return; }
  activeScene = sc;
  const sceneIds = new Set(sc.nodes || []);
  if (activeNode && !sceneIds.has(activeNode.id)) {
    // 当前焦点不在新场景里：清空轨迹，重新开始
    trail.length = 0;
    activeRelationType = null;
  } else {
    // 仅保留落在场景内的轨迹节点（断开处由面包屑以中性箭头表示）
    const kept = trail.filter(n => sceneIds.has(n.id));
    trail.length = 0;
    kept.forEach(n => trail.push(n));
  }
  syncTrailDerived();
  document.querySelectorAll('.scene-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const inScene = new Set(sc.nodes);
  nodeEl.classed('scene-lit', d => inScene.has(d.id));
  nodeEl.classed('scene-dim', d => !inScene.has(d.id));
  linkEl.style('opacity', l =>
    inScene.has(l.source.id) && inScene.has(l.target.id) ? 0.8 : 0.04);
  if (activeNode) applyFocusState(true);
  else clearFocusVisuals();
  updateViewSummary();
  // 移动端选定后自动收起面板，露出图形
  if (isMobile()) scenePanel.classList.add('collapsed');
}

function clearScene() {
  activeScene = null;
  document.querySelectorAll('.scene-btn').forEach(b => b.classList.remove('active'));
  nodeEl.classed('scene-lit', false).classed('scene-dim', false);
  linkEl.style('opacity', null);
  if (activeNode) applyFocusState(true);
  else clearFocusVisuals();
  updateViewSummary();
}
