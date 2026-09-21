---
sidebar_position: 6
---

# WorkBuddy / CodeBuddy（桌面应用）

WorkBuddy / CodeBuddy 是桌面 IDE 类应用，不是终端命令行工具，通过一个
`models.json` 文件添加自定义模型，走 OpenAI Chat Completions 协议。

## 配置文件位置

- 用户级：`C:\Users\<你的用户名>\.codebuddy\models.json`（Windows 示例路径，
  macOS/Linux 对应各自的用户目录）
- 项目级：`<你的项目目录>\.codebuddy\models.json`

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
  ]
}
```

`apiKey` 这里用的是环境变量引用写法，实际密钥在系统环境变量 `XIONE_API_KEY`
里设置，不直接写进文件。`maxInputTokens` / `maxOutputTokens` 按你后台配置的
模型实际上限填，`supportsToolCall` / `supportsImages` 按模型实际能力填 `true`
或 `false`。

## 生效

保存文件后**完全重启**应用（不是刷新窗口），文件要保存成不带 BOM 的 UTF-8，
否则可能读取失败。重启后在模型选择器里应该能看到新加的模型。
