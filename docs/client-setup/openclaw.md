---
sidebar_position: 9
title: "OpenClaw"
---

# OpenClaw

OpenClaw 是一个开源的 AI Agent 网关/编排平台，可以统一接入多家大模型并通过 Telegram、飞书等渠道把 AI 助手部署成可对话、可执行任务的智能体。

# MacOS/ Linux

## 1. 安装 OpenClaw

1.打开终端执行命令，执行 openclaw 安装脚本

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

![image](https://assets.aicodewith.ai/docs/1780985837370-e50eb946-0d89-4382-970a-b004c13ab3a8.png)

2.执行 openclaw 初始化命令

```bash
openclaw onboard --install-daemon
```

![image](https://assets.aicodewith.ai/docs/1780986597584-7a997d00-7787-44f8-98ba-790c154a0471.png)

3.选择快速安装模式

![image](https://assets.aicodewith.ai/docs/1780985993523-aa5898cb-b84c-4838-8268-79a8bc2980bd.png)

4.配置大模型，先选择跳过

![image](https://assets.aicodewith.ai/docs/1780986134956-e733c03d-c1e5-4a8f-98c2-02c8281ceac5.png)

5.选择模型；如按提供商筛选模型，选择Google随便选一个模型，后面会重新配的

![image](https://assets.aicodewith.ai/docs/1780986948213-209234df-3d0d-46f7-90be-38a4a65f9da6.png)

6.配置对话机器人，先跳过，后面再进行配置

![image](https://assets.aicodewith.ai/docs/1780987074851-0f9628b7-dd6a-405d-b7fe-f19b88e4dd5c.png)

7.配置自带的skills包，选择yes

![image](https://assets.aicodewith.ai/docs/1780987156674-c30698d4-3bf7-4ae9-a39b-447e88780d92.png)

8.按空格选择，选完之后，按回车确认

![image](https://assets.aicodewith.ai/docs/1780987417217-95752756-44db-4606-b74f-67b57aeaa03c.png)

9.skills安装方式，选择pnpm

![image](https://assets.aicodewith.ai/docs/1780988537320-fa1b8306-96dc-4c06-a6e7-f792d6c0292a.png)

10.选择自己所需要的skills然后回车

![image](https://assets.aicodewith.ai/docs/1780988408767-23e9710b-0e76-41c0-b276-c04e01ab6351.png)

11.配置skills所需的大模型apikey，这里全部选择No

![image](https://assets.aicodewith.ai/docs/1780988447008-4d2c2d2a-c1f5-470e-953d-00a1b82dc12d.png)

12.重启网关

![image](https://assets.aicodewith.ai/docs/1780988288584-92363d79-00d2-4290-9207-b88f852abeb5.png)

![image](https://assets.aicodewith.ai/docs/1780988362187-3cfe0676-e953-4637-b36f-1124eca4a085.png)

## 2. 安装 OpenClaw在配置文件 openclaw.json 中加入XiOneAPI

> 创建您的密钥key：[https://doc.xione.ai/docs/client-setup/overview/)

1.打开终端执行命令，创建配置文件

```bash
mkdir -p ~/.openclaw && cat << 'EOF' > ~/.openclaw/openclaw.json
{
  "models": {
    "mode": "merge",
    "providers": {
      "XiOne-claude": {
        "baseUrl": "https://你的XiOne网关域名",
        "apiKey": "这里填写你的密钥",
        "api": "anthropic-messages",
        "models": [
          {
            "id": "claude-opus-4-8",
            "name": "Opus 4.8",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 200000,
            "maxTokens": 128000
          },
          {
            "id": "claude-opus-4-8[1m]",
            "name": "Opus 4.8 (1M)",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 1000000,
            "maxTokens": 128000
          },
          {
            "id": "claude-opus-4-7",
            "name": "Opus 4.7",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 200000,
            "maxTokens": 128000
          },
          {
            "id": "claude-opus-4-7[1m]",
            "name": "Opus 4.7 (1M)",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 1000000,
            "maxTokens": 128000
          },
          {
            "id": "claude-opus-4-6",
            "name": "Opus 4.6",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 200000,
            "maxTokens": 128000
          },
          {
            "id": "claude-opus-4-6[1m]",
            "name": "Opus 4.6 (1M)",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 1000000,
            "maxTokens": 128000
          },
          {
            "id": "claude-sonnet-4-6",
            "name": "Sonnet 4.6",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 200000,
            "maxTokens": 128000
          },
          {
            "id": "claude-sonnet-4-6[1m]",
            "name": "Sonnet 4.6 (1M)",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 1000000,
            "maxTokens": 128000
          },
          {
            "id": "claude-haiku-4-5-20251001",
            "name": "Haiku 4.5",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 200000,
            "maxTokens": 8192
          }
        ]
      },
      "XiOne-openai": {
        "baseUrl": "https://你的XiOne网关域名/v1",
        "apiKey": "这里填写你的密钥",
        "api": "openai-responses",
        "models": [
          {
            "id": "gpt-5.4",
            "name": "GPT-5.4",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 1000000,
            "maxTokens": 128000
          },
          {
            "id": "gpt-5.5",
            "name": "GPT-5.5",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 400000,
            "maxTokens": 128000
          }
        ]
      },
      "XiOne-gemini": {
        "baseUrl": "https://你的XiOne网关域名/gemini_cli/v1beta",
        "apiKey": "这里填写你的密钥",
        "api": "google-generative-ai",
        "models": [
          {
            "id": "gemini-3.1-pro-preview",
            "name": "3.1 Pro Preview",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 1000000,
            "maxTokens": 65536
          },
          {
            "id": "gemini-3-pro-preview",
            "name": "3 Pro Preview",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 1000000,
            "maxTokens": 65536
          },
          {
            "id": "gemini-2.5-pro",
            "name": "2.5 Pro",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 1000000,
            "maxTokens": 65536
          },
          {
            "id": "gemini-3.5-flash",
            "name": "Gemini 3 Flash Preview",
            "reasoning": true,
            "input": ["text", "image", "video"],
            "contextWindow": 1000000,
            "maxTokens": 65536
          },
          {
            "id": "gemini-3-pro-image-preview",
            "name": "gemini图片",
            "reasoning": false,
            "input": ["text", "image"],
            "contextWindow": 200000,
            "maxTokens": 65536
          }
        ]
      },
      "XiOne-deepseek": {
        "baseUrl": "https://你的XiOne网关域名/v1",
        "apiKey": "这里填写你的密钥",
        "api": "openai-completions",
        "models": [
          {
            "id": "deepseek-v4-pro",
            "name": "DeepSeek V4 Pro",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 200000,
            "maxTokens": 32000
          },
          {
            "id": "deepseek-v4-flash",
            "name": "DeepSeek V4 Flash",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 200000,
            "maxTokens": 32000
          },
          {
            "id": "deepseek-v3.2",
            "name": "DeepSeek V3.2",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 128000
          },
          {
            "id": "deepseek-r1-0528",
            "name": "DeepSeek R1 0528",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 32000
          }
        ]
      },
      "XiOne-qwen": {
        "baseUrl": "https://你的XiOne网关域名/v1",
        "apiKey": "这里填写你的密钥",
        "api": "openai-completions",
        "models": [
          {
            "id": "qwen3.5-397b-a17b",
            "name": "Qwen3.5 397B A17B",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 262000,
            "maxTokens": 128000
          },
          {
            "id": "qwen3-coder-next",
            "name": "Qwen3 Coder Next",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 200000,
            "maxTokens": 128000
          },
          {
            "id": "qwen3-coder",
            "name": "Qwen3 Coder",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 256000,
            "maxTokens": 64000
          },
          {
            "id": "qwen3-next-80b-a3b-thinking",
            "name": "Qwen3 Next 80B A3B Thinking",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 256000,
            "maxTokens": 256000
          },
          {
            "id": "qwen3-next-80b-a3b-instruct",
            "name": "Qwen3 Next 80B A3B Instruct",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 256000,
            "maxTokens": 256000
          },
          {
            "id": "qwen3-30b-a3b-thinking-2507",
            "name": "Qwen3 30B A3B Thinking 2507",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 256000,
            "maxTokens": 256000
          },
          {
            "id": "qwen3-30b-a3b-instruct-2507",
            "name": "Qwen3 30B A3B Instruct 2507",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 256000,
            "maxTokens": 256000
          },
          {
            "id": "qwen3-235b-a22b-thinking-2507",
            "name": "Qwen3 235B A22B Thinking 2507",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 32000
          },
          {
            "id": "qwen3-235b-a22b-instruct-2507",
            "name": "Qwen3 235B A22B Instruct 2507",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 128000
          },
          {
            "id": "qwen3-235b-a22b",
            "name": "Qwen3 235B A22B",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 16000
          },
          {
            "id": "qwen3-32b",
            "name": "Qwen3 32B",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 40000,
            "maxTokens": 40000
          },
          {
            "id": "qwen3-14b",
            "name": "Qwen3 14B",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 40000,
            "maxTokens": 40000
          },
          {
            "id": "qwq-32b",
            "name": "QwQ 32B",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 8000
          },
          {
            "id": "qwen2.5-72b-instruct",
            "name": "Qwen2.5 72B Instruct",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 8000
          },
          {
            "id": "qwen2.5-32b-instruct",
            "name": "Qwen2.5 32B Instruct",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 8000
          },
          {
            "id": "qwen2.5-7b-instruct",
            "name": "Qwen2.5 7B Instruct",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 8000
          }
        ]
      },
      "XiOne-kimi": {
        "baseUrl": "https://你的XiOne网关域名/v1",
        "apiKey": "这里填写你的密钥",
        "api": "openai-completions",
        "models": [
          {
            "id": "kimi-k2.5",
            "name": "Kimi K2.5",
            "reasoning": false,
            "input": ["text", "image"],
            "contextWindow": 256000,
            "maxTokens": 90000
          },
          {
            "id": "kimi-k2",
            "name": "Kimi K2",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 80000
          },
          {
            "id": "kimi-k2-thinking",
            "name": "Kimi K2 Thinking",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 256000,
            "maxTokens": 32000
          }
        ]
      },
      "XiOne-glm": {
        "baseUrl": "https://你的XiOne网关域名/v1",
        "apiKey": "这里填写你的密钥",
        "api": "openai-completions",
        "models": [
          {
            "id": "glm-5.1",
            "name": "GLM 5.1",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 200000,
            "maxTokens": 128000
          },
          {
            "id": "glm-5",
            "name": "GLM 5",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 200000,
            "maxTokens": 128000
          },
          {
            "id": "glm-4.7",
            "name": "GLM 4.7",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 202000,
            "maxTokens": 202000
          },
          {
            "id": "glm-4.6",
            "name": "GLM 4.6",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 202000,
            "maxTokens": 202000
          }
        ]
      },
      "XiOne-minimax": {
        "baseUrl": "https://你的XiOne网关域名/v1",
        "apiKey": "这里填写你的密钥",
        "api": "openai-completions",
        "models": [
          {
            "id": "minimax-m2.7",
            "name": "MiniMax M2.7",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 200000,
            "maxTokens": 32000
          },
          {
            "id": "minimax-m2.5",
            "name": "MiniMax M2.5",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 200000,
            "maxTokens": 32000
          },
          {
            "id": "minimax-m2.1",
            "name": "MiniMax M2.1",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 196000,
            "maxTokens": 32000
          },
          {
            "id": "mimo-v2-flash",
            "name": "MiMo V2 Flash",
            "reasoning": true,
            "input": ["text"],
            "contextWindow": 256000,
            "maxTokens": 256000
          }
        ]
      },
      "XiOne-step": {
        "baseUrl": "https://你的XiOne网关域名/v1",
        "apiKey": "这里填写你的密钥",
        "api": "openai-completions",
        "models": [
          {
            "id": "longcat-flash-chat",
            "name": "LongCat Flash Chat",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 32000
          }
        ]
      },
      "XiOne-bytedance": {
        "baseUrl": "https://你的XiOne网关域名/v1",
        "apiKey": "这里填写你的密钥",
        "api": "openai-completions",
        "models": [
          {
            "id": "seed-oss-36b-instruct",
            "name": "Seed OSS 36B Instruct",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 512000,
            "maxTokens": 512000
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "workspace": "/Users/XiOne/.openclaw/workspace",
      "model": {
        "primary": "XiOne-claude/claude-opus-4-8",
        "fallbacks": ["XiOne-claude/claude-sonnet-4-6", "XiOne-openai/gpt-5.5"]
      },
      "models": {
        "XiOne-claude/claude-opus-4-8": {},
        "XiOne-claude/claude-opus-4-8[1m]": {},
        "XiOne-claude/claude-opus-4-7": {},
        "XiOne-claude/claude-opus-4-7[1m]": {},
        "XiOne-claude/claude-opus-4-6": {},
        "XiOne-claude/claude-opus-4-6[1m]": {},
        "XiOne-claude/claude-sonnet-4-6": {},
        "XiOne-claude/claude-sonnet-4-6[1m]": {},
        "XiOne-claude/claude-haiku-4-5-20251001": {},
        "XiOne-openai/gpt-5.4": {},
        "XiOne-openai/gpt-5.5": {},
        "XiOne-gemini/gemini-3.1-pro-preview": {},
        "XiOne-gemini/gemini-3-pro-preview": {},
        "XiOne-gemini/gemini-2.5-pro": {},
        "XiOne-gemini/gemini-3.5-flash": {},
        "XiOne-gemini/gemini-3-pro-image-preview": {},
        "XiOne-deepseek/deepseek-v4-pro": {},
        "XiOne-deepseek/deepseek-v4-flash": {},
        "XiOne-deepseek/deepseek-v3.2": {},
        "XiOne-deepseek/deepseek-r1-0528": {},
        "XiOne-qwen/qwen3.5-397b-a17b": {},
        "XiOne-qwen/qwen3-coder-next": {},
        "XiOne-qwen/qwen3-coder": {},
        "XiOne-qwen/qwen3-next-80b-a3b-thinking": {},
        "XiOne-qwen/qwen3-next-80b-a3b-instruct": {},
        "XiOne-qwen/qwen3-30b-a3b-thinking-2507": {},
        "XiOne-qwen/qwen3-30b-a3b-instruct-2507": {},
        "XiOne-qwen/qwen3-235b-a22b-thinking-2507": {},
        "XiOne-qwen/qwen3-235b-a22b-instruct-2507": {},
        "XiOne-qwen/qwen3-235b-a22b": {},
        "XiOne-qwen/qwen3-32b": {},
        "XiOne-qwen/qwen3-14b": {},
        "XiOne-qwen/qwq-32b": {},
        "XiOne-qwen/qwen2.5-72b-instruct": {},
        "XiOne-qwen/qwen2.5-32b-instruct": {},
        "XiOne-qwen/qwen2.5-7b-instruct": {},
        "XiOne-kimi/kimi-k2.5": {},
        "XiOne-kimi/kimi-k2": {},
        "XiOne-kimi/kimi-k2-thinking": {},
        "XiOne-glm/glm-5.1": {},
        "XiOne-glm/glm-5": {},
        "XiOne-glm/glm-4.7": {},
        "XiOne-glm/glm-4.6": {},
        "XiOne-minimax/minimax-m2.7": {},
        "XiOne-minimax/minimax-m2.5": {},
        "XiOne-minimax/minimax-m2.1": {},
        "XiOne-minimax/mimo-v2-flash": {},
        "XiOne-step/longcat-flash-chat": {},
        "XiOne-bytedance/seed-oss-36b-instruct": {}
      }
    }
  },
  "gateway": {
    "mode": "local",
    "auth": {
      "mode": "token",
      "token": "aed3b7555d271db82fbdc541f88701e9e9d557f98e6da221"
    },
    "port": 18789,
    "bind": "loopback",
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    },
    "controlUi": {
      "allowInsecureAuth": true
    },
    "nodes": {
      "denyCommands": [
        "camera.snap",
        "camera.clip",
        "screen.record",
        "contacts.add",
        "calendar.add",
        "reminders.add",
        "sms.send",
        "sms.search"
      ]
    }
  },
  "session": {
    "dmScope": "per-channel-peer"
  },
  "tools": {
    "profile": "coding"
  },
  "meta": {
    "lastTouchedVersion": "2026.6.1",
    "lastTouchedAt": "2026-06-09T08:12:03.433Z"
  }
}
EOF
```

## 3.测试

1.打开终端执行命令，重启网关服务

```bash
openclaw gateway run
```

2.打开终端执行命令，测试模型回复

```bash
openclaw tui
```

![image](https://assets.aicodewith.ai/docs/1781000093752-cbc5892c-6770-48d8-9ec6-cb486f1702f4.png)

# 配置Telegram

## 1. 获取 Telegram Bot Token

1. 在 Telegram 中搜索 `@BotFather`

2. 发送 `/newbot`

3. 按提示设置 bot 名称

4. 获得 Bot Token（格式：`123456789:ABCdefGHIjklMNOpqrsTUVwxyz`）

![14e827b6341d8d84387607b95f7fcb69](https://assets.aicodewith.ai/docs/1769524863859-91f7f2d8-acbc-4412-8a4e-aa79b5864ec9.png)

## 2. 启用 Telegram 插件

这个步骤需要在电脑的终端里面执行，这个插件默认是关闭的

```bash
openclaw plugins enable telegram
```

![1e12f4947846adccd14253b4494d5b25](https://assets.aicodewith.ai/docs/1769524968139-d01a1a4f-420f-47a6-8170-f839f05f917b.png)

## 3. 配置 Bot Token

这里输入你第一步获取的那个 token

```
openclaw config set channels.telegram.botToken "你的Bot_Token"
```

![d5f04fa17790f330e2292cec82d95cea](https://assets.aicodewith.ai/docs/1769524959959-39914d50-a9f8-4bb2-aea9-6e77266facde.png)

## 4. 启动 Gateway

```bash
openclaw gateway run
```

如果报错了，可以先尝试停止一下

```bash
openclaw gateway stop
```

![image](https://assets.aicodewith.ai/docs/1769525461250-dec9b757-ff98-4711-ae1b-657fd3548af8.png)

## 5. 测试

在 Telegram 中找到你的 bot，发送任意消息，bot 会给你一个验证码

![af597037071fdf0f436c9d292c2a2d54](https://assets.aicodewith.ai/docs/1769525324221-d3cd4443-5abd-4bc0-9fcc-a8698e028385.jpg)

然后你需要在电脑上执行下面的命令：

```bash
openclaw pairing approve telegram 你的验证码
```

![ddfe15ce39940b54179a0420862386bd](https://assets.aicodewith.ai/docs/1769525412735-43273a57-a1ee-4da1-8f01-0c01622cf011.png)

# 配置飞书

## 1.启用飞书官方插件

1.新版本 OpenClaw 已内置支持，我们可以使用以下命令来启用

```bash
# openclaw更新命令：npm版，pnpm版
npm install -g openclaw@latest
pnpm add -g openclaw@latest
 
# 飞书插件启用命令
openclaw plugins enable feishu
```

![image](https://assets.aicodewith.ai/docs/1780975393107-1cadc56a-051e-4438-a88d-9f7c0258887c.png)

2.安装完成后，使用以下命令重启网关

```bash
openclaw gateway restart
```

![image](https://assets.aicodewith.ai/docs/1780975545294-79ba54d8-8138-4421-bd22-db3fef0447e1.png)

## 2.在飞书开放平台创建应用和配置应用权限

1.打开飞书开放平台 [https://open.feishu.cn/app](https://open.feishu.cn/app)

2.点击【创建企业自建应用】并填写应用名称、描述和图标

![image](https://assets.aicodewith.ai/docs/1780911786457-d9b2529d-1d29-4caf-a57b-3085ea059379.png)

![image](https://assets.aicodewith.ai/docs/1780911822064-3d3c6404-058b-4f15-8590-bc100a76888e.png)

3.点击【凭证与基础信息】复制App ID和App Sercet用来配置OpenClaw中的飞书

![image](https://assets.aicodewith.ai/docs/1780912395228-c32643ca-d567-41df-b696-ee8baa96e6f4.png)

4.点击【添加应用能力】，然后点击右侧机器人下面的【添加】即可

![image](https://assets.aicodewith.ai/docs/1780912439568-c3d138b4-5aba-456f-833f-674320a33190.png)

![image](https://assets.aicodewith.ai/docs/1780912448152-09266ccf-bc08-4138-94b6-afc5d058579c.png)

5.点击【权限管理】给应用配置权限，在开通权限下方的输入框输入【IM:】然后点击【权限名称】左侧的复选框全选所有即时通信相关的权限，最后点击【确认开通权限】就完成了应用权限的配置

![image](https://assets.aicodewith.ai/docs/1780912463473-614167f6-3390-4098-b719-70587e053e51.png)

6.点击【创建版本】跳转到版本详情页面，输入符合您规范的应用版本号和更新说明并保存

![image](https://assets.aicodewith.ai/docs/1780912482489-644003ef-f5b6-41e9-bb3e-57c430bea37c.png)

![image](https://assets.aicodewith.ai/docs/1780912494382-f1fe8c95-e510-48d1-8255-f3ba73b08416.png)

7.保存后确认发布申请即完成发布操作

![image](https://assets.aicodewith.ai/docs/1780912517954-82e83f47-a572-4af4-96fb-8da2fc2151f3.png)

![image](https://assets.aicodewith.ai/docs/1780912527088-86df6b97-6d2e-49cc-acb5-b8f88f01bb03.png)

8.在飞书开放平台配置事件订阅：点击【事件与回调】找到事件配置下方的订阅方式，单击图标后选择【使用 长连接 接收事件】，保存

![image](https://assets.aicodewith.ai/docs/1780912891638-87320400-b384-4fcd-9b04-2aff2c771d85.png)

![image](https://assets.aicodewith.ai/docs/1780912912863-ecebd8ac-ae19-4f04-8374-caabbb57f67f.png)

9.单击添加事件按钮，在搜索框中输入【接收消息】选中复选框后点击确认添加

![image](https://assets.aicodewith.ai/docs/1780912958537-0e907ee6-14fa-4121-a77b-5f96fe3c7bc6.png)

![image](https://assets.aicodewith.ai/docs/1780912964700-5795e446-2b76-4cc7-b3a1-90c4cf1a1ac7.png)

10.再次创建版本和发布应用，即完成

![image](https://assets.aicodewith.ai/docs/1780912980020-cc9dcb93-8cd8-4268-97d1-aa370eeab3d4.png)

![image](https://assets.aicodewith.ai/docs/1780913654441-d42c8d15-0104-408c-a237-d25172c8d840.png)

![image](https://assets.aicodewith.ai/docs/1780913664072-fa24c999-db0d-4cdd-a205-022aa46d23b5.png)

## 3.在OpenClaw中配置飞书

1.回到终端 输入以下命令配置 channel：

```bash
openclaw channels add
```

![image](https://assets.aicodewith.ai/docs/1780914207817-57069767-759a-453a-94fe-1e3861302d79.png)

![image](https://assets.aicodewith.ai/docs/1780914227831-30d05e3a-d62a-4c90-aba5-a46a9c0bc45a.png)

2.输入飞书的App ID，App Secrect

![image](https://assets.aicodewith.ai/docs/1780914559422-b7bd0eb1-aac3-4d10-8c43-05845a587efe.png)

![image](https://assets.aicodewith.ai/docs/1780914601431-24a2a8cf-46f2-439a-b35a-35aca4947dc6.png)

3.接受群组聊天，选择Open

![image](https://assets.aicodewith.ai/docs/1780914746248-cbf82055-d7d0-4413-aaec-2fa178cef080.png)

4.选择Finished

![image](https://assets.aicodewith.ai/docs/1780914823319-c732e682-b7c2-426c-98ac-45ceec2ec088.png)

5.选择Yes

![image](https://assets.aicodewith.ai/docs/1780914876822-6f502a9e-2406-424a-8b78-1e12d4d23c82.png)

6.选择Open

![image](https://assets.aicodewith.ai/docs/1780914960199-9a864357-0d2b-4620-a33a-3bccd16fb41c.png)

7.选择No

![image](https://assets.aicodewith.ai/docs/1780915020047-eefd4561-0a34-424f-b4ab-76598c48f671.png)

8.重启OpenClaw网关，标注已重启即成功

```bash
openclaw gateway restart
```

## 4.使用飞书创建群聊，测试OpenClaw的飞书频道是否能正常运行

1.必须使用飞书PC客户端或者手机App才能创建群聊。下载链接[https://www.feishu.cn/download](https://www.feishu.cn/download)

2.在群聊页面的右上角的设置中添加机器人助手，聊天中@机器人输入【你好】测试能否正常回复

![image](https://assets.aicodewith.ai/docs/1780976550822-e430e844-f903-46e7-a1f2-0ee991b58d76.png)

![image](https://assets.aicodewith.ai/docs/1780976585271-f5333259-ed7c-422a-b24a-da14d1f0b445.png)

3.正常回复说明配置成功，用户可以按照自身需求自行配置不同的权限

![image](https://assets.aicodewith.ai/docs/1780976628667-de8ec0fd-3b0b-4afa-8e77-addc248b2f0a.png)

# 配置OpenClaw Web界面

> 已经装好我们的openclaw并测试成功回复

## 1.打开openclaw网址

[https://docs.openclaw.ai/web/control-ui](https://docs.openclaw.ai/web/control-ui)

1.左上角可更换语言

![image](https://assets.aicodewith.ai/docs/1782200643656-8335f7bb-d851-46f8-913e-550ca2f44df4.png)

## 2.启动网关

1.复制粘贴到终端即可

```bash
openclaw gateway
```

## 3.打开openclaw Web界面

1.点击链接跳转

![image](https://assets.aicodewith.ai/docs/1782200726734-98bd8add-1836-4281-8feb-0630345d16a1.png)

## 4.启动网关获取仪表盘URL

1.按顺序依次复制粘贴到终端执行即可

![image](https://assets.aicodewith.ai/docs/1782201030201-0ef07b6b-d8c4-4ba5-ad34-8f8aa9ec17ec.png)

## 5.测试

1.上一步会自动开启web页面，输入你好验证，正常回复即成功

![image](https://assets.aicodewith.ai/docs/1782201207359-3af92aef-ea90-4098-902c-c44f2dd04719.png)

# OpenClaw 能拿来做什么

下面纯干货，看完肯定有收获

# 相关链接

- GitHub: [https://github.com/DaneelOlivaw1/openclaw-XiOne-auth]()
- npm: [https://www.npmjs.com/package/openclaw-XiOne-auth]()

