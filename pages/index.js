import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ImageCarousel from '../components/ImageCarousel'
import ApplyIntro from '../components/ApplyIntro'
import Domain from '../components/Domain'

export default function Home() {
  const t = useTranslations('Index')
  const { locale, locales, route } = useRouter()
  console.log('locales', locales)
  const otherLocale = locales?.find((cur) => cur !== locale)

  return (
    <>
      <ImageCarousel />
      <ApplyIntro />
      <Domain />
      <h1 className="text-3xl text-red-500 font-bold underline">{t('title')}</h1>
      <h3>locale: {locale}</h3>
      <div className="h-[100vh] w-full bg-orange-400" />
      <div id="scholar" className="h-[100vh] w-full bg-green-400" />
      {otherLocale && (
        <Link href={route} locale={otherLocale}>
          <a>切换</a>
        </Link>
      )}
    </>
  )
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/index/${locale}.json`),
        // 注意这里要引入 components 中才能使用
        ...require(`../messages/shared/${locale}.json`),
      },
    },
  }
}
