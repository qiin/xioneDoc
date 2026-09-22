---
sidebar_position: 6
title: "WorkBuddy / CodeBuddy（桌面应用）"
---

# WorkBuddy / CodeBuddy（桌面应用）

WorkBuddy / CodeBuddy 是桌面 IDE 类应用，不是终端命令行工具，通过一个
`models.json` 文件添加自定义模型，走 OpenAI Chat Completions 协议。

## 配置文件位置

- 用户级：`~/.codebuddy/models.json`（Windows 上是 `%USERPROFILE%\.codebuddy\models.json`）
- 项目级：`<你的项目目录>/.codebuddy/models.json`

两边都存在时，**项目级会覆盖用户级**：同一个 `id` 的模型定义整条被项目级替换，
`availableModels` 列表也是项目级整体覆盖用户级，不是合并。只在当前项目用可以直接
写项目级，多个项目通用就写用户级。

## 配置内容

```json
{
  "models": [
    {
      "id": "xione-model",
      "name": "XiOne 网关",
      "vendor": "xione",
      "url": "https://你的网关域名/v1/chat/completions",
      "apiKey": "${XIONE_API_KEY}",
      "maxInputTokens": 128000,
      "maxOutputTokens": 8192,
      "supportsToolCall": true,
      "supportsImages": true
    }
  ],
  "availableModels": ["xione-model"]
}
```

**`availableModels` 这一项不能漏**：`models` 只是登记这个模型的定义，真正决定
它会不会出现在模型选择器里的是 `availableModels`——只写了 `models` 没加
`availableModels` 是配置里最容易踩的坑，表现就是保存、重启之后模型选择器里
死活找不到新模型。

其他字段：`apiKey` 用的是环境变量引用写法（`${XIONE_API_KEY}`），实际密钥在
系统环境变量 `XIONE_API_KEY` 里设置，不直接写进文件；`url` 同样支持这种
`${VAR}` 写法。`maxInputTokens` / `maxOutputTokens` 按你后台配置的模型实际
上限填，`supportsToolCall` / `supportsImages` 按模型实际能力填 `true` 或 `false`。

## 生效

保存文件后**完全重启**应用（不是刷新窗口），重启后在模型选择器里应该能看到
`availableModels` 里列出的模型。
