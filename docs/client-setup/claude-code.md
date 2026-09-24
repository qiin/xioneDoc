---
title: Claude Code - 终端
sidebar_position: 2
---
![]()

# Claude Code（终端）

通过配置文件的方式在电脑上安装和配置 Claude Code CLI（命令行工具）

:::info

如果遇到问题，可以将本页全部内容和问题截图，复制给 [豆包](https://www.doubao.com/) 或者 [DeepSeek](https://chat.deepseek.com/) 等 AI，按照它的提示执行对应命令即可。

如果 AI 也无法解决，可以联系我们的工程师，为您提供技术上的支持与帮助。

:::

# Windows

## 1. 安装 Node.js / Git

前往 [Node.js 官网](https://nodejs.org/) 下载并安装 LTS 版本。（如果已经安装可以跳过）

验证安装：

```bash
node --version
```

如果出现下面的提示就说明 node 已经安装成功了

![](/img/uploads/截屏2026-09-24-14.52.09.png)

:::warning

需要注意的是，Nodejs 的版本必须为 18+

如果低于这个版本，可以问一下 AI 如何升级 Nodejs 版本，让 AI 先给您命令收集系统信息，之后它就会提供最快最准确的指导

:::

前往 [Git 官网](https://git-scm.com/downloads)，下载安装包，然后一路 yes 就行，都是英文的，不用管

![](/img/uploads/截屏2026-09-24-14.55.37.png)

## 2. 安装 Claude Code CLI

按 **Win + R**

输入 Powershell

打开 PowerShell（建议以管理员身份运行）并执行：

```powershell
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com/
```

![](/img/uploads/截屏2026-09-24-14.58.40.png)

:::warning

如果遇到在此系统上禁止运行脚本，需要用管理员权限运行 powershell，然后执行 `Set-ExecutionPolicy Unrestricted` 命令

:::

## 3. 创建配置文件

:::info

创建您的 API key：<https://doc.xione.ai/zh/docs/create-api-key>

:::

按 **Win + R**

输入 Powershell

打开 PowerShell（建议以管理员身份运行）并执行：

```powershell
# 目标目录：C:\Users\<you>\.claude

$dir = Join-Path $env:USERPROFILE ".claude"
$settingsFile = Join-Path $dir "settings.json"
$claudeJsonFile = Join-Path $env:USERPROFILE ".claude.json"

# 创建目录（存在不报错）

New-Item -ItemType Directory -Path $dir -Force | Out-Null

# 1. 写入 settings.json（API 配置）

$settingsJson = @'
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "在这里替换成你的_API_KEY",
    "ANTHROPIC_API_KEY": "",
    "ANTHROPIC_BASE_URL": "https://api.xione.ai"
  }
}
'@
[System.IO.File]::WriteAllText($settingsFile, $settingsJson, (New-Object System.Text.UTF8Encoding($false)))

# 2. 写入 .claude.json（跳过登录）- 注意这个文件在用户根目录

$claudeJson = @'
{
  "hasCompletedOnboarding": true
}
'@
[System.IO.File]::WriteAllText($claudeJsonFile, $claudeJson, (New-Object System.Text.UTF8Encoding($false)))

Write-Host "配置完成！"
Write-Host "  - settings.json: $settingsFile"
Write-Host "  - .claude.json: $claudeJsonFile"
```

![](/img/uploads/截屏2026-09-24-15.13.19.png)

## 4. 验证安装

重新打开 PowerShell 或者 IDE，运行：

```bash
claude
```

如果遇到下面的提示，选择第一个 yes，然后按回车即可

这是在提示你授权 Claude Code 访问并执行当前文件夹里的代码，用于读取、修改和运行项目文件

![](/img/uploads/截屏2026-09-24-15.15.44.png)

接下来在对话框里面可以输入：您好！如果正常回复，并且后台有正确的调用记录，则说明配置成功

![](/img/uploads/截屏2026-09-24-15.19.20.png)

# macOS

## 1. 安装 Node.js

首先需要确认您的电脑上有 [Homebrew](https://brew.sh/zh-cn/)，如果没有的话，可以点击进去，有一行命令，一键复制就可以安装

:::warning

安装 Homebrew 的时候，有一部分资源在海外，需要设置 TUN 代理

:::

![](/img/uploads/截屏2026-09-24-15.21.00.png)

安装好之后，使用 Homebrew 安装 Nodejs（如果已经安装可以跳过）

```bash
brew install node
```

![](/img/uploads/截屏2026-09-24-15.25.45.png)

请使用下面的命令，验证安装，如果出现下面的提示就说明 node 已经安装成功了

```bash
node --version
```

![](/img/uploads/截屏2026-09-24-15.29.34.png)

:::warning

需要注意的是，Nodejs 的版本必须为 18+

如果低于这个版本，可以问一下 AI 如何升级 Nodejs 版本，让 AI 先给您命令收集系统信息，之后它就会提供最快最准确的指导

:::

## 2. 安装 Claude Code CLI

新建终端，然后执行下面的命令：

```bash
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com/
```

![](/img/uploads/截屏2026-09-24-15.32.01.png)

## 3. 创建配置文件

:::info

创建您的 API key：<https://docs.aicodewith.com/zh/docs/create-api-key>

:::

**点击复制，弹窗填写您创建的API key，然后点击复制代码到终端粘贴回车执行即可**

```bash
# 目标目录：~/.claude
dir="$HOME/.claude"
settingsFile="$dir/settings.json"
claudeJsonFile="$HOME/.claude.json"

# 创建目录（存在不报错）
mkdir -p "$dir"

# 1. 写入 settings.json（API 配置）
cat > "$settingsFile" << 'EOF'
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "在这里替换成你的_API_KEY",
    "ANTHROPIC_API_KEY": "",
    "ANTHROPIC_BASE_URL": "https://api.aicodewith.ai"
  }
}
EOF

# 2. 写入 .claude.json（跳过登录）- 注意这个文件在用户根目录
cat > "$claudeJsonFile" << 'EOF'
{
  "hasCompletedOnboarding": true
}
EOF

echo "配置完成！"
echo "  - settings.json: $settingsFile"
echo "  - .claude.json: $claudeJsonFile"
```

使用下面命令，查看配置文件里的内容，**一定别忘了替换 API KEY！**

```bash
cat "$HOME/.claude/settings.json"
```

![](/img/uploads/截屏2026-09-24-15.36.44.png)

## 4. 验证安装

重新打开终端或者 IDE，运行：

```bash
claude
```

如果遇到下面的提示，选择第一个 yes，然后按回车即可

这是在提示你授权 Claude Code 访问并执行当前文件夹里的代码，用于读取、修改和运行项目文件

![](/img/uploads/截屏2026-09-24-15.39.12.png)

接下来在对话框里面可以输入：您好！如果正常回复，并且后台有正确的调用记录，则说明配置成功

![](/img/uploads/截屏2026-09-24-15.40.20.png)

# Linux

## 1. 安装 Node.js

安装 Nodejs 的命令（如果已经安装可以跳过）：

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
```

验证安装：

```bash
node --version
```

![](/img/uploads/截屏2026-09-24-15.43.24.png)

:::warning

需要注意的是，Nodejs 的版本必须为 18+

如果低于这个版本，可以问一下 AI 如何升级 Nodejs 版本，让 AI 先给您命令收集系统信息，之后它就会提供最快最准确的指导

:::

## 2. 安装 Claude Code CLI

```bash
npm install -g @anthropic-ai/claude-code
```

![](/img/uploads/截屏2026-09-24-15.46.18.png)

最后那个提示是说我当前npm的版本比较低，大家的可能没有，忽略就好

如果出现了其他问题，可以问一下 AI

## 3. 创建配置文件

:::info

创建您的 API key：<https://docs.aicodewith.com/zh/docs/create-api-key>

:::

**点击复制，弹窗填写您创建的API key，然后点击复制代码到终端粘贴回车执行即可**

```bash
# 目标目录：~/.claude
dir="$HOME/.claude"
settingsFile="$dir/settings.json"
claudeJsonFile="$HOME/.claude.json"

# 创建目录（存在不报错）
mkdir -p "$dir"

# 1. 写入 settings.json（API 配置）
cat > "$settingsFile" << 'EOF'
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "在这里替换成你的_API_KEY",
    "ANTHROPIC_API_KEY": "",
    "ANTHROPIC_BASE_URL": "https://api.aicodewith.ai"
  }
}
EOF

# 2. 写入 .claude.json（跳过登录）- 注意这个文件在用户根目录
cat > "$claudeJsonFile" << 'EOF'
{
  "hasCompletedOnboarding": true
}
EOF

echo "配置完成！"
echo "  - settings.json: $settingsFile"
echo "  - .claude.json: $claudeJsonFile"
```

使用下面命令，查看配置文件里的内容，**一定别忘了替换 API KEY！**

```bash
cat "$HOME/.claude/settings.json"
```

![](/img/uploads/截屏2026-09-24-15.51.06.png)

## 4. 验证安装

重新打开终端或者 IDE，运行：

```bash
claude
```

如果遇到下面的提示，选择第一个 yes，然后按回车即可

这是在提示你授权 Claude Code 访问并执行当前文件夹里的代码，用于读取、修改和运行项目文件常见问题

![](/img/uploads/截屏2026-09-24-15.56.23.png)

接下来在对话框里面可以输入：hi，如果正常回复，并且后台有正确的调用记录，则说明配置成功

![](/img/uploads/截屏2026-09-24-15.57.30.png)
