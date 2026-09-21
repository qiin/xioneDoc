---
sidebar_position: 2
---

# 配置顶部导航的「文档」链接

首页顶部导航栏的「文档」入口默认指向网关内置的文档页面，但可以换成你自己的
文档站——比如你正在看的这个站点。

## 配置位置

系统设置 → 计费与支付 → 额度设置 → **文档链接**

填入你的文档站完整 URL 并保存，比如：

```
https://docs.your-domain.com
```

保存后，顶部导航的「文档」会变成外部链接，点击在新标签页打开你填的地址。留空则
恢复使用网关内置的文档页面。

## 如果文档站和网关部署在同一台服务器

完全可以。推荐用**子域名**区分（`docs.your-domain.com`），而不是网关域名下的
`/docs` 子路径——网关自己在 `/docs` 也有一条内置路由，路径撞在一起容易搞混。

Nginx 反向代理示例（文档站构建成纯静态文件后，随便用什么静态服务器都行，
这里以 Nginx 直接托管为例）：

```nginx
server {
    listen 443 ssl;
    server_name docs.your-domain.com;

    root /path/to/xione-docs/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

网关本身的反向代理配置不需要改动，两个 `server` 块各管各的域名。
