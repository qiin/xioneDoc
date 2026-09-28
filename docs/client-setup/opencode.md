---
sidebar_position: 10
title: "OpenCode"
---

# OpenCode

OpenCode 是一个开源的终端 AI 编程助手（类似 Claude Code），可以在命令行里调用多家大模型（Claude、GPT、Gemini、DeepSeek 等）帮你读写代码、执行命令、完成开发任务。

# Windows

## 1. 安装 OpenCode

1.
按 **Win + R**输入 Powershell
打开 PowerShell （建议以管理员身份运行）并执行：

```
npm i -g opencode-ai
```

![image](https://assets.aicodewith.ai/docs/1769478635944-5d6e01e4-b650-4ab7-9f2d-fd990eefbea9.png)

2.安装完成后，**关闭并重新打开 PowerShell**，然后验证安装：

```
opencode --version
```

![image](https://assets.aicodewith.ai/docs/1769478658868-abdc4013-a8ef-4aea-97cc-8d324d7ff9b4.png)

> 脚本执行策略问题
>
> 如果遇到“在此系统上禁止运行脚本”的错误：

## 2. 创建配置文件

1.首先执行一次 `opencode` 命令，这样会创建配置文件夹

![image](https://assets.aicodewith.ai/docs/1769496293298-59fd1531-2a19-45f9-a161-5c6b76db9f96.png)

2.然后在 ~/.config/opencode 下面创建 opencode.json，内容如下

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

```
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["oh-my-opencode"],
  "model": "XiOne-anthropic/claude-sonnet-5",
  "provider": {
    "XiOne-anthropic": {
      "npm": "@ai-sdk/anthropic",
      "name": "XiOne Anthropic",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "claude-haiku-4-5-20251001": {
          "name": "Haiku 4.5",
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 8192 }
        },
        "claude-opus-4-6": {
          "name": "Opus 4.6",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-opus-4-6[1m]": {
          "name": "Opus 4.6 (1M)",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-sonnet-4-6": {
          "name": "Sonnet 4.6",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-sonnet-4-6[1m]": {
          "name": "Sonnet 4.6 (1M)",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-opus-4-7": {
          "name": "Opus 4.7",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-opus-4-7[1m]": {
          "name": "Opus 4.7 (1M)",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-opus-4-8": {
          "name": "Opus 4.8",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-opus-4-8[1m]": {
          "name": "Opus 4.8 (1M)",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-opus-5": {
          "name": "Opus 5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-fable-5": {
          "name": "Fable 5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-fable-5-1": {
          "name": "Fable 5.1",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-sonnet-5": {
          "name": "Sonnet 5",
          "reasoning": true,
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 65536 }
        }
      }
    },
    "XiOne-openai": {
      "npm": "@ai-sdk/openai",
      "name": "XiOne OpenAI",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY",
        "setCacheKey": true
      },
      "models": {
        "gpt-5.4": {
          "name": "GPT-5.4",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "gpt-5.5": {
          "name": "GPT-5.5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 400000, "output": 128000 }
        },
        "gpt-5.6-sol": {
          "name": "GPT-5.6 Sol",
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "gpt-5.6-terra": {
          "name": "GPT-5.6 Terra",
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "gpt-5.6-luna": {
          "name": "GPT-5.6 Luna",
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "gpt-6-astra": {
          "name": "GPT-6 Astra",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "gpt-image-2": {
          "name": "GPT Image 2",
          "temperature": true,
          "limit": { "context": 32000, "output": 8192 }
        },
        "gpt-image-2.5-flare": {
          "name": "GPT Image 2.5 Flare",
          "temperature": true,
          "limit": { "context": 32000, "output": 8192 }
        },
        "gpt-image-2.5-sunburst": {
          "name": "GPT Image 2.5 Sunburst",
          "temperature": true,
          "limit": { "context": 32000, "output": 8192 }
        }
      }
    },
    "XiOne-gemini": {
      "npm": "@ai-sdk/google",
      "name": "XiOne Gemini",
      "options": {
        "baseURL": "https://你的XiOne网关域名/gemini_cli/v1beta",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "gemini-2.5-pro": {
          "name": "Gemini 2.5 Pro",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3-pro-preview": {
          "name": "Gemini 3 Pro Preview",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.1-pro-preview": {
          "name": "Gemini 3.1 Pro Preview",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.5-flash": {
          "name": "Gemini 3.5 Flash",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image", "video"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.6-flash": {
          "name": "Gemini 3.6 Flash",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image", "video"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.7-flash": {
          "name": "Gemini 3.7 Flash",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image", "video"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.8-flash": {
          "name": "Gemini 3.8 Flash",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image", "video"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        }
      }
    },
    "XiOne-deepseek": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne DeepSeek",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "deepseek-v4-flash": {
          "name": "DeepSeek V4 Flash",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        },
        "deepseek-v4-pro": {
          "name": "DeepSeek V4 Pro",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        },
        "deepseek-v4-flash-vision-exp": {
          "name": "DeepSeek V4 Flash Vision Exp",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 32000 }
        },
        "deepseek-flash": {
          "name": "DeepSeek Flash",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        }
      }
    },
    "XiOne-glm": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne GLM",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "glm-5.3": {
          "name": "GLM 5.3",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "glm-5.2": {
          "name": "GLM 5.2",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "glm-5.1": {
          "name": "GLM 5.1",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 128000 }
        },
        "glm-5": {
          "name": "GLM 5",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 128000 }
        },
        "glm-4.7": {
          "name": "GLM 4.7",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 202000, "output": 202000 }
        },
        "glm-4.6": {
          "name": "GLM 4.6",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 202000, "output": 202000 }
        }
      }
    },
    "XiOne-kimi": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne Kimi",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "kimi-k3": {
          "name": "Kimi K3",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "kimi-k2.7-code": {
          "name": "Kimi K2.7 Code",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "kimi-k2.6": {
          "name": "Kimi K2.6",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "kimi-k2.5": {
          "name": "Kimi K2.5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 256000, "output": 90000 }
        },
        "kimi-k2": {
          "name": "Kimi K2",
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 128000, "output": 80000 }
        },
        "kimi-k2-thinking": {
          "name": "Kimi K2 Thinking",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 256000, "output": 32000 }
        }
      }
    },
    "XiOne-minimax": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne MiniMax",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "minimax-m3": {
          "name": "MiniMax M3",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "mimo-v2-flash": {
          "name": "MiMo V2 Flash",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 256000, "output": 256000 }
        },
        "minimax-m2.7": {
          "name": "MiniMax M2.7",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        },
        "minimax-m2.5": {
          "name": "MiniMax M2.5",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        },
        "minimax-m2.1": {
          "name": "MiniMax M2.1",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 196000, "output": 32000 }
        }
      }
    },
    "XiOne-qwen": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne Qwen",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "qwen3.5-397b-a17b": {
          "name": "Qwen3.5 397B A17B",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 262000, "output": 128000 }
        },
        "qwen3-coder-next": {
          "name": "Qwen3 Coder Next",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 128000 }
        },
        "qwen3-coder": {
          "name": "Qwen3 Coder",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 256000, "output": 64000 }
        },
        "qwen3-32b": {
          "name": "Qwen3 32B",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 40000, "output": 40000 }
        },
        "qwen3-14b": {
          "name": "Qwen3 14B",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 40000, "output": 40000 }
        }
      }
    },
    "XiOne-step": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne Step",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "longcat-flash-chat": {
          "name": "LongCat Flash Chat",
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 128000, "output": 32000 }
        }
      }
    },
    "XiOne-bytedance": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne ByteDance",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "seed-oss-36b-instruct": {
          "name": "Seed OSS 36B Instruct",
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 512000, "output": 512000 }
        }
      }
    },
    "XiOne-grok": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne Grok",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "grok-4.5": {
          "name": "Grok 4.5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 65536 }
        },
        "grok-4.6": {
          "name": "Grok 4.6",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 65536 }
        }
      }
    }
  }
}
```

## 3. 验证安装

1.重新打开 PowerShell 或 IDE，运行：

```
opencode
```

2.然后输入 `/models` ，正常显示供应商，则说明配置成功

![img_v3_02131_e2a5117d-4c72-490d-932a-e714a2b3267g](https://assets.aicodewith.ai/docs/1782469500721-3195d768-79fc-4588-be55-8bb1d3b2ed4f.jpg)

3.在对话框中输入：`您好！`，如果能正常回复，并且在 XiOne 平台看到调用记录，则说明配置成功

![img_v3_02131_99b3db2d-b7cf-4f1c-b2f3-6d1a7941d96g](https://assets.aicodewith.ai/docs/1782469522461-2fe33366-32ac-4a30-a51f-fa06f2ba607c.jpg)

# MacOS/Linux

## 1. 安装 OpenCode

1.在 **终端** 中执行：

```
npm i -g opencode-ai
```

2.终端输入命令来验证安装：

```
opencode --version
```

![image](https://assets.aicodewith.ai/docs/1769498231328-62d06d66-1786-4c16-b4db-bce9c7c5e659.png)

## 2. 创建配置文件

> 复制代码到终端执行即可

1.首先删除 `~/.config/opencode` 路径下已存在的 opencode.json 文件（若有）

```bash
open -e ~/.config/opencode/opencode.json
```

2.没有的话，新建

```bash
touch ~/.config/opencode/opencode.json && open -e ~/.config/opencode/opencode.json
```

3.打开 ~/.config/opencode

```bash
open -e ~/.config/opencode/opencode.json
```

4.在里面创建 opencode.json

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

```
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["oh-my-opencode"],
  "model": "XiOne-anthropic/claude-sonnet-5",
  "provider": {
    "XiOne-anthropic": {
      "npm": "@ai-sdk/anthropic",
      "name": "XiOne Anthropic",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "claude-haiku-4-5-20251001": {
          "name": "Haiku 4.5",
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 8192 }
        },
        "claude-opus-4-6": {
          "name": "Opus 4.6",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-opus-4-6[1m]": {
          "name": "Opus 4.6 (1M)",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-sonnet-4-6": {
          "name": "Sonnet 4.6",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-sonnet-4-6[1m]": {
          "name": "Sonnet 4.6 (1M)",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-opus-4-7": {
          "name": "Opus 4.7",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-opus-4-7[1m]": {
          "name": "Opus 4.7 (1M)",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-opus-4-8": {
          "name": "Opus 4.8",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-opus-4-8[1m]": {
          "name": "Opus 4.8 (1M)",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-opus-5": {
          "name": "Opus 5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 128000 }
        },
        "claude-fable-5": {
          "name": "Fable 5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-fable-5-1": {
          "name": "Fable 5.1",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "claude-sonnet-5": {
          "name": "Sonnet 5",
          "reasoning": true,
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 65536 }
        }
      }
    },
    "XiOne-openai": {
      "npm": "@ai-sdk/openai",
      "name": "XiOne OpenAI",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY",
        "setCacheKey": true
      },
      "models": {
        "gpt-5.4": {
          "name": "GPT-5.4",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "gpt-5.5": {
          "name": "GPT-5.5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 400000, "output": 128000 }
        },
        "gpt-5.6-sol": {
          "name": "GPT-5.6 Sol",
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "gpt-5.6-terra": {
          "name": "GPT-5.6 Terra",
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "gpt-5.6-luna": {
          "name": "GPT-5.6 Luna",
          "tool_call": true,
          "temperature": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "gpt-6-astra": {
          "name": "GPT-6 Astra",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 128000 }
        },
        "gpt-image-2": {
          "name": "GPT Image 2",
          "temperature": true,
          "limit": { "context": 32000, "output": 8192 }
        },
        "gpt-image-2.5-flare": {
          "name": "GPT Image 2.5 Flare",
          "temperature": true,
          "limit": { "context": 32000, "output": 8192 }
        },
        "gpt-image-2.5-sunburst": {
          "name": "GPT Image 2.5 Sunburst",
          "temperature": true,
          "limit": { "context": 32000, "output": 8192 }
        }
      }
    },
    "XiOne-gemini": {
      "npm": "@ai-sdk/google",
      "name": "XiOne Gemini",
      "options": {
        "baseURL": "https://你的XiOne网关域名/gemini_cli/v1beta",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "gemini-2.5-pro": {
          "name": "Gemini 2.5 Pro",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3-pro-preview": {
          "name": "Gemini 3 Pro Preview",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.1-pro-preview": {
          "name": "Gemini 3.1 Pro Preview",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.5-flash": {
          "name": "Gemini 3 Flash Preview",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image", "video"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.6-flash": {
          "name": "Gemini 3.6 Flash",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image", "video"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.7-flash": {
          "name": "Gemini 3.7 Flash",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image", "video"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        },
        "gemini-3.8-flash": {
          "name": "Gemini 3.8 Flash",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image", "video"], "output": ["text"] },
          "limit": { "context": 1000000, "output": 65536 }
        }
      }
    },
    "XiOne-deepseek": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne DeepSeek",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "deepseek-v4-flash": {
          "name": "DeepSeek V4 Flash",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        },
        "deepseek-v4-pro": {
          "name": "DeepSeek V4 Pro",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        },
        "deepseek-v4-flash-vision-exp": {
          "name": "DeepSeek V4 Flash Vision Exp",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 32000 }
        },
        "deepseek-flash": {
          "name": "DeepSeek Flash",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        }
      }
    },
    "XiOne-glm": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne GLM",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "glm-5.3": {
          "name": "GLM 5.3",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "glm-5.2": {
          "name": "GLM 5.2",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "glm-5.1": {
          "name": "GLM 5.1",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 128000 }
        },
        "glm-5": {
          "name": "GLM 5",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 128000 }
        },
        "glm-4.7": {
          "name": "GLM 4.7",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 202000, "output": 202000 }
        },
        "glm-4.6": {
          "name": "GLM 4.6",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 202000, "output": 202000 }
        }
      }
    },
    "XiOne-kimi": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne Kimi",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "kimi-k3": {
          "name": "Kimi K3",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "kimi-k2.7-code": {
          "name": "Kimi K2.7 Code",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "kimi-k2.6": {
          "name": "Kimi K2.6",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "kimi-k2.5": {
          "name": "Kimi K2.5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 256000, "output": 90000 }
        },
        "kimi-k2": {
          "name": "Kimi K2",
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 128000, "output": 80000 }
        },
        "kimi-k2-thinking": {
          "name": "Kimi K2 Thinking",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 256000, "output": 32000 }
        }
      }
    },
    "XiOne-minimax": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne MiniMax",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "minimax-m3": {
          "name": "MiniMax M3",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 65536 }
        },
        "mimo-v2-flash": {
          "name": "MiMo V2 Flash",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 256000, "output": 256000 }
        },
        "minimax-m2.7": {
          "name": "MiniMax M2.7",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        },
        "minimax-m2.5": {
          "name": "MiniMax M2.5",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 32000 }
        },
        "minimax-m2.1": {
          "name": "MiniMax M2.1",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 196000, "output": 32000 }
        }
      }
    },
    "XiOne-qwen": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne Qwen",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "qwen3.5-397b-a17b": {
          "name": "Qwen3.5 397B A17B",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 262000, "output": 128000 }
        },
        "qwen3-coder-next": {
          "name": "Qwen3 Coder Next",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 200000, "output": 128000 }
        },
        "qwen3-coder": {
          "name": "Qwen3 Coder",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 256000, "output": 64000 }
        },
        "qwen3-32b": {
          "name": "Qwen3 32B",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 40000, "output": 40000 }
        },
        "qwen3-14b": {
          "name": "Qwen3 14B",
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 40000, "output": 40000 }
        }
      }
    },
    "XiOne-step": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne Step",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "longcat-flash-chat": {
          "name": "LongCat Flash Chat",
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 128000, "output": 32000 }
        }
      }
    },
    "XiOne-bytedance": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne ByteDance",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "seed-oss-36b-instruct": {
          "name": "Seed OSS 36B Instruct",
          "temperature": true,
          "tool_call": true,
          "limit": { "context": 512000, "output": 512000 }
        }
      }
    },
    "XiOne-grok": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "XiOne Grok",
      "options": {
        "baseURL": "https://你的XiOne网关域名/v1",
        "apiKey": "在这里替换成你的_XiOne_API_KEY"
      },
      "models": {
        "grok-4.5": {
          "name": "Grok 4.5",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 65536 }
        },
        "grok-4.6": {
          "name": "Grok 4.6",
          "attachment": true,
          "reasoning": true,
          "temperature": true,
          "tool_call": true,
          "modalities": { "input": ["text", "image"], "output": ["text"] },
          "limit": { "context": 200000, "output": 65536 }
        }
      }
    }
  }
}
```

## 3. 验证安装

1.重新打开终端或 IDE，运行：

```
opencode
```

2.在对话框中输入：`您好！`，如果能正常回复，并且在 XiOne 平台看到调用记录，则说明配置成功

![image](https://assets.aicodewith.ai/docs/1782452591515-2160122d-2260-464a-b9dc-fc950ad123cd.png)

# 如何使用

OpenCode 有三个主 agent，直接跟咱们聊天，对接的

分别是：Sisyphus（西西弗斯)、Atlas（阿特拉斯）、Prometheus（普罗米修斯）

![e628bb8424654083e3dfbeedb239d0bd](https://assets.aicodewith.ai/docs/1769519345703-83e3387e-5474-484f-9a01-82c9beed9a7f.png)

![65219ade1fa2c634d8c011a7eb3ffc8b](https://assets.aicodewith.ai/docs/1770005224021-7537a4ba-d155-4e7e-8c21-267248ba582d.png)

![f92e68ff586ea8b332c185df7c9c9691](https://assets.aicodewith.ai/docs/1770005229950-9f60e537-915f-415e-be0b-56dcbe8e7909.png)

![62598932f9d9011d5cd7dc8f6e98a7c5](https://assets.aicodewith.ai/docs/1770005234625-54ec5dc4-aa7e-4755-b570-865fb6291d68.png)

![a0cb29bbb3064c2c7b76079291dd0ec1](https://assets.aicodewith.ai/docs/1770005245661-aec3e187-539f-4869-9cc6-e8d23f5ee30e.png)

# 常见问题

1. BunInstallFailedError

![image](https://assets.aicodewith.ai/docs/1770005299547-e238eb18-41e7-4593-81bb-82be3b5381da.png)

因为 oh my opencode 插件需要从远端拉一个 models.dev 这个部分，拉不到的话就会报这个错

解决办法就是开 TUN 模式，如果已经开启 TUN 模式了，重新开关一下就好了

