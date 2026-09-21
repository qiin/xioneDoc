---
sidebar_position: 4
---

# Gemini CLI（终端）

## 原理

Gemini CLI 支持用环境变量覆盖默认的 Gemini API 地址，请求改发到指定地址，
协议仍然是 Gemini 的 `generateContent` 格式，对应 XiOne 的
`/v1beta/models/{model}:generateContent`。

## 配置

```bash
export GOOGLE_GEMINI_BASE_URL="https://你的网关域名"
export GEMINI_API_KEY="你的 XiOne API 密钥"
```

:::note
不同版本的 Gemini CLI 对这个环境变量的命名做过调整，如果 `GOOGLE_GEMINI_BASE_URL`
不生效，查一下当前安装版本的 changelog，确认对应版本用的具体变量名。
:::

## 验证

```bash
gemini
> 你好
```

如果能正常收到回复，说明请求已经走通了网关；如果报认证错误，先确认密钥有没有
勾选对应的 Gemini 协议模型。
