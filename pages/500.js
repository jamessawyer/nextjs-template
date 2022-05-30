import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PageLayout from '@/components/PageLayout'

export default function Custom500() {
  const t = useTranslations('500')
  const { locale } = useRouter()

  return (
    <PageLayout>
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <h2 className="text-4xl">{t('title')}</h2>
        <Link href="/" locale={locale}>
          <a
            className="mt-5 inline-flex h-10 w-46 items-center justify-center bg-[#972F17] text-center text-xl leading-10 tracking-[0.26em] text-[#E5E5E5]
                transition-all hover:bg-[#972F56] hover:text-white
                2xl:text-lg">
            {t('button')}
          </a>
        </Link>
      </section>
    </PageLayout>
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
