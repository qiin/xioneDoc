---
title: Claude Code - 终端
sidebar_position: 2
---
# Claude Code（终端）

通过配置文件的方式在电脑上安装和配置 Claude Code CLI（命令行工具）

:::info

如果遇到问题，可以将本页全部内容和问题截图，复制给 [豆包](https://www.doubao.com/) 或者 [DeepSeek](https://chat.deepseek.com/) 等 AI，按照它的提示执行对应命令即可。

如果 AI 也无法解决，可以联系我们的工程师，为您提供技术上的支持与帮助。

:::

# Windows

## 1. 安装 Node.js / Git

前往 [Node.js 官网](https://nodejs.org/en/download) 下载并安装 LTS 版本。（如果已经安装可以跳过）

验证安装：

如果出现下面的提示就说明 node 已经安装成功了

检查node版本复制node --version

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

* 用 `ANTHROPIC_AUTH_TOKEN`，不是 `ANTHROPIC_API_KEY`——前者发送
  `Authorization: Bearer` 头，是给第三方网关/代理用的；后者发送 `x-api-key` 头，
  是官方密钥专用的字段，两者不能混用，接错字段会直接 401。
* 网关地址不需要带 `/v1/messages` 后缀，Claude Code 自己会拼。
* `ANTHROPIC_BASE_URL` 一旦不是 Anthropic 官方地址，Claude Code 会**默认关掉
  MCP 工具搜索**（tool search）。如果你还接了 MCP 工具且发现搜不到，且确认
  网关能正确转发 `tool_reference` 相关字段，可以再加一条环境变量
  `ENABLE_TOOL_SEARCH=true` 手动打开。
