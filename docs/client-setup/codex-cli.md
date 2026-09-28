---
sidebar_position: 3
title: "Codex CLI（终端）"
---

# Codex CLI（终端）

通过环境变量的方式，在电脑上安装并配置 Codex CLI（命令行工具）接入 XiOne。

> 如果安装过程中遇到问题，可以把报错信息发给 AI 助手或技术支持人员协助排查。

> Codex 0.122 及以上版本仅支持 Responses 协议。请确认你的 XiOne 网关已启用 `/v1/responses`。

## Windows 系统

### 1. 安装 Node.js

打开 [Node.js 官方下载页面](https://nodejs.org/en/download)，下载并安装 LTS 版本。安装时保持默认选项即可。

![下载 Node.js](https://assets.aicodewith.ai/docs/1769236302904-c4111827-cce4-4373-a0b6-9fadb2fd5783.png)

![安装 Node.js](https://assets.aicodewith.ai/docs/1769242462453-ed58b463-4883-4263-ae85-569ff225282e.png)

安装完成后，打开 PowerShell，执行：

```powershell
node --version
```

如果能看到版本号，说明安装成功。建议使用 Node.js 18 或更高版本。

![检查 Node.js 版本](https://assets.aicodewith.ai/docs/1769243887300-44dbcf3e-cb58-4e46-9622-3cb977b08967.png)

### 2. 安装 Codex CLI

在 PowerShell 中执行：

```powershell
npm install -g @openai/codex
```

如果下载较慢，可以使用国内镜像：

```powershell
npm install -g @openai/codex --registry=https://npmreg.proxy.ustclug.org
```

![安装 Codex CLI](https://assets.aicodewith.ai/docs/1769243912026-37c64881-3bda-477e-8886-8fd7e828a05d.png)

如果 PowerShell 提示脚本执行被禁止，可在当前用户范围内执行：

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

完成后重新打开 PowerShell。

### 3. 创建配置文件

先在 XiOne 控制台创建 API 密钥，并确认可用的模型名称。然后在 PowerShell 中执行下面的命令。请把网关域名、模型名和 API 密钥替换为你的实际信息。

```powershell
$codexDir = Join-Path $env:USERPROFILE '.codex'
New-Item -ItemType Directory -Path $codexDir -Force | Out-Null
$config = @'
model_provider = "xione"
model = "你的模型名"

[model_providers.xione]
name = "XiOne"
base_url = "https://你的XiOne网关域名/v1"
env_key = "XIONE_API_KEY"
wire_api = "responses"
'@
[System.IO.File]::WriteAllText((Join-Path $codexDir 'config.toml'), $config, (New-Object System.Text.UTF8Encoding($false)))
[Environment]::SetEnvironmentVariable('XIONE_API_KEY', '在这里替换成你的API密钥', 'User')
```

![创建配置文件](https://assets.aicodewith.ai/docs/1769271471052-733b781c-90a9-4378-a550-6156adfbd09e.png)

配置完成后关闭并重新打开 PowerShell，让环境变量生效。

### 4. 验证安装

```powershell
codex --version
codex
```

首次在某个目录运行时，Codex 可能要求确认是否信任该目录。只有在你确认目录内容可信时才选择继续。

![运行 Codex](https://assets.aicodewith.ai/docs/1769307788666-b5877ca2-0ec9-493d-a1ad-3a9f2be5a7b1.png)

## macOS 系统

### 1. 安装 Node.js

推荐先安装 [Homebrew](https://brew.sh/)，然后执行：

```bash
brew install node
node --version
```

建议使用 Node.js 18 或更高版本。

![安装 Homebrew](https://assets.aicodewith.ai/docs/1769321018334-0bce9b14-344d-439d-88ed-dab9dd45ebd0.png)

![安装 Node.js](https://assets.aicodewith.ai/docs/1769321068806-ada9f38c-5b90-4c97-9b18-95d8e15bd9b6.png)

### 2. 安装 Codex CLI

```bash
npm install -g @openai/codex
```

如果下载较慢，可以使用国内镜像：

```bash
npm install -g @openai/codex --registry=https://registry.npmmirror.com/
```

![安装 Codex CLI](https://assets.aicodewith.ai/docs/1769321126419-9f80bf9a-0af2-4bd5-b668-7636dea6df85.png)

### 3. 创建配置文件

在终端中执行以下命令，并把网关域名、模型名和 API 密钥替换为你的实际信息：

```bash
mkdir -p "$HOME/.codex"
cat > "$HOME/.codex/config.toml" <<'EOF'
model_provider = "xione"
model = "你的模型名"

[model_providers.xione]
name = "XiOne"
base_url = "https://你的XiOne网关域名/v1"
env_key = "XIONE_API_KEY"
wire_api = "responses"
EOF
export XIONE_API_KEY="在这里替换成你的API密钥"
```

![配置 Codex](https://assets.aicodewith.ai/docs/1769323116328-32fa95a2-3e88-4c73-b990-de06a2ea6298.png)

如果希望每次打开终端自动生效，可把 `export XIONE_API_KEY="你的API密钥"` 添加到你使用的 Shell 配置文件（例如 `~/.zshrc`），然后重新打开终端。

### 4. 验证安装

```bash
codex --version
codex
```

![运行 Codex](https://assets.aicodewith.ai/docs/1769324058344-319b5e75-1c52-4fa8-a797-7f1b4f1385fa.png)

## Linux 系统

### 1. 安装 Node.js

Debian、Ubuntu 等系统可以执行：

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
```

建议使用 Node.js 18 或更高版本。其他发行版请使用对应的软件包管理器安装 Node.js LTS。

![安装 Node.js](https://assets.aicodewith.ai/docs/1769324414534-38cecb25-2b6b-4ca2-8515-d88b4e6d597e.png)

### 2. 安装 Codex CLI

```bash
sudo npm install -g @openai/codex
```

如果下载较慢，可以使用国内镜像：

```bash
sudo npm install -g @openai/codex --registry=https://registry.npmmirror.com/
```

![安装 Codex CLI](https://assets.aicodewith.ai/docs/1769324929005-a276bf21-a761-4303-a0d4-5264b4ad2f0c.png)

### 3. 创建配置文件

```bash
mkdir -p "$HOME/.codex"
cat > "$HOME/.codex/config.toml" <<'EOF'
model_provider = "xione"
model = "你的模型名"

[model_providers.xione]
name = "XiOne"
base_url = "https://你的XiOne网关域名/v1"
env_key = "XIONE_API_KEY"
wire_api = "responses"
EOF
export XIONE_API_KEY="在这里替换成你的API密钥"
```

![配置 Codex](https://assets.aicodewith.ai/docs/1769325061574-a8e9b0b9-bdbd-45d8-8f86-9fe64a1aa223.png)

如果希望环境变量永久生效，请把 `export XIONE_API_KEY="你的API密钥"` 添加到当前 Shell 的配置文件（例如 `~/.bashrc`），然后重新登录或执行 `source ~/.bashrc`。

### 4. 验证安装

```bash
codex --version
codex
```

![验证安装](https://assets.aicodewith.ai/docs/1769358018147-ba3eb5b4-86d1-46fe-879e-b05fbbb04933.png)

## 常见问题

### 启动后提示确认目录信任

首次在某个目录启动 Codex 时，可能会看到目录信任提示。请先确认当前目录及其中的文件可信，再选择继续。不要在来源不明的代码目录中直接授权。

![目录信任提示](https://assets.aicodewith.ai/docs/1769358305611-68a10343-48f0-44d8-be0f-84e58494e6d6.png)

### 提示 `401 Unauthorized`

检查 `XIONE_API_KEY` 是否已设置、密钥是否有效，以及当前终端是否已经重新打开。

### 提示模型不存在

确认 `model` 填写的是 XiOne 控制台中实际可用的模型名称，并确认该密钥有权限使用这个模型。

### 请求 `/v1/responses` 失败

Codex 0.122 及以上版本只使用 Responses 协议。请确认 XiOne 网关版本和渠道均支持 `/v1/responses`，不要把 `wire_api` 改成旧的 `chat`。
