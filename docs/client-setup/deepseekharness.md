---
sidebar_position: 13
title: "DeepSeek Harness"
---

# DeepSeek Harness

DeepSeek Harness 是 DeepSeek 开源的插件化智能体运行框架，通过 Cordis 内核将模型、工具、会话等能力模块化，帮助开发者灵活构建和定制编码智能体。

# DeepSeek Harness

## Claude 配置

### 1.安装

1.安装DeepSeek 官方原版包

**打开终端，复制如下命令粘贴到终端，回车执行即可**

```bash
npm install -g @deepseek-ai/dsh
```

![78ba4bd70f8d1579de99519825a0f871](https://assets.aicodewith.ai/docs/1789450596527-969d87fb-5c88-4f54-94ec-12cad1131511.png)

### 2.运行

1.启动 Web 使用页面

**打开终端，复制如下命令粘贴到终端，回车执行即可**

```bash
dsh web
```

2.打开 Web 使用页面
在浏览器输入默认地址 `http://127.0.0.1:3080 `打开 DeepSeek Harness。

### 3.配置

1.点击左下角「设置」，进入「模型」，选择「添加自定义提供方」。

![image](https://assets.aicodewith.ai/docs/1789451151411-a5b996fa-1778-4d3e-afec-1cadd47943ea.png)

![f7c637cca3a5f9194b3579b3631ed2e8](https://assets.aicodewith.ai/docs/1789451160862-a11648de-0932-4ebc-ad89-622b4bc6c81e.png)

![e8bb20c2458694f896f80a30eb44f071](https://assets.aicodewith.ai/docs/1789451166908-a3ef4e12-b80f-449c-9cc1-39b4f8eae933.png)

2.填写 Claude 配置信息
Provider ID：XiOne
显示名称：XiOne
API地址：https://你的XiOne网关域名
API协议：openai-completions
API密钥：点击链接**去创建key**[https://doc.xione.ai/docs/client-setup/overview/)
模型目录：点击「添加模型」复制如下您想要使用的模型ID粘贴到上面
claude-haiku-4-5-20251001
claude-opus-4-6
claude-opus-4-7
claude-opus-4-8
claude-opus-5
claude-sonnet-4-6
claude-sonnet-5
以上填写完成后，点击「创建提供方」即为保存

![089f8fe740aca493203a33324f3b453a](https://assets.aicodewith.ai/docs/1789451218584-02ea4f7d-f657-425a-ab5f-945a82c24d77.png)

### 4.测试

1.选择一个Claude模型，输入你好，测试正常回复就可以使用啦

![c4170369601d56fa536a9d64702993c1](https://assets.aicodewith.ai/docs/1789451724361-53a7886e-efce-445a-ad4d-057ca09faf3d.png)

## ChatGPT 配置

### 1.安装

1.安装DeepSeek 官方原版包

**打开终端，复制如下命令粘贴到终端，回车执行即可**

```bash
npm install -g @deepseek-ai/dsh
```

![78ba4bd70f8d1579de99519825a0f871](https://assets.aicodewith.ai/docs/1789450596527-969d87fb-5c88-4f54-94ec-12cad1131511.png)

### 2.运行

1.启动 Web 使用页面

**打开终端，复制如下命令粘贴到终端，回车执行即可**

```bash
dsh web
```

2.打开 Web 使用页面
在浏览器输入默认地址 `http://127.0.0.1:3080 `打开 DeepSeek Harness。

### 3.配置

1.点击左下角「设置」，进入「模型」，选择「添加自定义提供方」。

![image](https://assets.aicodewith.ai/docs/1789451151411-a5b996fa-1778-4d3e-afec-1cadd47943ea.png)

![f7c637cca3a5f9194b3579b3631ed2e8](https://assets.aicodewith.ai/docs/1789451160862-a11648de-0932-4ebc-ad89-622b4bc6c81e.png)

![e8bb20c2458694f896f80a30eb44f071](https://assets.aicodewith.ai/docs/1789451166908-a3ef4e12-b80f-449c-9cc1-39b4f8eae933.png)

2.填写 ChatGPT 配置信息
Provider ID：XiOne2
显示名称：XiOne2
API地址：https://你的XiOne网关域名
API协议：openai-completions
API密钥：点击链接**去创建key**[https://doc.xione.ai/docs/client-setup/overview/)
模型目录：点击「添加模型」复制如下您想要使用的模型ID粘贴到上面
gpt-5.5
gpt-5.6-sol
gpt-5.6-terra
gpt-6-astra
以上填写完成后，点击「创建提供方」即为保存

![02952b114cfb16f52bda4a180ab4a6ba](https://assets.aicodewith.ai/docs/1789452334885-4cdfc891-9d37-4c2d-8e93-9b29ec28c66a.png)

### 4.测试

1.选择一个ChatGPT模型，输入你好，测试正常回复就可以使用啦

![a420f06efc90dd7e54af110eb574b451](https://assets.aicodewith.ai/docs/1789452400381-13b63eb3-af0f-4d11-ab87-e0764b975bde.png)

## Gemini 配置

### 1.安装

1.安装DeepSeek 官方原版包

**打开终端，复制如下命令粘贴到终端，回车执行即可**

```bash
npm install -g @deepseek-ai/dsh
```

![78ba4bd70f8d1579de99519825a0f871](https://assets.aicodewith.ai/docs/1789450596527-969d87fb-5c88-4f54-94ec-12cad1131511.png)

### 2.运行

1.启动 Web 使用页面

**打开终端，复制如下命令粘贴到终端，回车执行即可**

```bash
dsh web
```

2.打开 Web 使用页面
在浏览器输入默认地址 `http://127.0.0.1:3080 `打开 DeepSeek Harness。

### 3.配置

1.点击左下角「设置」，进入「模型」，选择「添加自定义提供方」。

![image](https://assets.aicodewith.ai/docs/1789451151411-a5b996fa-1778-4d3e-afec-1cadd47943ea.png)

![f7c637cca3a5f9194b3579b3631ed2e8](https://assets.aicodewith.ai/docs/1789451160862-a11648de-0932-4ebc-ad89-622b4bc6c81e.png)

![e8bb20c2458694f896f80a30eb44f071](https://assets.aicodewith.ai/docs/1789451166908-a3ef4e12-b80f-449c-9cc1-39b4f8eae933.png)

2.填写 Gemini 配置信息
Provider ID：XiOne3
显示名称：XiOne3
API地址：https://你的XiOne网关域名
API协议：openai-completions
API密钥：点击链接**去创建key**[https://doc.xione.ai/docs/client-setup/overview/)
模型目录：点击「添加模型」复制如下您想要使用的模型ID粘贴到上面
gemini-3.1-pro-preview
gemini-3.7-flash
gemini-3.8-flash
以上填写完成后，点击「创建提供方」即为保存

![c65f48acd7b37e20435ed15d1c7b79d0](https://assets.aicodewith.ai/docs/1789452653290-6069b8f0-2bdc-461f-b5c9-755a14af8c54.png)

### 4.测试

1.选择一个Gemini模型，输入你好，测试正常回复就可以使用啦

![9bf3360d4988dacd49a192d407d932e2](https://assets.aicodewith.ai/docs/1789452688600-aa414154-7d83-4675-a08d-6bc17811de42.png)

## DeepSeek 配置

### 1.安装

1.安装DeepSeek 官方原版包

**打开终端，复制如下命令粘贴到终端，回车执行即可**

```bash
npm install -g @deepseek-ai/dsh
```

![78ba4bd70f8d1579de99519825a0f871](https://assets.aicodewith.ai/docs/1789450596527-969d87fb-5c88-4f54-94ec-12cad1131511.png)

### 2.运行

1.启动 Web 使用页面

**打开终端，复制如下命令粘贴到终端，回车执行即可**

```bash
dsh web
```

2.打开 Web 使用页面
在浏览器输入默认地址 `http://127.0.0.1:3080 `打开 DeepSeek Harness。

### 3.配置

1.点击左下角「设置」，进入「模型」，选择「添加自定义提供方」。

![image](https://assets.aicodewith.ai/docs/1789451151411-a5b996fa-1778-4d3e-afec-1cadd47943ea.png)

![f7c637cca3a5f9194b3579b3631ed2e8](https://assets.aicodewith.ai/docs/1789451160862-a11648de-0932-4ebc-ad89-622b4bc6c81e.png)

![e8bb20c2458694f896f80a30eb44f071](https://assets.aicodewith.ai/docs/1789451166908-a3ef4e12-b80f-449c-9cc1-39b4f8eae933.png)

2.填写 DeepSeek 配置信息
Provider ID：XiOne4
显示名称：XiOne4
API地址：https://你的XiOne网关域名
API协议：openai-completions
API密钥：点击链接**去创建key**[https://doc.xione.ai/docs/client-setup/overview/)
模型目录：点击「添加模型」复制如下您想要使用的模型ID粘贴到上面
deepseek-flash
deepseek-v4-flash
deepseek-v4-flash-vision-exp
deepseek-v4-pro
以上填写完成后，点击「创建提供方」即为保存

![9c8b527d950af741920a62b9fe4b443f](https://assets.aicodewith.ai/docs/1789453231752-e9caa4d0-91ea-4984-b387-f7b8bcaa839d.png)

### 4.测试

1.选择一个DeepSeek模型，输入你好，测试正常回复就可以使用啦

![1f3e232a72f07ba4b0eb770027700840](https://assets.aicodewith.ai/docs/1789453252076-56415e41-6ad6-4c05-bef7-2e9d162c4fd0.png)

