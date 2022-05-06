import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Custom404() {
  const t = useTranslations('404')
  const { locale } = useRouter()

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl">{t('title')}</h2>
      <Link href="/" locale={locale}>
        <a
          className="w-46 h-10 leading-10 tracking-[0.26em] bg-[#972F17] text-center text-[#E5E5E5] mt-5 text-xl inline-flex justify-center items-center
              hover:text-white hover:bg-[#972F56] transition-all
              2xl:text-lg">
          {t('button')}
        </a>
      </Link>
    </section>
  )
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/shared/${locale}.json`),
      },
    },
  }
}
