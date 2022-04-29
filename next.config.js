/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ['zh', 'zh-Hant', 'en', 'fr', 'jp'],
    defaultLocale: 'zh',
    localeDetection: false // 是否开启自动检测语言
  }
}

module.exports = nextConfig
