---
sidebar_position: 8
title: "Hermes CLI"
---

# Hermes

Hermes Agent 是 Nous Research 开发的可扩展 AI 智能体，能通过工具、技能和自动化工作流帮你完成编码、研究、文件操作、日程任务等实际工作，支持本地终端、微信等多种接入方式。

# Hermes

## MacOS / Linux

> 系统要求
>
> macOS 10.15+ 或主流 Linux 发行版

### 1.安装Hermes

1.打开终端，粘贴下面命令，回车

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

2.都输入 y 并回车即可

![9b4defab14b3fae5d2ee05804a2beceb](https://assets.aicodewith.ai/docs/1782986774069-de1cb84c-5020-4f71-944a-28b4e4412a02.png)

![7eeaed33f4f7b72ff2a8329a7a5e762e](https://assets.aicodewith.ai/docs/1782986803348-2e78de9f-7e89-415d-aab9-e9ae655143a9.png)

3.选择“快速设置（Quick Setup）”，选择“跳过信息平台设置”（Skip-set up later）

![image](https://assets.aicodewith.ai/docs/1782981979751-d799befa-b09e-46c4-8250-65c10b5cd0f5.png)

![image](https://assets.aicodewith.ai/docs/1782982014893-e46de9f9-8587-4906-abd6-12f9300fbb73.png)

4.安装完成后，执行下面这条让 `hermes` 在当前终端立即可用

```bash
source $HOME/.local/bin/env
```

> 重新打开终端后就不用再执行 source 了，因为安装脚本已经把路径写进了你的 shell 配置。

### 2.配置

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

1.点击复制下面命令，弹窗处填写您创建的API key，然后复制代码到终端回车执行

```bash
mkdir -p ~/.hermes && cat > ~/.hermes/config.yaml << 'EOF'
model:
  default: claude-opus-4-8
  provider: XiOne-claude
custom_providers:
- name: XiOne-claude
  base_url: https://你的XiOne网关域名
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: anthropic_messages
- name: XiOne-openai
  base_url: https://你的XiOne网关域名/v1
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
- name: XiOne-gemini
  base_url: https://你的XiOne网关域名/gemini_cli/v1beta
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
EOF
```

### 3.验证

1.终端粘贴下面命令，回车

```bash
hermes
```

2./model 选择以XiOne开头的模型

![image](https://assets.aicodewith.ai/docs/1782983446038-3510c767-d3d6-4fc9-b85c-e2d8e134dedb.png)

3.测试对话，有正常回复即为安装成功啦

![image](https://assets.aicodewith.ai/docs/1782983311865-46804feb-b52c-41ac-82c4-028155d32a97.png)

> 常用命令	/model（查看和切换模型）	↑ / ↓（浏览历史命令）	Esc（撤回 / 退出）	/help（列出所有可用命令）

## Windows

> 系统要求
>
> Windows 10/11 + WSL2 + Ubuntu 22.04

### 1.装WSL（已装的跳过）

> 安装完成后电脑会要求重启。重启后会自动弹出 Ubuntu 窗口，设置一个用户名和密码即可。
> **如果之前已经装过 WSL 且能正常打开 Ubuntu 终端，直接跳到[【安装Hermes】](https://doc.xione.ai/docs/client-setup/hermes-cli/#2%E5%AE%89%E8%A3%85hermes)**

1.
按 **Win + R**输入 Powershell
打开 PowerShell （建议以管理员身份运行）并执行：

```bash
wsl --install
wsl --list --online
wsl --install -d Ubuntu-22.04
wsl.exe --install
```

2.设置您的用户名和密码

![image](https://assets.aicodewith.ai/docs/1783070743704-a4da0c06-6d3e-423a-8fb3-20f4b6fdb129.png)

![image](https://assets.aicodewith.ai/docs/1783070791858-19fdb55a-844c-4280-889d-2c5bd1600184.png)

> **遇到[Y/n/e]，都输入y，并回车**

### 2.安装Hermes

1.打开 WSL 终端（搜索**Ubuntu**或在**PowerShell**输入 `wsl`），粘贴下面命令

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

> **遇到[Y/n/e]，输入y，并回车**
> **遇到Password，输入您一开始创建的密码，并回车**

2.选择“快速设置（Quick Setup）”，选择“跳过信息平台设置”（Skip-set up later）

![image](https://assets.aicodewith.ai/docs/1783072169941-38faad7d-4a70-44c6-af8d-93706987392d.png)

![image](https://assets.aicodewith.ai/docs/1783072194849-f700dab7-c092-46e0-b273-99e23aad0912.png)

3.安装完成后，执行下面这条让 `hermes` 在当前终端立即可用

```bash
source $HOME/.local/bin/env
```

> 重新打开 WSL 终端后就不用再执行 source 了，安装脚本已经自动配好了路径。
> **如遇到报错：-bash: /home/he1124/.local/bin/env: No such file or directory；
> 执行：sed -i '/source \$HOME\/.local\/bin\/env/s/^/#/' ~/.bashrc && source ~/.bashrc**

### 3.配置

> 创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

1.点击复制下面命令，弹窗处填写您创建的API key，然后复制代码到终端回车执行

```bash
mkdir -p ~/.hermes && cat > ~/.hermes/config.yaml << 'EOF'
model:
  default: claude-opus-4-8
  provider: XiOne-claude
 
custom_providers:
- name: XiOne-claude
  base_url: https://你的XiOne网关域名
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: anthropic_messages
 
- name: XiOne-openai
  base_url: https://你的XiOne网关域名/v1
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
 
- name: XiOne-gemini
  base_url: https://你的XiOne网关域名/gemini_cli/v1beta
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
 
- name: XiOne-deepseek
  base_url: https://你的XiOne网关域名/v1
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
 
- name: XiOne-glm
  base_url: https://你的XiOne网关域名/v1
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
 
- name: XiOne-minimax
  base_url: https://你的XiOne网关域名/v1
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
 
- name: XiOne-kimi
  base_url: https://你的XiOne网关域名/v1
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
 
- name: XiOne-qwen
  base_url: https://你的XiOne网关域名/v1
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
 
- name: XiOne-step
  base_url: https://你的XiOne网关域名/v1
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
 
- name: XiOne-bytedance
  base_url: https://你的XiOne网关域名/v1
  api_key: 在这里替换成你的_XiOne_API_KEY
  api_mode: chat_completions
 
compression:
  summary_model: claude-haiku-4-5-20251001
EOF
```

### 4.验证

1.终端粘贴下面命令，回车

```bash
hermes
```

2./model 选择模型

![image](https://assets.aicodewith.ai/docs/1783071492986-5ad100e8-376b-49ce-99ec-4675cc462015.png)

![image](https://assets.aicodewith.ai/docs/1783071584636-84958fb8-7902-440a-94aa-9543ce351aab.png)

3.测试对话，有正常回复即为安装成功啦

![21b45420c78c1f6e58f4416e39b0673a](https://assets.aicodewith.ai/docs/1783071647242-84ba38f6-7187-4f6c-8197-91710bc85120.png)

> 常用命令	/model（查看和切换模型）	↑ / ↓（浏览历史命令）	Esc（撤回 / 退出）	/help（列出所有可用命令）

## 配置微信Hermes

> **前置条件**
> **1.按照上述教程已经安装好Hermes-agent
> 2.移动端和PC端微信版本为最新**

### 1.运行接入

1.打开终端 （Linux/mac） 或 WSL（windows)，运行

```
hermes update
```

```
hermes gateway setup
```

2.选择微信配置

![e01892a4a39bb56b4e41dcad8c46f52a](https://assets.aicodewith.ai/docs/1783394067009-5b267c98-8f15-49e5-aeef-a255b10a802c.png)

### 2.配置相关内容

1.输入 y 并回车

![image](https://assets.aicodewith.ai/docs/1783394283809-d0477422-6b6b-42fd-8333-45fd0fd0df05.png)

2.打开给的链接（选择复制粘贴到浏览器上即可打开），然后用微信app扫码

![image](https://assets.aicodewith.ai/docs/1783394854698-973d2f30-0ddc-43e1-be64-7bea614de731.png)

3.选择【Allow all direct messages】；选择【Allow all group chats】

![image](https://assets.aicodewith.ai/docs/1783394317137-44f560d8-a977-4cec-bc86-b461b08460c1.png)

![image](https://assets.aicodewith.ai/docs/1783394392299-87af2b8f-6068-4927-bccd-02b2ca83e5e5.png)

4.输入 y 并回车

![image](https://assets.aicodewith.ai/docs/1783394957122-a84ab704-bdec-48e0-b53f-fc7cace760b6.png)

5.选择【Done】

![image](https://assets.aicodewith.ai/docs/1783395043722-26956667-053c-4802-a973-6344fcb60e84.png)

6.都输入 y 并回车
（**Start the gateway automatically on login/boot as a launchd service**为开机是否要自动启动，可选n，选择不自动启动）

![ef8c6e7d67cb3e3b5abadd26e92a521f](https://assets.aicodewith.ai/docs/1783395483468-49f9c417-19e0-40c4-a859-99e3bafa09a7.png)

### 3.测试

1.因为 execute_code（执行代码）属于高风险操作 —— 脚本可以创建子进程、修改文件等，所以 Hermes 的安全机制会暂停执行，要求你手动批准。

> /approve   仅批准这一次执行
> /approve session   本次会话内同类操作都自动批准
> /approve always   永久批准此类操作（以后不再询问）
> /deny   拒绝执行，取消这次操作
> 
> 根据您的需求执行即可

![e6e966e7a5fc615f46e0db2fa7ced80b](https://assets.aicodewith.ai/docs/1783397587168-f6eee6c6-b35b-4071-8878-b713da4a51b7.png)

2.正常回复，就可以使用啦

![53f7923045b11098f5243f58494d8d39](https://assets.aicodewith.ai/docs/1783398371086-93cfeaca-84e3-4a23-8ee4-c12e3f90e777.png)

## 配置桌面Hermes

> Hermes桌面应用程序是一款原生应用程序，它基于与CLI和网关相同的代理构建——相同的配置、相同的API密钥、相同的会话、相同的技能、相同的内存。

> **前置条件**
> **需要终端已成功安装Hermes并正常回复，如未安装，点击链接去安装：[https://doc.xione.ai/docs/client-setup/overview/)**

### 1.终端配置

**1.需要终端已成功安装Hermes并正常回复，如未安装，点击链接去安装：[https://doc.xione.ai/docs/client-setup/overview/)**

![image](https://assets.aicodewith.ai/docs/1785823145879-b521a354-8ccd-4d13-95ba-d53df979a325.png)

### 2.运行接入

1.新开窗口运行

```bash
hermes desktop
```

2.会跳转出这个页面

![image](https://assets.aicodewith.ai/docs/1785823285376-120420e3-68d8-4975-ac60-0246687b1c18.png)

3.选择XiOne下的模型即可

![image](https://assets.aicodewith.ai/docs/1785823332398-f25555f6-7681-4038-bf5e-b600b988311e.png)

### 3.测试

1.测试正常回复即可使用

![image](https://assets.aicodewith.ai/docs/1785823653173-d29e13c7-281b-40de-8a8b-4c25d144f864.png)

