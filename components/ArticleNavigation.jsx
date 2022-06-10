/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo, useEffect, useState } from 'react'
import { HEADER_LOGOS, LANGS } from '../constants'

function ArticleNavigation() {
  const t = useTranslations('Navigation')
  const { locale: currentLocal, locales, pathname, query, asPath } = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // 切换语言时 隐藏菜单
    setIsOpen(false)
  }, [currentLocal])

  // mobile
  const toggleMenu = () => {
    console.log('toggleMenu')
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <section className="sticky top-0 left-0 right-0 z-10 sm:hidden">
        <section className="h-9 w-full bg-[#112541] sm:hidden" />
        <section className="flex flex-row items-center justify-between bg-[#1A487F] pl-44 pr-28 2xl:pl-28">
          <Link href="/" passHref>
            <div className="relative w-120 cursor-pointer">
              <Image src={HEADER_LOGOS[currentLocal]} alt="HUST AI" priority />
            </div>
          </Link>

          <nav>
            <ul className="flex cursor-pointer flex-row items-center justify-between">
              <li className="nav-text group relative py-10 pl-9 2xl:pl-8">
                <div className="flex flex-row items-center justify-between gap-x-7 opacity-80 hover:opacity-100">
                  <span>{t('lang')}</span>
                  <div className="space-y-1.5 2xl:space-y-1">
                    <div className="h-0.5 w-6 bg-[#E5E5E5]" />
                    <div className="h-0.5 w-6 bg-[#E5E5E5]" />
                    <div className="h-0.5 w-6 bg-[#E5E5E5]" />
                  </div>
                </div>
                <ul className="absolute top-full hidden bg-[#1A487F] group-hover:block">
                  {locales.map((locale) => {
                    if (locale === currentLocal) {
                      return (
                        <li
                          key={locale}
                          className="h-18 w-48 pl-11 pt-3.5 shadow-inner 2xl:h-14 2xl:pt-4">
                          <span className="text-white opacity-100">{t('lang')}</span>
                        </li>
                      )
                    }
                    return (
                      <li
                        key={locale}
                        className="h-18 w-48 pl-11 pt-3.5 shadow-inner 2xl:h-14 2xl:pt-4">
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
      </section>

      <section
        className="
        mobile relative hidden sm:flex justify-between items-center 
        bg-[#0E204E]
         w-full pl-1.5 pr-7 py-3.5
        ">
        <Link href="/" passHref>
          <div className="relative w-[227px]">
            <Image src={HEADER_LOGOS[currentLocal]} alt="HUST AI" priority />
          </div>
        </Link>
        <div className="space-y-2" onClick={toggleMenu}>
          <div className="h-0.5 w-6 bg-[#E5E5E5]" />
          <div className="h-0.5 w-6 bg-[#E5E5E5]" />
          <div className="h-0.5 w-6 bg-[#E5E5E5]" />
        </div>
        <ul className={`top-full right-0 bg-[#1A487F] z-10 ${isOpen ? 'absolute' : 'hidden'}`}>
          {locales.map((locale) => {
            if (locale === currentLocal) {
              return (
                <li
                  key={locale}
                  className="h-[46px] w-[136px] leading-[46px] pl-[43px] shadow-inner">
                  <span className="text-white text-[16px] opacity-100">{t('lang')}</span>
                </li>
              )
            }
            return (
              <li key={locale} className="h-[46px] w-[136px] leading-[46px] pl-[43px] shadow-inner">
                <Link href={{ pathname, query }} as={asPath} locale={locale}>
                  <a className="text-[#E5E5E5] text-[16px] opacity-80">{LANGS[locale]}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </header>
  )
}

export default memo(ArticleNavigation)
