---
sidebar_position: 4
---

# Stripe 配置

面向海外用户的信用卡支付，走 Stripe Checkout 托管收银台，网关不需要处理卡号。

## 前置条件

在 [Stripe 后台](https://dashboard.stripe.com) 创建一个产品和价格（Price），拿到：

- API 密钥（Secret Key）
- Webhook 签名密钥
- 价格 ID（Price ID）

## 后台配置步骤

系统设置 → 计费与支付 → 支付网关，找到 Stripe 相关字段：

| 字段 | 说明 |
| --- | --- |
| API 密钥 | Stripe 的 Secret Key |
| Webhook 密钥 | 用于验证回调请求确实来自 Stripe，不是伪造的 |
| 价格 ID | 对应的 Stripe Price 对象 |
| 单价 | 每单位额度对应的美元金额 |
| 最低充值 | 起充金额 |
| 允许优惠码 | 是否在收银台展示优惠码输入框 |

## Webhook 配置

在 Stripe 后台的 Webhook 设置里添加一个端点，指向网关的 Stripe 回调地址，订阅
`checkout.session.completed` 事件。Webhook 密钥要和这里填的对应，否则回调会被
拒绝，用户付款后额度不会到账。
