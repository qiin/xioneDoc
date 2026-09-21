---
sidebar_position: 7
---

# CC Switch（多工具配置管理）

CC Switch 本身不是一个 AI 客户端，而是一个跨平台的配置管理工具（开源，
基于 Rust + Tauri），用来在 Claude Code、Codex CLI、Gemini CLI 等多个终端工具
之间快速切换不同的接入配置，常驻在系统托盘，点一下就能切换供应商，不用
每次手改配置文件、重启终端。

## 用法思路

先按前面几篇分别把 Claude Code / Codex / Gemini CLI 的 XiOne 接入配置准备好，
然后在 CC Switch 里把这套配置存成一个"供应商"预设，之后要切换回官方或者
切到别的网关，在托盘图标里点一下就完成，不需要手动改配置文件。

适合同时维护多套接入配置（比如官方 + XiOne + 其他自建网关）来回切换测试的场景，
只用一套配置的话不是必需品。
