# VideoHub 🎬

一个基于纯静态页面的视频网站模板，采用深色主题和现代化 UI 设计，可直接部署到 GitHub Pages。

## 页面预览

| 页面 | 说明 |
|------|------|
| **首页** `index.html` | 视频网格展示、分类筛选、搜索功能 |
| **播放页** `player.html` | HTML5 视频播放器、视频信息、评论区、相关推荐 |

## 项目结构

```
video/
├── index.html          # 首页 - 视频网格
├── player.html         # 播放页 - 视频播放与详情
├── css/
│   └── style.css       # 全局样式（暗色主题、响应式）
├── js/
│   ├── data.js         # 模拟视频数据（10 条示例）
│   └── app.js          # 核心逻辑（渲染、搜索、筛选、播放）
└── README.md
```

## 功能特性

- **🎨 深色主题** — 护眼暗色设计，沉浸式浏览体验
- **📱 响应式布局** — 适配手机、平板、桌面端
- **🔍 实时搜索** — 按标题/描述/作者即时筛选
- **📂 分类筛选** — 技术/娱乐/教育/音乐/游戏 五大分类
- **▶️ 视频播放** — HTML5 原生播放器，流畅体验
- **💬 评论区** — 评论区 UI，可扩展为后端评论系统

## 快速开始

1. 用浏览器直接打开 `index.html` 即可预览
2. 视频数据在 `js/data.js` 中管理，可替换为后端 API
3. 如需部署 GitHub Pages，推送仓库后在 Settings > Pages 中启用

## 技术栈

- HTML5 + CSS3 + Vanilla JavaScript
- 零依赖，无需构建工具
- CSS Grid / Flexbox 响应式布局
- CSS 变量主题系统

## 自定义数据

编辑 `js/data.js` 中的 `videos` 数组，替换为你的视频数据：

```js
{
  id: 1,
  title: "视频标题",
  category: "tech",          // tech | entertainment | education | music | gaming
  views: 12345,
  duration: "12:34",
  uploadedAt: "3 天前",
  thumbnail: "缩略图 URL",
  videoUrl: "视频文件 URL",
  description: "视频描述",
  author: "作者名",
  avatar: "头像 URL",
  comments: [
    { author: "评论者", avatar: "头像", content: "评论内容", time: "时间" }
  ]
}
```

## 服务器部署

视频文件存放在自己的服务器上，通过 Cloudflare Tunnel 提供 HTTPS 访问。

### 架构

```
GitHub Pages (前端页面)  ←→  Cloudflare Tunnel  ←→  你的服务器 (视频文件)
```

### 服务器配置

1. 在宝塔面板添加站点，配置 Nginx 跨域（见下方）
2. 视频文件放在站点目录的 `videos/` 文件夹下
3. 启动 Cloudflare Tunnel 获取 HTTPS 地址

### Nginx 跨域配置（宝塔）

在站点配置文件中添加：

```nginx
add_header Access-Control-Allow-Origin "*" always;
add_header Access-Control-Allow-Methods "GET, HEAD, OPTIONS" always;
add_header Access-Control-Expose-Headers "Content-Length, Content-Range, Accept-Ranges" always;

location ~* \.(mp4|webm|ogg|mov)$ {
    add_header Accept-Ranges bytes;
    add_header Access-Control-Allow-Origin "*" always;
}
```

### 启动隧道

```bash
cloudflared tunnel --url http://localhost:80
```

### 修改数据源

编辑 `js/data.js` 顶部的 `SERVER_BASE` 常量为你的隧道地址：

```js
const SERVER_BASE = 'https://xxxx.trycloudflare.com';
```