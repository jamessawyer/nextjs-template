/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { useRouter } from 'next/router'
import { memo, useCallback, useEffect, useState } from 'react'
import { LOGOS, LANGS } from '../constants'
import useStore, { selectToggleOpen } from '@/utils/useStore'

function ScrollAnchor({ to, children, first = false, onSetInactive = () => null }) {
  return (
    <ScrollLink
      activeClass="!opacity-100"
      to={to}
      smooth="linear"
      delay={0}
      spy
      offset={-164}
      duration={150}
      onSetInactive={onSetInactive}
      className={`opacity-80 hover:opacity-100 ${first && 'opacity-100'}`}>
      {children}
    </ScrollLink>
  )
}

function Navigation() {
  const t = useTranslations('Navigation')
  const { locale: currentLocal, locales, pathname, query, asPath } = useRouter()

  const [isFirst, setIsFirst] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const onSetInactive = useCallback(() => {
    setIsFirst(false)
  }, [])

  useEffect(() => {
    // 切换语言时 隐藏菜单
    setIsOpen(false)
  }, [currentLocal])

  // mobile
  const toggleMenu = () => {
    console.log('toggleMenu')
    setIsOpen(!isOpen)
  }

  const toggleOpen = useStore(selectToggleOpen)

  return (
    <header>
      <section className="sticky top-0 left-0 right-0 z-10 sm:hidden">
        <section className="h-9 w-full bg-[#112541] sm:hidden" />
        <section className="flex flex-row items-center justify-between bg-[#1A487F] pl-44 pr-28 2xl:pl-28">
          <div
            className="relative w-94 cursor-pointer 2xl:w-60"
            onClick={() => scroll.scrollToTop({ delay: 0, duration: 150 })}>
            <Image src={LOGOS[currentLocal]} alt="HUST AI" priority />
          </div>

          <nav>
            <ul className="flex cursor-pointer flex-row items-center justify-between">
              <li
                className="
                  nav-text relative py-16 pr-9 2xl:py-12 2xl:pr-8
                  after:content-[''] after:h-5 after:w-px after:bg-[#D9E0E6] after:opacity-30
                  after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
                ">
                <ScrollAnchor to="institution" first={isFirst} onSetInactive={onSetInactive}>
                  {t('institution')}
                </ScrollAnchor>
              </li>
              <li
                className="
                nav-text relative px-9 py-16 2xl:px-8 2xl:py-12
                after:content-[''] after:h-5 after:w-px after:bg-[#D9E0E6] after:opacity-30
                after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
                ">
                <ScrollAnchor to="news">{t('news')}</ScrollAnchor>
              </li>
              <li
                className="
                nav-text relative px-9 py-16 2xl:px-8 2xl:py-12
                after:content-[''] after:h-5 after:w-px after:bg-[#D9E0E6] after:opacity-30
                after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
                ">
                <ScrollAnchor to="scholar">{t('scholar')}</ScrollAnchor>
              </li>
              <li
                className="
                nav-text relative px-9 py-16 2xl:px-8 2xl:py-12
                after:content-[''] after:h-5 after:w-px after:bg-[#D9E0E6] after:opacity-30
                after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
                ">
                <ScrollAnchor to="domain">{t('domain')}</ScrollAnchor>
              </li>
              <li
                className="
                nav-text relative px-9 py-16 2xl:px-8 2xl:py-12
                after:content-[''] after:h-5 after:w-px after:bg-[#D9E0E6] after:opacity-30
                after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
                ">
                <button type="button" onClick={toggleOpen} className="opacity-80 hover:opacity-100">
                  {t('apply')}
                </button>
              </li>
              <li className="nav-text group relative py-16 pl-9 2xl:py-12 2xl:pl-8">
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
        relative hidden sm:flex justify-between items-center 
        bg-[#0E204E] h-[140px]
         w-full pl-1.5 pr-7 py-3.5
        ">
        <div className="relative w-[227px] h-[113px]">
          <Image src={LOGOS[currentLocal]} alt="HUST AI" priority />
        </div>
        <div className="space-y-2 self-end mb-4" onClick={toggleMenu}>
          <div className="h-0.5 w-6 bg-[#E5E5E5]" />
          <div className="h-0.5 w-6 bg-[#E5E5E5]" />
          <div className="h-0.5 w-6 bg-[#E5E5E5]" />
        </div>
        {/* className={`opacity-80 hover:opacity-100 ${first && 'opacity-100'}`} */}
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

export default memo(Navigation)
