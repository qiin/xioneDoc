---
sidebar_position: 2
---

# PayerScan（加密货币支付）配置

PayerScan 提供托管结账页面，用户可以用 USDT 等加密货币充值，网关本身不需要
管理钱包地址。

## 前置条件

1. 在 [PayerScan 后台](https://payerscan.com) 创建 Store。
2. 为 Store 配置至少一个收款方式（钱包地址或 Binance Pay），否则无法生成账单。
3. 拿到 Store 的**商户号**（形如 `MID-XXXXXXXXXX`）和 **API Key**。

## 后台配置步骤

打开「系统设置 → 计费与支付 → PayerScan（加密货币）」：

| 字段 | 填什么 |
| --- | --- |
| PayerScan 商户号 | 上一步拿到的商户号 |
| PayerScan API Key | 上一步拿到的 API Key，必须和商户号是**同一个店铺** |
| 单价 (USD) | 每个充值单位收多少美元，通常填 `1` |
| 最低充值数量 | 起充量 |
| PayerScan API 地址 | 留空即可，默认用官方生产地址 |

填完保存，再打开「启用 PayerScan」开关，**再保存一次**。

## 关键一步：登记回调地址

配置页会显示一个只读的「回调通知地址」，形如：

```
https://你的域名/api/payerscan/webhook
```

把它复制粘贴到 PayerScan 店铺设置的 callback URL。**这一步不做，用户付了钱不会到账
——网关完全依赖这个回调来确认支付状态，不会主动去查询。**

## 上线前建议

配置完成后，先自己用小额真实充值一笔，确认额度能正常到账，再对外开放这个支付方式。
