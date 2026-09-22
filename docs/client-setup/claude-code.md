---
sidebar_position: 2
title: "Claude Code（终端）"
---

# Claude Code（终端）

## 原理

Claude Code 默认直接连 Anthropic，但支持通过 `ANTHROPIC_BASE_URL` 把所有请求
改发到别的地址。这个变量只换域名，请求体、流式格式、工具调用的数据结构仍然是
Anthropic Messages API 的样子——所以背后接的必须是一个认这个协议的服务，
XiOne 的 `/v1/messages` 正好就是这个协议。

## 配置方式一：环境变量（临时/个人）

```bash
export ANTHROPIC_BASE_URL="https://你的网关域名"
export ANTHROPIC_AUTH_TOKEN="你的 XiOne API 密钥"
```

## 配置方式二：settings.json（推荐，可以随项目分享）

macOS / Linux：`~/.claude/settings.json`
Windows：`%USERPROFILE%\.claude\settings.json`

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://你的网关域名",
    "ANTHROPIC_AUTH_TOKEN": "你的 XiOne API 密钥"
  }
}
```

## 注意

- 用 `ANTHROPIC_AUTH_TOKEN`，不是 `ANTHROPIC_API_KEY`——前者发送
  `Authorization: Bearer` 头，是给第三方网关/代理用的；后者发送 `x-api-key` 头，
  是官方密钥专用的字段，两者不能混用，接错字段会直接 401。
- 网关地址不需要带 `/v1/messages` 后缀，Claude Code 自己会拼。
- `ANTHROPIC_BASE_URL` 一旦不是 Anthropic 官方地址，Claude Code 会**默认关掉
  MCP 工具搜索**（tool search）。如果你还接了 MCP 工具且发现搜不到，且确认
  网关能正确转发 `tool_reference` 相关字段，可以再加一条环境变量
  `ENABLE_TOOL_SEARCH=true` 手动打开。
