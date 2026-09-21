---
sidebar_position: 5
---

# OpenCode

## 原理

OpenCode 的自定义供应商基于 `@ai-sdk/openai-compatible` 包，只要是 OpenAI
Chat Completions 兼容的接口都能接，配置写在项目或全局的 `opencode.json` 里。

## 配置

全局配置：`~/.config/opencode/opencode.json`（也可以用 `OPENCODE_CONFIG`
环境变量指定别的路径，支持带注释的 JSONC）。

```json
{
  "provider": {
    "xione": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne",
      "options": {
        "baseURL": "https://你的网关域名/v1",
        "apiKey": "你的 XiOne API 密钥"
      },
      "models": {
        "你要用的模型名": {}
      }
    }
  }
}
```

## 注意

- `baseURL` 不要带 `/chat/completions` 后缀，OpenCode 会自动拼接。
- `models` 里的模型名要和 XiOne 后台配置的模型名完全一致，多一个字符都会
  找不到模型。
