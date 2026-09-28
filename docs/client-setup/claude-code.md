---
sidebar_position: 2
title: "Claude Code（终端）"
---

# Claude Code（终端）

通过配置文件的方式在电脑上安装和配置 Claude Code CLI （命令行工具）

> 如果遇到问题，可以将本页全部内容和问题截图，复制给 [豆包](https://www.doubao.com/chat/) 或者 [deepseek](https://chat.deepseek.com/) 等AI，按照他的提示执行对应命令即可
>
> 如果 AI 也无法解决，可以联系我们的工程师，为您提供技术上的支持与帮助

# Windows

## 1. 安装 Node.js / Git

前往 [Node.js 官网](https://nodejs.org/en/download) 下载并安装 LTS 版本。（如果已经安装可以跳过）

验证安装：

```
node --version
```

如果出现下面的提示就说明 node 已经安装成功了

![图像](https://assets.aicodewith.ai/docs/1769236302904-c4111827-cce4-4373-a0b6-9fadb2fd5783.png)

> 需要注意的是，Nodejs 的版本必须为 18+
>
> 如果低于这个版本，可以问一下 AI 如何升级 Nodejs 版本，让 AI 先给您命令收集系统信息，之后它就会提供最快最准确的指导

前往 [Git 官网](https://git-scm.com/install/windows)，下载安装包，然后一路 yes 就行，都是英文的，不用管

![图像](https://assets.aicodewith.ai/docs/1769744581907-7399da60-33fa-47fb-8d92-fa16f240d8b9.png)

## 2. 安装 Claude Code CLI

按 **Win + R**输入 Powershell
打开 PowerShell （建议以管理员身份运行）并执行：

```
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com/
```

![图像](https://assets.aicodewith.ai/docs/1769236261656-99a81168-363a-4652-90c3-59a34c1c961b.png)

> 如果遇到在此系统上禁止运行脚本，需要用管理员权限运行powershell，然后执行  `Set-ExecutionPolicy Unrestricted` 命令

## 3. 创建配置文件

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

按 **Win + R**输入 Powershell
打开 PowerShell （建议以管理员身份运行）并执行：

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
    "ANTHROPIC_AUTH_TOKEN": "在这里替换成你的_XiOne_API_KEY",
    "ANTHROPIC_API_KEY": "",
    "ANTHROPIC_BASE_URL": "https://你的XiOne网关域名"
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

![企业微信截图_17693565757036](https://assets.aicodewith.ai/docs/1769356582275-c900d57a-858b-47e1-ad85-f855f1f4e8cf.png)

## 4. 验证安装

重新打开 PowerShell 或者 IDE，运行：

```bash
claude
```

如果遇到下面的提示，选择第一个 yes ，然后按回车即可

这是在提示你授权 Claude Code 访问并执行当前文件夹里的代码，用于读取、修改和运行项目文件

![图像](https://assets.aicodewith.ai/docs/1769237758834-74eabb00-a19c-47b6-b0fe-06773cfdaf97.png)

接下来在对话框里面可以输入：您好！如果正常回复，并且后台有正确的调用记录，则说明配置成功

![企业微信截图_17692380816465](https://assets.aicodewith.ai/docs/1769238083994-b6588f91-1d8a-4fb7-b992-4014860c2945.png)

![图像](https://assets.aicodewith.ai/docs/1769239304868-b0dc3988-002d-4567-af07-09af3868675e.png)

# macOS

## 1. 安装 Node.js

首先需要确认您的电脑上有 [Homebrew](https://brew.sh/) ，如果没有的话，可以点击进去，有一行命令，一键复制就可以安装

> 安装 Homebrew 的时候，有一部分资源在海外，需要设置 TUN 代理

![图像](https://assets.aicodewith.ai/docs/1769242462453-ed58b463-4883-4263-ae85-569ff225282e.png)

安装好之后，使用 Homebrew 安装 Nodejs（如果已经安装可以跳过）

```bash
brew install node
```

![图像](https://assets.aicodewith.ai/docs/1769243887300-44dbcf3e-cb58-4e46-9622-3cb977b08967.png)

请使用下面的命令，验证安装，如果出现下面的提示就说明 node 已经安装成功了

```bash
node --version
```

![图像](https://assets.aicodewith.ai/docs/1769243912026-37c64881-3bda-477e-8886-8fd7e828a05d.png)

> 需要注意的是，Nodejs 的版本必须为 18+
>
> 如果低于这个版本，可以问一下 AI 如何升级 Nodejs 版本，让 AI 先给您命令收集系统信息，之后它就会提供最快最准确的指导

## 2. 安装 Claude Code CLI

新建终端，然后执行下面的命令：

```bash
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com/
```

![图像](https://assets.aicodewith.ai/docs/1769244053225-798377e0-64ed-4f1a-aa8f-663bf3c967a7.png)

## 3. 创建配置文件

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

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
    "ANTHROPIC_AUTH_TOKEN": "在这里替换成你的_XiOne_API_KEY",
    "ANTHROPIC_API_KEY": "",
    "ANTHROPIC_BASE_URL": "https://你的XiOne网关域名"
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

![图像](https://assets.aicodewith.ai/docs/1769357049399-c28495e8-69f4-4e76-ad6a-9f3b6d464839.png)

## 4. 验证安装

重新打开 终端 或者 IDE，运行：

```bash
claude
```

如果遇到下面的提示，选择第一个 yes ，然后按回车即可

这是在提示你授权 Claude Code 访问并执行当前文件夹里的代码，用于读取、修改和运行项目文件

![图像](https://assets.aicodewith.ai/docs/1769244726291-40036c37-3378-4c4a-8255-4fb317feef53.png)

接下来在对话框里面可以输入：您好！如果正常回复，并且后台有正确的调用记录，则说明配置成功

![图像](https://assets.aicodewith.ai/docs/1769244802326-c2582a05-3299-4621-87cb-d162cd4971fe.png)

![图像](https://assets.aicodewith.ai/docs/1769239304868-b0dc3988-002d-4567-af07-09af3868675e.png)

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

![图像](https://assets.aicodewith.ai/docs/1769271471052-733b781c-90a9-4378-a550-6156adfbd09e.png)

> 需要注意的是，Nodejs 的版本必须为 18+
>
> 如果低于这个版本，可以问一下 AI 如何升级 Nodejs 版本，让 AI 先给您命令收集系统信息，之后它就会提供最快最准确的指导

## 2. 安装 Claude Code CLI

```bash
npm install -g @anthropic-ai/claude-code
```

![图像](https://assets.aicodewith.ai/docs/1769271556685-9a06458d-caa1-4969-9875-3827a9d1d542.png)

最后那个提示是说我当前npm的版本比较低，大家的可能没有，忽略就好

如果出现了其他问题，可以问一下 AI

## 3. 创建配置文件

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

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
    "ANTHROPIC_AUTH_TOKEN": "在这里替换成你的_XiOne_API_KEY",
    "ANTHROPIC_API_KEY": "",
    "ANTHROPIC_BASE_URL": "https://你的XiOne网关域名"
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

![图像](https://assets.aicodewith.ai/docs/1769357370426-87f69229-b7fa-4f62-9079-a696d2810440.png)

## 4. 验证安装

重新打开 终端 或者 IDE，运行：

```bash
claude
```

如果遇到下面的提示，选择第一个 yes ，然后按回车即可

这是在提示你授权 Claude Code 访问并执行当前文件夹里的代码，用于读取、修改和运行项目文件常见问题

![图像](https://assets.aicodewith.ai/docs/1769244726291-40036c37-3378-4c4a-8255-4fb317feef53.png)

接下来在对话框里面可以输入：hi，如果正常回复，并且后台有正确的调用记录，则说明配置成功

![图像](https://assets.aicodewith.ai/docs/1769273466342-02bc47e3-50b6-4ceb-8de0-672a560c6a48.png)

![图像](https://assets.aicodewith.ai/docs/1769239304868-b0dc3988-002d-4567-af07-09af3868675e.png)

# 常见问题

## 1. 无法连接到 Anthropic 服务

### 错误截图

![图像](https://assets.aicodewith.ai/docs/1769272611253-07d970db-c1a7-43fa-a968-efd5ba1a3d55.png)

### 解决办法

在 ~/.claude.json 文件中，添加一行：`"hasCompletedOnboarding": true,`

需要注意这行末尾有逗号，添加在 JSON 中间就好，如下图

![图像](https://assets.aicodewith.ai/docs/1769272499741-89e8ffe3-3fe7-4814-b3f6-63b44c0fea52.png)

## 2. 无效的 API 密钥 · 请运行 /login

### 错误截图

![图像](https://assets.aicodewith.ai/docs/1769272842448-9874b9fc-9fc6-4b87-888e-790c36286350.png)

### 解决办法

这个问题是因为环境变量没有设置好，可以参考前面的教程，重新设置下环境变量

主要是这两个

`ANTHROPIC_BASE_URL` 和 `ANTHROPIC_AUTH_TOKEN`

## 3. 401 \{"error":"Invalid API key"\}

### 错误截图

![图像](https://assets.aicodewith.ai/docs/1769273312084-1fe79126-1666-4417-8136-0460c04dbf11.png)

### 解决办法

这个问题是因为 key 设置错了，可以去网站重新生成一个 key ，然后参考前面的教程，重新设置下环境变量 `ANTHROPIC_AUTH_TOKEN` 这个环境变量

