---
sidebar_position: 3
---

# Codex CLI（终端）

## 原理

Codex CLI 支持在配置文件里自定义模型来源（model provider），指定 base_url 和
接口协议类型（wire_api）。XiOne 同时支持 OpenAI 的 Chat Completions 和 Responses
两种协议，两种都能接。

## 配置文件

用户级配置文件：`~/.codex/config.toml`（注意：项目级 `.codex/config.toml`
不支持这个字段，配了也不生效，Codex 会打印警告）。

```toml
[model_providers.xione]
name = "XiOne"
base_url = "https://你的网关域名/v1"
wire_api = "responses"
env_key = "XIONE_API_KEY"

[profiles.xione]
model_provider = "xione"
model = "你要用的模型名"
```

然后设置环境变量：

```bash
export XIONE_API_KEY="你的 XiOne API 密钥"
```

启动时指定用这个配置：

```bash
codex --profile xione
```

## 关于协议选择

如果某个模型走 `wire_api = "responses"` 报错，换成 `wire_api = "chat"`
试试——不同上游模型在网关里可能只完整支持其中一种协议的全部特性。
