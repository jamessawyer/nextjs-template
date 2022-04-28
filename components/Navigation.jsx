import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LOGOS, LANGS } from '../constants'

export default function Navigation() {
  const t = useTranslations('Navigation')
  const { locale: currentLocal, locales, pathname, query, asPath } = useRouter()
  console.log('Navigation locale: ', currentLocal)

  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <section className="w-full h-15 bg-[#112541] 2xl:h-10" />
      <section className="flex flex-row justify-between items-center bg-[#1A487F] pl-44 pr-28 2xl:pl-28">
        <div className="w-94 relative 2xl:w-60">
          <Image src={LOGOS[currentLocal]} alt="HUST AI" priority />
        </div>

        <nav>
          <ul className="flex flex-row justify-between items-center cursor-pointer">
            <li className="pr-9 py-16 nav-text 2xl:pr-8 2xl:py-12">
              <a className="opacity-80 hover:opacity-100" href="#institution">
                {t('institution')}
              </a>
            </li>
            <div className="w-px h-5 bg-[#D9E0E6] opacity-30" />
            <li className="px-9 py-16 nav-text 2xl:px-8 2xl:py-12">
              <a className="opacity-80 hover:opacity-100" href="#news">
                {t('news')}
              </a>
            </li>
            <div className="w-px h-5 bg-[#D9E0E6] opacity-30" />
            <li className="px-9 py-16 nav-text 2xl:px-8 2xl:py-12">
              <a className="opacity-80 hover:opacity-100" href="#scholar">
                {t('scholar')}
              </a>
            </li>
            <div className="w-px h-5 bg-[#D9E0E6] opacity-30" />
            <li className="px-9 py-16 nav-text 2xl:px-8 2xl:py-12">
              <a className="opacity-80 hover:opacity-100" href="#domain">
                {t('domain')}
              </a>
            </li>
            <div className="w-px h-5 bg-[#D9E0E6] opacity-30" />
            <li className="px-9 py-16 nav-text 2xl:px-8 2xl:py-12">
              <span className="opacity-80 hover:opacity-100">{t('apply')}</span>
            </li>
            <div className="w-px h-5 bg-[#D9E0E6] opacity-30" />
            <li className="group relative pl-9 py-16 nav-text 2xl:pl-8 2xl:py-12">
              <div className="flex flex-row justify-between items-center gap-x-7 opacity-80 hover:opacity-100">
                <span>{t('lang')}</span>
                <div className="space-y-1.5 2xl:space-y-1">
                  <div className="w-6 h-0.5 bg-[#E5E5E5]" />
                  <div className="w-6 h-0.5 bg-[#E5E5E5]" />
                  <div className="w-6 h-0.5 bg-[#E5E5E5]" />
                </div>
              </div>
              <ul className="hidden group-hover:block absolute top-full bg-[#1A487F]">
                {locales.map((locale) => {
                  if (locale === currentLocal) {
                    return (
                      <li
                        key={locale}
                        className="w-48 h-18 shadow-inner pl-11 pt-3.5 2xl:h-14 2xl:pt-4">
                        <span className="text-white opacity-100">{t('lang')}</span>
                      </li>
                    )
                  }
                  return (
                    <li
                      key={locale}
                      className="w-48 h-18 shadow-inner pl-11 pt-3.5 2xl:h-14 2xl:pt-4">
                      <Link href={{ pathname, query }} as={asPath} locale={locale}>
                        <a className="nav-text opacity-80 hover:opacity-100">{LANGS[locale]}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  )
}
