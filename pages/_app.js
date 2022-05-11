import Head from 'next/head'
import { NextIntlProvider, IntlErrorCode } from 'next-intl'
import '@/styles/globals.css'
// slick引入问题 https://stackoverflow.com/a/69292192
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PageLayout from '@/components/PageLayout'

function onError(error) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Missing translations are expected and should only log an error
    console.error(error)
  } else {
    // Other errors indicate a bug in the app and should be reported
    console.log('国际化其余错误')
  }
}

function getMessageFallback({ namespace, key, error }) {
  const path = [namespace, key].filter((part) => part != null).join('.')

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} 没有被翻译`
  }
  return `Dear developer, please fix this message: ${path}`
}

function MyApp({ Component, pageProps }) {
  // 共享组件
  // https://juejin.cn/post/7000351648459522078#heading-8
  return (
    <NextIntlProvider
      messages={pageProps.messages}
      timeZone="Asia/Shanghai"
      onError={onError}
      getMessageFallback={getMessageFallback}>
      <Head>
        <title>{Component.title || 'AI Lab'}</title>
        <meta name="description" content={Component.description || ''} />
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </NextIntlProvider>
  )
}

export default MyApp
