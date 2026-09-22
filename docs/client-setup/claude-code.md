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

- 用 `ANTHROPIC_AUTH_TOKEN`，不是 `ANTHROPIC_API_KEY`——后者是官方密钥专用的字段，
  接第三方网关要用前者。
- 网关地址不需要带 `/v1/messages` 后缀，Claude Code 自己会拼。
