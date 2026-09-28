---
sidebar_position: 4
title: "Gemini CLI（终端）"
---

# Gemini CLI（终端）

通过环境变量的方式在电脑上安装和配置 Gemini CLI（命令行工具）。

如果配置过程中遇到问题，可以将本页面链接和报错截图提供给 AI 协助排查，或联系技术支持。

## Windows

### 1. 安装 Node.js

前往 [Node.js 官网](https://nodejs.org/en/download) 下载并安装 Node.js。

安装完成后，打开终端并执行：

~~~bash
node --version
~~~

如果能正常显示版本号，说明安装成功。Gemini CLI 要求 Node.js 18 或更高版本。

![Windows Node.js 安装成功](https://assets.aicodewith.ai/docs/1769236302904-c4111827-cce4-4373-a0b6-9fadb2fd5783.png)

### 2. 安装 Gemini CLI

按 Win + R，输入 powershell，建议以管理员身份运行，然后执行：

~~~powershell
npm install -g @google/gemini-cli --registry=https://registry.npmmirror.com/
~~~

![Windows 安装 Gemini CLI](https://assets.aicodewith.ai/docs/1769337595986-5022d2a8-85c7-445b-bace-bddd16875300.png)

如果提示系统禁止运行脚本，可以先执行：

~~~powershell
Set-ExecutionPolicy Unrestricted
~~~

然后重新执行安装命令。

### 3. 创建配置文件

请先在 XiOne 控制台创建 API Key，然后在 PowerShell 中执行下面的命令。请将示例中的 API Key 和网关域名替换为你自己的配置。

~~~powershell
# 创建 ~/.gemini 目录（存在不报错）
mkdir "$env:USERPROFILE\.gemini" -Force | Out-Null

# 写入 .env（UTF-8 无 BOM，覆盖）
$envText = @'
GEMINI_API_KEY=在这里替换成你的_XiOne_API_KEY
GOOGLE_GEMINI_BASE_URL=https://你的XiOne网关域名
GEMINI_MODEL=gemini-3-pro
'@
[System.IO.File]::WriteAllText("$env:USERPROFILE\.gemini\.env", $envText, (New-Object System.Text.UTF8Encoding($false)))

# 写入 settings.json（UTF-8 无 BOM，覆盖）
$json = @'
{
  "ide": {
    "enabled": true
  },
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  }
}
'@
[System.IO.File]::WriteAllText("$env:USERPROFILE\.gemini\settings.json", $json, (New-Object System.Text.UTF8Encoding($false)))
~~~

### 4. 验证配置

执行以下命令检查配置文件：

~~~powershell
Get-Content "$env:USERPROFILE\.gemini\.env"
Get-Content "$env:USERPROFILE\.gemini\settings.json"
~~~

![Windows 验证 Gemini CLI 配置](https://assets.aicodewith.ai/docs/1769343266860-44e472d6-76de-4cc0-a3b6-bad4db013c41.png)

启动 Gemini CLI：

~~~bash
gemini
~~~

进入交互界面后输入：

~~~text
您好！
~~~

如果能够正常收到回复，并且在 XiOne 平台的调用记录中看到对应请求，就说明配置成功。

![Gemini CLI 对话验证](https://assets.aicodewith.ai/docs/1769343150451-f621254b-ea7b-473d-9b4f-d623a39fefc2.png)

![XiOne 调用记录验证](https://assets.aicodewith.ai/docs/1769343299258-5208f7ad-8fb9-400b-bb68-5dea70f2c66f.png)

## macOS

### 1. 安装 Node.js

先前往 [Homebrew 官网](https://brew.sh/) 安装 Homebrew。

:::note
安装 Homebrew 时需要访问海外资源，请确保网络环境可以正常访问。
:::

![macOS 安装 Homebrew](https://assets.aicodewith.ai/docs/1769242462453-ed58b463-4883-4263-ae85-569ff225282e.png)

然后执行：

~~~bash
brew install node
~~~

![macOS 安装 Node.js](https://assets.aicodewith.ai/docs/1769243887300-44dbcf3e-cb58-4e46-9622-3cb977b08967.png)

安装完成后检查版本：

~~~bash
node --version
~~~

Gemini CLI 要求 Node.js 18 或更高版本。

![macOS 检查 Node.js 版本](https://assets.aicodewith.ai/docs/1769243912026-37c64881-3bda-477e-8886-8fd7e828a05d.png)

### 2. 安装 Gemini CLI

~~~bash
npm install -g @google/gemini-cli --registry=https://registry.npmmirror.com/
~~~

![macOS 安装 Gemini CLI](https://assets.aicodewith.ai/docs/1769344104784-2accaf7f-63b4-4f13-8bac-8a47057e7cd8.png)

### 3. 创建配置文件

请先在 XiOne 控制台创建 API Key，然后执行下面的命令。请将示例中的 API Key 和网关域名替换为你自己的配置。

~~~bash
mkdir -p "$HOME/.gemini"

cat > "$HOME/.gemini/.env" << 'EOF'
GEMINI_API_KEY=在这里替换成你的_XiOne_API_KEY
GOOGLE_GEMINI_BASE_URL=https://你的XiOne网关域名
GEMINI_MODEL=gemini-3-pro
EOF

cat > "$HOME/.gemini/settings.json" << 'EOF'
{
  "ide": {
    "enabled": true
  },
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  }
}
EOF
~~~

![macOS 创建 Gemini CLI 配置](https://assets.aicodewith.ai/docs/1769345615296-976c0873-d880-4cd7-a182-de0251483902.png)

### 4. 验证配置

~~~bash
cat "$HOME/.gemini/.env"
cat "$HOME/.gemini/settings.json"
~~~

启动 Gemini CLI：

~~~bash
gemini
~~~

进入交互界面后输入：

~~~text
您好！
~~~

如果能够正常收到回复，并且在 XiOne 平台的调用记录中看到对应请求，就说明配置成功。

![Gemini CLI 对话验证](https://assets.aicodewith.ai/docs/1769343150451-f621254b-ea7b-473d-9b4f-d623a39fefc2.png)

![XiOne 调用记录验证](https://assets.aicodewith.ai/docs/1769343299258-5208f7ad-8fb9-400b-bb68-5dea70f2c66f.png)

## Linux

### 1. 安装 Node.js

以 Debian/Ubuntu 为例，执行：

~~~bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
~~~

安装完成后检查版本：

~~~bash
node --version
~~~

Gemini CLI 要求 Node.js 18 或更高版本。

![Linux 检查 Node.js 版本](https://assets.aicodewith.ai/docs/1769271471052-733b781c-90a9-4378-a550-6156adfbd09e.png)

### 2. 安装 Gemini CLI

~~~bash
npm install -g @google/gemini-cli --registry=https://registry.npmmirror.com/
~~~

![Linux 安装 Gemini CLI](https://assets.aicodewith.ai/docs/1769346130384-07dc9659-5baf-4c29-b638-d031c72d2daf.png)

### 3. 创建配置文件

请先在 XiOne 控制台创建 API Key，然后执行下面的命令。请将示例中的 API Key 和网关域名替换为你自己的配置。

~~~bash
mkdir -p "$HOME/.gemini"

cat > "$HOME/.gemini/.env" << 'EOF'
GEMINI_API_KEY=在这里替换成你的_XiOne_API_KEY
GOOGLE_GEMINI_BASE_URL=https://你的XiOne网关域名
GEMINI_MODEL=gemini-3-pro
EOF

cat > "$HOME/.gemini/settings.json" << 'EOF'
{
  "ide": {
    "enabled": true
  },
  "security": {
    "auth": {
      "selectedType": "gemini-api-key"
    }
  }
}
EOF
~~~

![Linux 创建 Gemini CLI 配置](https://assets.aicodewith.ai/docs/1769346326071-960dde3f-abb8-4c8a-8ce5-0afbbb892b3d.png)

### 4. 验证配置

~~~bash
cat "$HOME/.gemini/.env"
cat "$HOME/.gemini/settings.json"
~~~

启动 Gemini CLI：

~~~bash
gemini
~~~

进入交互界面后输入：

~~~text
您好！
~~~

如果能够正常收到回复，并且在 XiOne 平台的调用记录中看到对应请求，就说明配置成功。

![Gemini CLI 对话验证](https://assets.aicodewith.ai/docs/1769343150451-f621254b-ea7b-473d-9b4f-d623a39fefc2.png)

![XiOne 调用记录验证](https://assets.aicodewith.ai/docs/1769343299258-5208f7ad-8fb9-400b-bb68-5dea70f2c66f.png)
