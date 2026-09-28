---
sidebar_position: 5
title: Grok CLI（终端）
description: 在 Windows、macOS 和 Linux 上安装并配置 Grok CLI，通过 XiOne 网关使用 Grok 模型。
---

# Grok CLI（终端）

Grok CLI 是 xAI 的终端 AI 编程 Agent，可读取和修改代码、执行命令、分析项目并协助解决问题。

使用前，请先在 XiOne 控制台创建 API Key，并准备好你的 XiOne 网关地址。

## Windows

### 1. 安装 Bun

1. 按 Win + R，输入 PowerShell。
2. 以管理员身份打开 PowerShell，并执行：

~~~powershell
powershell -c "irm bun.sh/install.ps1|iex"
~~~

关闭并重新打开 PowerShell，然后验证安装：

~~~powershell
bun --version
~~~

### 2. 安装 Grok CLI

~~~powershell
bun add -g grok-dev
~~~

### 3. 创建配置文件

在 PowerShell 中运行以下命令。请将 API Key 和网关域名替换为你的 XiOne 配置：

~~~powershell
$KEY = "在这里替换成你的_XiOne_API_KEY"
$URL = "https://你的XiOne网关域名/v1"
$MODEL = "grok-4.6"

$grokDir = "$HOME\.grok"
$config = "$grokDir\user-settings.json"
$settings = "$HOME\.bun\install\global\node_modules\grok-dev\dist\utils\settings.js"

New-Item -ItemType Directory -Force -Path $grokDir | Out-Null

@"
{
  "apiKey": "$KEY",
  "baseURL": "$URL",
  "defaultModel": "$MODEL"
}
"@ | Set-Content -Path $config -Encoding UTF8 -Force

$content = Get-Content $settings -Raw
$content = $content.Replace('return process.env.GROK_BASE_URL || "https://api.x.ai/v1";', 'return loadUserSettings().baseURL || "https://你的XiOne网关域名/v1";')
Set-Content -Path $settings -Value $content -Encoding UTF8 -Force

Write-Host "Grok 配置完成"
~~~

![Windows Grok CLI 配置](https://assets.aicodewith.ai/docs/1787548836179-06bf23a4-6050-495b-b6e4-03454991bb39.jpg)

### 4. 验证安装

关闭并重新打开 PowerShell，运行：

~~~powershell
grok
~~~

输入“你好”或 hi。如果 Grok 正常回复，并且可以在 XiOne 平台看到调用记录，说明配置成功。

![Windows Grok CLI 验证](https://assets.aicodewith.ai/docs/1787549198942-3850a184-c45e-48a2-8f82-262ec146ade4.jpg)

## macOS

### 1. 安装 Bun

打开终端，粘贴下方命令并回车执行：

~~~bash
curl -fsSL https://bun.com/install | bash
~~~

安装完成后，新建终端并验证安装：

~~~bash
bun --version
~~~

### 2. 安装 Grok CLI

~~~bash
bun add -g grok-dev
~~~

![macOS 安装 Grok CLI](https://assets.aicodewith.ai/docs/1787549503970-a91b0029-31e6-4214-8935-e1a45936ee31.png)

### 3. 创建配置文件

请将 API Key 和网关域名替换为你的 XiOne 配置，然后在终端运行：

~~~bash
dir="$HOME/.grok"
settingsFile="$dir/user-settings.json"
envFile="$dir/.env"

mkdir -p "$dir"

cat > "$settingsFile" << 'EOF'
{
  "apiKey": "在这里替换成你的_XiOne_API_KEY"
}
EOF

cat > "$envFile" << 'EOF'
GROK_API_KEY=在这里替换成你的_XiOne_API_KEY
GROK_BASE_URL=https://你的XiOne网关域名/v1
GROK_MODEL=grok-4.6
EOF

echo 'set -a; source "$HOME/.grok/.env"; set +a' >> ~/.zshrc
source ~/.zshrc

echo "配置完成！"
~~~

### 4. 验证安装

新建终端，运行：

~~~bash
grok
~~~

输入“你好”或 hi。如果 Grok 正常回复，并且可以在 XiOne 平台看到调用记录，说明配置成功。

![macOS Grok CLI 验证](https://assets.aicodewith.ai/docs/1787549881782-79aaeeb3-411b-48fd-991f-a8bf48f91b22.png)

## Linux

### 1. 安装 Bun

打开终端，粘贴下方命令并回车执行：

~~~bash
curl -fsSL https://bun.com/install | bash
~~~

安装完成后，新建终端并验证安装：

~~~bash
bun --version
~~~

### 2. 安装 Grok CLI

~~~bash
bun add -g grok-dev
~~~

![Linux 安装 Grok CLI](https://assets.aicodewith.ai/docs/1787549503970-a91b0029-31e6-4214-8935-e1a45936ee31.png)

### 3. 创建配置文件

请将 API Key 和网关域名替换为你的 XiOne 配置，然后在终端运行：

~~~bash
dir="$HOME/.grok"
settingsFile="$dir/user-settings.json"
envFile="$dir/.env"

mkdir -p "$dir"

cat > "$settingsFile" << 'EOF'
{
  "apiKey": "在这里替换成你的_XiOne_API_KEY"
}
EOF

cat > "$envFile" << 'EOF'
GROK_API_KEY=在这里替换成你的_XiOne_API_KEY
GROK_BASE_URL=https://你的XiOne网关域名/v1
GROK_MODEL=grok-4.6
EOF

echo 'set -a; source "$HOME/.grok/.env"; set +a' >> ~/.zshrc
source ~/.zshrc

echo "配置完成！"
~~~

### 4. 验证安装

新建终端，运行：

~~~bash
grok
~~~

输入“你好”或 hi。如果 Grok 正常回复，并且可以在 XiOne 平台看到调用记录，说明配置成功。

![Linux Grok CLI 验证](https://assets.aicodewith.ai/docs/1787549881782-79aaeeb3-411b-48fd-991f-a8bf48f91b22.png)
