---
sidebar_position: 3
title: "Codex CLI（终端）"
---

# Codex CLI（终端）

## 原理

Codex CLI 支持在配置文件里自定义模型来源（model provider），指定 base_url 和
认证用的环境变量。2026 年 2 月之后发布的 Codex（0.122+）**只认 OpenAI Responses
协议**，`wire_api` 字段要么留空要么写 `"responses"`，其他值不再支持；对应
XiOne 网关的 `/v1/responses`。

## 配置文件

用户级配置文件：`~/.codex/config.toml`。**项目级** `.codex/config.toml`
即使写了 `model_provider` / `model_providers`，Codex 也会直接忽略这两个键——
这是官方文档明确列出的限制，不是配置错了，模型来源必须放用户级配置。

```toml
[model_providers.xione]
name = "XiOne"
base_url = "https://你的网关域名/v1"
env_key = "XIONE_API_KEY"

[profiles.xione]
model_provider = "xione"
model = "你要用的模型名"
```

`wire_api` 不用写，省略就是默认值 `"responses"`。

然后设置环境变量：

```bash
export XIONE_API_KEY="你的 XiOne API 密钥"
```

启动时指定用这个配置：

```bash
codex --profile xione
```

也可以不用 profile，直接在启动时临时指定：

```bash
codex -c model_provider="xione"
```

## 常见问题

- **旧教程里写的 `wire_api = "chat"` 现在会报错或直接不生效**：这是 2026 年 2 月
  之前的旧协议名，Codex 0.122 起已经彻底去掉了 Chat Completions 支持，只能走
  Responses。如果你的配置文件是很久以前生成的，把 `wire_api = "chat"` 那一行删掉
  （或改成 `"responses"`）。
- 网关侧要能正常应答 Responses 协议的请求（不只是 Chat Completions），否则即使
  Codex 这边配对了，请求到网关也会失败——确认一下 XiOne 后台给这个密钥勾选的模型
  支持 Responses 协议。
