照着官方的 [with-docker - @github](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile) 示例进行配置，发现报如下错误
```
node:internal/modules/cjs/loader:936
  throw err;
  ^

Error: Cannot find module 'styled-jsx'
Require stack:
- /app/node_modules/.pnpm/next@12.1.5_react-dom@18.0.0+react@18.0.0/node_modules/next/dist/server/render.js
- /app/node_modules/.pnpm/next@12.1.5_react-dom@18.0.0+react@18.0.0/node_modules/next/dist/server/next-server.js
- /app/server.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/app/node_modules/.pnpm/next@12.1.5_react-dom@18.0.0+react@18.0.0/node_modules/next/dist/server/render.js:10:18)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/app/node_modules/.pnpm/next@12.1.5_react-dom@18.0.0+react@18.0.0/node_modules/next/dist/server/render.js',
    '/app/node_modules/.pnpm/next@12.1.5_react-dom@18.0.0+react@18.0.0/node_modules/next/dist/server/next-server.js',
    '/app/server.js'
  ]
}
```

最后在 [使用 Next.js + Docker 打造一个属于你的私人博客](https://juejin.cn/post/7050819548722757639#heading-17) 找到了解决方案：
```Dockerfile
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# 改成
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
```

其它链接：
  - [使用docker部署前端应用（dockerfile最佳实战）- 大虎@知乎](https://zhuanlan.zhihu.com/p/102853707)

注意项目使用的 `pnpm`, 不是 `yarn | npm`, 这一点需要注意

