import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const t = useTranslations('Index')
  const { locale, locales, route } = useRouter()
  console.log('locales', locales)
  const otherLocale = locales?.find((cur) => cur !== locale)

  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold underline">{t('title')}</h1>
      <h3>locale: {locale}</h3>
      {otherLocale && (
        <Link href={route} locale={otherLocale}>
          <a>切换</a>
        </Link>
      )}
    </div>
  )
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/index/${locale}.json`),
      },
    },
  }
}
