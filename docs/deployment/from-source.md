---
sidebar_position: 2
---

# 源码编译部署

适合需要自己改代码的场景（比如接入自定义支付网关）。

## 后端

```bash
go build -o new-api
```

## 前端

前端产物会被打包进 Go 二进制，**改前端代码后必须先构建前端，再编译后端**：

```bash
cd web
bun install
bun run build
cd ..
go build -o new-api
```

## 验证清单

改完代码、准备发布前，至少确认：

- `go build ./...`、`go vet ./...` 通过
- `go test ./...`（改到的包）通过
- `bun run typecheck`、`bun run build`、`bun run test` 通过

这套清单也写在仓库的 `FORK_CHANGES.md` 里，每次改动都要照做一遍。
