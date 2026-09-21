# XiOne 文档

XiOne（基于 [new-api](https://github.com/QuantumNous/new-api) 部署）的用户/管理员文档站，
用 [Docusaurus](https://docusaurus.io/) 构建。

这是一个**独立项目**，和 new-api 主仓库解耦：改文档不需要重新构建或发布网关本体，
两者可以部署在同一台服务器上（推荐用子域名区分，见下文）。

## 本地开发

```bash
npm install
npm start          # 开发服务器，默认 http://localhost:3000
```

## 构建

```bash
npm run build       # 产物在 build/ 目录，纯静态文件
npm run serve        # 本地预览构建产物
```

## 上线前必做（搜索文件里的 TODO）

`docusaurus.config.js` 顶部注释列了几处必须替换的占位符：

1. `url` / `baseUrl` — 你的真实域名
2. `organizationName` / `projectName` — 只有用 GitHub Pages 部署才需要
3. `static/img/logo.svg` / `static/img/favicon.svg` — 换成你自己的标识
   （当前是一个占位用的几何图形，不是抄自任何网站）
4. 导航栏和页脚里指向 GitHub / 主站的链接

## 部署

`npm run build` 产物是纯静态文件，任何静态服务器都能托管（Nginx / Vercel / Netlify /
GitHub Pages 均可）。

### 和 new-api 网关部署在同一台服务器

推荐用子域名区分（`docs.your-domain.com`），不要用网关域名下的 `/docs` 子路径——
网关自己在 `/docs` 有一条内置路由，容易撞车。Nginx 配置示例见
`docs/admin-settings/docs-link.md`。

部署好之后，去 new-api 后台「系统设置 → 计费与支付 → 额度设置 → 文档链接」，
填上这个文档站的地址，首页顶部导航的「文档」就会指向这里。

## 内容结构

```
docs/
├── getting-started/   快速开始
├── deployment/         部署方式（Docker / 源码编译）
├── payments/           支付网关（含 PayerScan 配置）
├── admin-settings/      管理后台配置
└── faq/                常见问题
```

侧边栏分类在 `sidebars.js` 里手写维护，新增文档时记得同步加进去。

## 关于设计

信息架构（左侧任务导向分类 + 顶部搜索 + 右侧锚点目录）参考了同类文档站的通用范式，
但**文案、配色、Logo 均为原创**，不是照抄某个具体网站的实现。改动前可以看一眼
`docusaurus.config.js` 里的自定义主题色（紫色系）和 `src/css/custom.css`。
