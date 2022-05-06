开发：
```bash
pnpm dev
```

打包：
```bash
pnpm build
```
因为项目使用到了 **国际化功能**，无法使用 `pnpm build:static` 进行 `next export` 操作，可参考：
  - [next.js Unsupported Features](https://nextjs.org/docs/advanced-features/static-html-export#unsupported-features)

docker镜像制作：
```bash
docker build -t ai-lab:v1 .
```
