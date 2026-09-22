---
sidebar_position: 5
title: "OpenCode"
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
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "xione": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne",
      "options": {
        "baseURL": "https://你的网关域名/v1",
        "apiKey": "{env:XIONE_API_KEY}"
      },
      "models": {
        "你要用的模型名": {}
      }
    }
  }
}
```

```bash
export XIONE_API_KEY="你的 XiOne API 密钥"
```

`apiKey` 用 `{env:XIONE_API_KEY}` 这种写法引用环境变量，密钥不直接写进配置文件；
也可以完全不写 `apiKey`，改用 `opencode auth login` 走交互式登录，把密钥存进
`~/.local/share/opencode/auth.json`，两种方式二选一，同时配置以配置文件为准。

## 注意

- `baseURL` 要包含 `/v1`，但不要带 `/chat/completions` 后缀，OpenCode 会自动拼接。
  如果网关同时想接 OpenAI Responses 协议，需要把 `npm` 换成 `@ai-sdk/openai`，
  这里给的是 Chat Completions 版本，多数场景够用。
- `models` 里的模型名要和 XiOne 后台配置的模型名完全一致，多一个字符都会
  找不到模型。
- OpenCode 不会自动去 `/v1/models` 探测模型能力，自定义供应商下的模型默认按
  纯文本处理，不会自动识别图片/工具调用能力。
