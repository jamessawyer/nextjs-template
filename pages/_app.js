import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // 共享组件
  // https://juejin.cn/post/7000351648459522078#heading-8
  return (
    <>
      <Head>
        <title>{Component.title || 'AI Lab'}</title>
        <meta name="description" content={Component.description || ''} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
