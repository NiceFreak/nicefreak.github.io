# skillup-week8 · 学习展板（纯前端复习版）

在线地址：<https://nicefreak.github.io/skillup-week8/>

这是 `nodejs-skillup` 仓库 `week8-fullstack` 前端里**零后端依赖的学习展板**部分，
构建后放在这里供移动端复习。展示状态下有 6 个专题：认证与授权、OAuth2 流程、数据库聚合、
Node.js 运行时、测试闭环（Day 1–4）、学习笔记；顶部可切换「展示 / 复习」两种内容状态。

切到**复习状态**会多出第 7 个专题「面试准备」——它是个人材料，刻意不在对外展示状态出现。

需要后端的「管理后台 / 登录 / JWT / RBAC / 报表」**不在此部署内**（构建时用
`VITE_SHOWCASE_ONLY=1` 隐藏）。

## 本目录是生成产物

不要手改这里的文件。更新方式：在 `nodejs-skillup/week8-fullstack/src/frontend` 下重新构建

```bash
VITE_SHOWCASE_ONLY=1 VITE_API_BASE="" yarn build --base=/skillup-week8/
```

再把 `dist/` 覆盖到本目录即可。标题和 favicon 由 `vite.config.ts` 在构建期按
`VITE_SHOWCASE_ONLY` 写入，产物本身就是对的，**不需要**复制后再改 `index.html`。

完整流程（含双仓库边界与上线条件）见 `nodejs-skillup` 的
`SHOWCASE-DEPLOY-PROTOCOL.md` 和 `deploy-showcase-pages` skill。
