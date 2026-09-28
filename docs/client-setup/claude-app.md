---
sidebar_position: 3
title: "Claude（桌面版）"
---

# Claude（桌面版）

通过配置URL、API key、Model ID方式接入XiOne服务

# Claude桌面app配置

## macOS / Linux

> macOS 或 Linux 系统，已安装 Git

1.前往 [Git 官网](https://git-scm.com/install/windows)

2.macOS点击[Homebrew](https://brew.sh/)

> 安装 Homebrew 的时候，有一部分资源在海外，需要设置 TUN 代理

![image](https://assets.aicodewith.ai/docs/1782198263615-878a3acf-1f48-42af-9f94-b6b6bed6c9e3.png)

![image](https://assets.aicodewith.ai/docs/1789552613592-cf48303a-8376-4267-9700-8bf86232134f.png)

3.点击复制到终端执行

![image](https://assets.aicodewith.ai/docs/1782198327971-4d44d7d7-21e5-4654-9a43-82d0822f8579.png)

4.终端执行安装

```bash
brew install git
```

5.验证安装

```bash
git --version
```

![image](https://assets.aicodewith.ai/docs/1782198966896-ba982340-0e33-4d60-b251-28544ba69445.png)

### 1.下载Claude App

> 下载页面需要能访问外网

[https://claude.com/download](https://claude.com/download)

![image](https://assets.aicodewith.ai/docs/1782193676212-a419560d-f0f2-4b46-b037-9171e4448514.png)

> 如果下载完成后首先是登录界面，登录即可，然后再继续按教程配置（可能是之前账号登录过才会这样，不影响按此教程使用）

### 2.启用 Developer Mode

安装后打开 Claude App，点击整个屏幕左上角 Help → Troubleshooting → Enable Developer Mode，弹窗选择 Enable。

![5737c116cfdb5a7e579a50e46ef37063](https://assets.aicodewith.ai/docs/1782194295352-37560fa2-ba8a-4504-8c34-3fbdc68cef57.png)

![29a1416a2c7e998e2834dd9601aeb611](https://assets.aicodewith.ai/docs/1782194348401-a4270f45-2f30-4b63-bebb-0f9db878fcf2.png)

### 3.打开第三方推理配置

软件会自动重启，重启后此时点击整个屏幕左上角 Developer → Configure Third-Party Inference，打开配置页面。

![da9e3cda2d13113ec14f7c71a484e84d](https://assets.aicodewith.ai/docs/1782194450736-fc1890e4-8cb1-44d3-88b7-2f3df37c32c5.png)

### 4.填写Gateway base URL 和 Gateway API key

1.先选择 Credential kind 里的 Static APl key

![image](https://assets.aicodewith.ai/docs/1786519192138-9ee7432e-6923-4e12-b07e-dc78e24de749.png)

2.然后填写 Gateway base URL 和 Gateway API key，并将 Gateway auth scheme 选择为 x-api-key

base URL：https://你的XiOne网关域名

点击此链接创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

![image](https://assets.aicodewith.ai/docs/1786519700528-7d24c588-281b-4b9b-ae6a-80ddb88568f5.png)

### 5.添加模型

1.Model ID获取：[https://XiOne.com/zh/dashboard/pricing](https://XiOne.com/zh/dashboard/pricing)

![image](https://assets.aicodewith.ai/docs/1782195431037-de5bba22-ebfd-4651-b277-c9e17ad65c26.png)

2.页面下滑到 Model list 部分，点击 Add 添加模型，输入Model ID，例如claude-opus-4-8、claude-4.6-sonnet-medium、claude-haiku-4-5-20251001。Display name是显示名称对应模型填简写就好

![0b724b7355890e45639e23d13dae38a1](https://assets.aicodewith.ai/docs/1782195831688-79674215-af90-4add-94f1-d27199e96a51.png)

![fa8701bcfc61683f7c7a0ce3dab51be7](https://assets.aicodewith.ai/docs/1782195849005-36f15f53-4720-49d7-841c-b7512ca6ac36.png)

3.最后点击Apply Changes应用更改，重启提示选择Save & Restart保存并重启即可

![78472c98ea639f91f10b3b19a320178b](https://assets.aicodewith.ai/docs/1782196024927-3da4e6ed-c00d-49c0-b995-0e8778d01c12.png)

![1ba9838e3469ba63ba5500f91ef9469d](https://assets.aicodewith.ai/docs/1782196109210-d8089a8c-cd64-4ec8-ae4d-ba48bf5ddb3a.png)

### 6.测试

输入有正常回复即配置成功

![3e7063b895d0e3a11ef7f26ade29722d](https://assets.aicodewith.ai/docs/1782196270316-ec9f3aed-7d12-467e-b452-44ec62f1c0e2.png)

## Windows

> Windows 10/11，已安装 Git

前往 [Git 官网](https://git-scm.com/install/windows)，下载安装包，然后一路 yes 就行，都是英文的，不用管

![图像](https://assets.aicodewith.ai/docs/1769744581907-7399da60-33fa-47fb-8d92-fa16f240d8b9.png)

### 1.下载Claude App

> 下载页面需要能访问外网

[https://claude.com/download](https://claude.com/download)

![image](https://assets.aicodewith.ai/docs/1782193742170-6af41762-b794-46cc-88e1-da4b5c9dfbec.png)

### 2.下载后安装

完成后会自动打开软件页面

![image](https://assets.aicodewith.ai/docs/1782196587352-8836475d-256f-4f58-b65e-172cfa506bcc.png)

### 3.启用 Developer Mode

点击左上角的三条杠，选择 Help → Troubleshooting → Enable Developer Mode，弹窗选择 Enable。

![image](https://assets.aicodewith.ai/docs/1782196632161-d4ff59f3-044b-4531-a34b-81ba77fdc446.png)

![image](https://assets.aicodewith.ai/docs/1782196684670-a05c717e-b5ca-48ef-a6fb-8f6c777dff34.png)

### 4.打开第三方推理配置

软件会自动重启，此时点击左上角的三条杠，选择 Developer → Configure Third-Party Inference，打开配置页面。

![image](https://assets.aicodewith.ai/docs/1782196750502-80d232bc-36ff-4bc1-bc28-16449030ef7e.png)

### 5.填写Gateway base URL 和 Gateway API key

1.先选择 Credential kind 里的 Static APl key

![image](https://assets.aicodewith.ai/docs/1786519192138-9ee7432e-6923-4e12-b07e-dc78e24de749.png)

2.然后填写 Gateway base URL 和 Gateway API key，并将 Gateway auth scheme 选择为 x-api-key

base URL：https://你的XiOne网关域名

点击此链接创建您的API key：[https://doc.xione.ai/docs/client-setup/overview/)

![image](https://assets.aicodewith.ai/docs/1786519875077-67d503d4-fb20-4988-8b28-d01fc8034679.png)

### 6.添加模型

1.Model ID获取：[https://XiOne.com/zh/dashboard/pricing](https://XiOne.com/zh/dashboard/pricing)

![image](https://assets.aicodewith.ai/docs/1782195431037-de5bba22-ebfd-4651-b277-c9e17ad65c26.png)

2.页面下滑到 Model list 部分，点击 Add 添加模型，输入Model ID，例如claude-opus-4-6、claude-sonnet-4-6。点击下方 Apply locally，然后保存，软件会自动重启然后进入使用页面。

![image](https://assets.aicodewith.ai/docs/1782196893589-e111f6f2-a480-4521-a601-0249e1f68f95.png)

### 7.测试

输入有正常回复即配置成功

![image](https://assets.aicodewith.ai/docs/1782453120438-7b1a0620-3865-4917-8225-ddf68c5495f9.png)

