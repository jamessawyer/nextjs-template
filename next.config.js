/** @type {import('next').NextConfig} */
const withBundleAnalyzer = process.env.ANALYZE === 'true' && require('@next/bundle-analyzer')({
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
    localeDetection: false // 是否开启自动检测语言
  },
  experimental: {
    outputStandalone: true,
  }
}

module.exports = process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig
