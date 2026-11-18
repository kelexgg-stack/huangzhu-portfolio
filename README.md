# 黄柱 · 个人作品集

基于 React + Vite 的 UE 环境美术作品集网站，包含个人介绍、项目视频合集、静帧作品展示及联系方式。

## 本地运行

需要 Node.js 20 或更高版本。

```bash
npm install
npm run dev
```

生产构建与预览：

```bash
npm run build
npm run preview
```

## 视频文件

项目视频较大，未纳入 Git。将视频放入 `public/videos/`，并按以下文件名命名：

- `01-baoli.mp4`
- `02-landscape-planning.mp4`
- `03-lanzhou-baoli.mp4`
- `04-wanhua-ludao.mp4`
- `05-yubo-park.mp4`
- `06-yubo-park-02.mp4`

部署时需单独上传这些视频到站点的 `/videos/` 路径。若通过 GitHub Pages 等静态托管，建议将视频托管在支持大文件的对象存储/CDN，并在 `src/main.jsx` 更新视频地址。

## 部署提示

运行 `npm run build` 生成 `dist/`。当前 Vite 配置不会把 `public` 复制进构建目录，避免复制大体积视频；所以视频需按上文单独部署。
