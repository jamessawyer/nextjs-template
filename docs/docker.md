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
# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
```

其它链接：

- [使用 docker 部署前端应用（dockerfile 最佳实战）- 大虎@知乎](https://zhuanlan.zhihu.com/p/102853707)

注意项目使用的 `pnpm`, 不是 `yarn | npm`, 这一点需要注意

> Husky 问题

`pnpm install` 时，会执行 `pnpm prepare` 命令，而 docker image 中是不需要 `Husky` 的，因此需要跳过该命令的执行

- [Docker Husky fail to install on docker image with Node 16](https://github.com/typicode/husky/issues/991#issuecomment-866690543)

```bash
# 原命令
RUN pnpm install --frozen-lockfile --prod

# 添加 --ignore-scripts
RUN pnpm install --frozen-lockfile --ignore-scripts --prod
```

> @next/bundle-analyzer 问题

因为 `@next/bundle-analyzer` 是开发依赖，因此在 docker 构建时是找不到的，所以需要将原先的写法：

```js
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    // locales: ['zh', 'zh-Hant', 'en', 'fr', 'jp'],
    // locales: ['zh', 'en', 'jp'],
    locales: ['zh'],
    defaultLocale: 'zh',
    localeDetection: false, // 是否开启自动检测语言
  },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
```

修改为：

```js
/** @type {import('next').NextConfig} */
const withBundleAnalyzer =
  process.env.ANALYZE === 'true' &&
  require('@next/bundle-analyzer')({
    enabled: true,
  })

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    // locales: ['zh', 'zh-Hant', 'en', 'fr', 'jp'],
    // locales: ['zh', 'en', 'jp'],
    locales: ['zh'],
    defaultLocale: 'zh',
    localeDetection: false, // 是否开启自动检测语言
  },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig
```
