---
sidebar_position: 1
title: "客户端接入概览"
---

# 客户端接入概览

XiOne 对外暴露四种主流协议格式，市面上绝大多数 AI 编程助手（终端工具、IDE 插件、
桌面应用）都能通过"改一个地址、换一个密钥"的方式接入，不需要改工具本身的代码。

## 支持的协议

| 协议 | 网关路径 |
| --- | --- |
| OpenAI Chat Completions | `/v1/chat/completions` |
| OpenAI Responses | `/v1/responses` |
| Anthropic Messages | `/v1/messages` |
| Gemini | `/v1beta/models/{model}:generateContent` |

## 接入的通用思路

1. 在 XiOne 后台创建一个 API 密钥，勾选好这个客户端要用的模型
2. 找到客户端自己的"自定义 API 地址 / Base URL"配置项
3. 填入 `https://你的网关域名`（多数工具会自己拼接协议路径，不用手动加 `/v1/xxx`）
4. 密钥换成 XiOne 生成的那一个，不是官方的密钥

**关键判断依据是协议，不是品牌**：只要客户端支持"自定义 OpenAI 兼容端点"或
"自定义 Anthropic 兼容端点"，理论上都能接入，即使下面列表里没有专门写它。

## 已验证的客户端

下面每篇都是我们实际核对过官方文档/仓库、确认配置字段准确的接入说明：

- [Claude Code（终端）](/docs/client-setup/claude-code)
- [Codex CLI（终端）](/docs/client-setup/codex-cli)
- [Gemini CLI（终端）](/docs/client-setup/gemini-cli)
- [OpenCode](/docs/client-setup/opencode)
- [WorkBuddy / CodeBuddy（桌面应用）](/docs/client-setup/workbuddy-codebuddy)
- [CC Switch（多工具配置管理）](/docs/client-setup/cc-switch)

其他客户端（比如某些垂直厂商的终端工具）暂时没有收录，不代表接不了——多数
遵循上面的通用思路就能配好，欢迎在用过之后反馈补充。
