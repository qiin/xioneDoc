---
sidebar_position: 5
title: "Codex（桌面版）"
---

# Codex（桌面版）

通过环境变量的方式在电脑上安装和配置 Codex CLI （命令行工具）并接入Codex app

# Codex桌面app配置

## 1.终端配置Codex

> 需要终端配置
>
> **为何需要终端配置？终端完整配置文件配置成功后，即可使用Codex app**

### Windows

#### 1. 安装 Node.js

前往 [Node.js 官网](https://nodejs.org/en/download) 下载并安装 LTS 版本（如果已经安装可以跳过）。

验证安装：

```
node --version
```

如果出现下面的提示就说明 node 已经安装成功了

![image](https://assets.aicodewith.ai/docs/1769236302904-c4111827-cce4-4373-a0b6-9fadb2fd5783.png)

> 需要注意的是，Nodejs 的版本必须为 18+
>
> 如果低于这个版本，可以问一下 AI 如何升级 Nodejs 版本，让 AI 先给您命令收集系统信息，之后它就会提供最快最准确的指导

#### 2. 创建配置文件

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

按 **Win + R**
输入 Powershell
打开 PowerShell （建议以管理员身份运行）并执行：

```powershell
# 目标目录
$dir = Join-Path $env:USERPROFILE ".codex"
 
# 创建目录（存在不报错）
New-Item -ItemType Directory -Path $dir -Force | Out-Null
 
# 写 auth.json（UTF-8 无 BOM，覆盖）
$auth = @'
{
  "OPENAI_API_KEY": "在这里替换成你的_XiOne_API_KEY"
}
'@
[System.IO.File]::WriteAllText(
  (Join-Path $dir "auth.json"),
  $auth,
  (New-Object System.Text.UTF8Encoding($false))
)
 
# 写 config.toml（UTF-8 无 BOM，覆盖）
$config = @'
model_provider = "codex"
model = "gpt-5.6-sol"
 
[model_providers.codex]
name = "codex"
base_url = "https://你的XiOne网关域名/chatgpt/v1"
wire_api = "responses"
requires_openai_auth = true
supports_websockets = false
'@
[System.IO.File]::WriteAllText(
  (Join-Path $dir "config.toml"),
  $config,
  (New-Object System.Text.UTF8Encoding($false))
)
 
```

验证是否设置成功：

```bash
Get-Content "$env:USERPROFILE\.codex\auth.json"
Get-Content "$env:USERPROFILE\.codex\config.toml"
```

![企业微信截图_17693580116256](https://assets.aicodewith.ai/docs/1769358018147-ba3eb5b4-86d1-46fe-879e-b05fbbb04933.png)

#### 3. 验证安装

powershell 中输入 codex 启动

![image](https://assets.aicodewith.ai/docs/1769321018334-0bce9b14-344d-439d-88ed-dab9dd45ebd0.png)

然后在对话框中，输入：您好！，跟他打个招呼，如果正常回复，并且在平台内看到调用记录，则安装成功

![image](https://assets.aicodewith.ai/docs/1769321068806-ada9f38c-5b90-4c97-9b18-95d8e15bd9b6.png)

![image](https://assets.aicodewith.ai/docs/1769321126419-9f80bf9a-0af2-4bd5-b668-7636dea6df85.png)

### MacOS

#### 1. 安装 Node.js

首先需要确认您的电脑上有 [Homebrew](https://brew.sh/) ，如果没有的话，可以点击进去，有一行命令，一键复制就可以安装

> 安装 Homebrew 的时候，有一部分资源在海外，需要设置 TUN 代理

![image](https://assets.aicodewith.ai/docs/1769242462453-ed58b463-4883-4263-ae85-569ff225282e.png)

安装好之后，使用 Homebrew 安装 Nodejs（如果已经安装可以跳过）

```bash
brew install node
```

![image](https://assets.aicodewith.ai/docs/1769243887300-44dbcf3e-cb58-4e46-9622-3cb977b08967.png)

请使用下面的命令，验证安装，如果出现下面的提示就说明 node 已经安装成功了

```bash
node --version
```

![image](https://assets.aicodewith.ai/docs/1769243912026-37c64881-3bda-477e-8886-8fd7e828a05d.png)

> 需要注意的是，Nodejs 的版本必须为 18+
>
> 如果低于这个版本，可以问一下 AI 如何升级 Nodejs 版本，让 AI 先给您命令收集系统信息，之后它就会提供最快最准确的指导

#### 2. 创建配置文件

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

**点击复制，弹窗填写您创建的API key，然后点击复制代码到终端粘贴回车执行即可**

```bash
dir="$HOME/.codex"
mkdir -p "$dir"
 
cat > "$dir/auth.json" << 'EOF'
{
  "OPENAI_API_KEY": "在这里替换成你的_XiOne_API_KEY"
}
EOF
 
cat > "$dir/config.toml" << 'EOF'
model_provider = "codex"
model = "gpt-5.6-sol"
 
[model_providers.codex]
name = "codex"
base_url = "https://你的XiOne网关域名/chatgpt/v1"
wire_api = "responses"
requires_openai_auth = true
supports_websockets = false
EOF
 
echo "配置完成"
```

验证是否设置成功：

```bash
cat "$HOME/.codex/auth.json"
cat "$HOME/.codex/config.toml"
```

![image](https://assets.aicodewith.ai/docs/1769358305611-68a10343-48f0-44d8-be0f-84e58494e6d6.png)

#### 3. 验证安装

终端中输入 `codex` 启动，然后在对话框中，输入：您好！，跟他打个招呼，如果正常回复，并且在平台内看到调用记录，则说明配置成功

![image](https://assets.aicodewith.ai/docs/1769324058344-319b5e75-1c52-4fa8-a797-7f1b4f1385fa.png)

![image](https://assets.aicodewith.ai/docs/1769321126419-9f80bf9a-0af2-4bd5-b668-7636dea6df85.png)

### Linux

#### 1. 安装 Node.js

安装 Nodejs 的命令（如果已经安装可以跳过）：

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
```

验证安装：

```bash
node --version
```

![image](https://assets.aicodewith.ai/docs/1769271471052-733b781c-90a9-4378-a550-6156adfbd09e.png)

> 需要注意的是，Nodejs 的版本必须为 18+
>
> 如果低于这个版本，可以问一下 AI 如何升级 Nodejs 版本，让 AI 先给您命令收集系统信息，之后它就会提供最快最准确的指导

#### 2. 创建配置文件

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

**点击复制，弹窗填写您创建的API key，然后点击复制代码到终端粘贴回车执行即可**

```bash
dir="$HOME/.codex"
mkdir -p "$dir"
 
cat > "$dir/auth.json" << 'EOF'
{
  "OPENAI_API_KEY": "在这里替换成你的_XiOne_API_KEY"
}
EOF
 
cat > "$dir/config.toml" << 'EOF'
model_provider = "codex"
model = "gpt-5.6-sol"
 
[model_providers.codex]
name = "codex"
base_url = "https://你的XiOne网关域名/chatgpt/v1"
wire_api = "responses"
requires_openai_auth = true
supports_websockets = false
EOF
 
echo "配置完成"
```

验证是否设置成功：

```bash
cat "$HOME/.codex/auth.json"
cat "$HOME/.codex/config.toml"
```

![image](https://assets.aicodewith.ai/docs/1769358305611-68a10343-48f0-44d8-be0f-84e58494e6d6.png)

#### 3. 验证安装

终端中输入 codex 启动，然后在对话框中，输入：`您好！`，跟他打个招呼，如果正常回复，并且在平台内看到调用记录，则说明配置成功

![image](https://assets.aicodewith.ai/docs/1769325061574-a8e9b0b9-bdbd-45d8-8f86-9fe64a1aa223.png)

![image](https://assets.aicodewith.ai/docs/1769321126419-9f80bf9a-0af2-4bd5-b668-7636dea6df85.png)

## 2.下载Codex app

> 下载页面需要能访问外网

1.[https://developers.openai.com/codex/app](https://developers.openai.com/codex/app) 点击链接，根据您的电脑系统选择对应安装即可

![image](https://assets.aicodewith.ai/docs/1785133708152-cec7e628-e1c5-47f0-96fd-b2283d896ae5.png)

2.**Windows系统可不用访问外网也可下载**
左下角搜索 windows商店 点击 Microsoft Store

![image](https://assets.aicodewith.ai/docs/1785134147083-5166eed0-d5a5-45aa-aaa2-b72cc13ee042.png)

搜索 chatgpt

![image](https://assets.aicodewith.ai/docs/1785134261636-42892043-3296-43a5-b802-b642e550d6b2.png)

下载即可

![image](https://assets.aicodewith.ai/docs/1785134365922-ca139456-64ce-4861-b483-e8b648527015.png)

## 3.测试

1.下载完成后，打开 Codex app 输入你好测试，正常回复就可以啦

![image](https://assets.aicodewith.ai/docs/1782270401809-bf5ee2a0-af42-4fc5-a84d-e7b5f36e277b.png)

