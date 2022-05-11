/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { useRouter } from 'next/router'
import { memo, useCallback, useState } from 'react'
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

  const onSetInactive = useCallback(() => {
    setIsFirst(false)
  }, [])

  const toggleOpen = useStore(selectToggleOpen)

  return (
    <header className="sticky top-0 left-0 right-0 z-10">
      <section className="w-full h-9 bg-[#112541]" />
      <section className="flex flex-row justify-between items-center bg-[#1A487F] pl-44 pr-28 2xl:pl-28">
        <div
          className="w-94 relative 2xl:w-60 cursor-pointer"
          onClick={() => scroll.scrollToTop({ delay: 0, duration: 150 })}>
          <Image src={LOGOS[currentLocal]} alt="HUST AI" priority />
        </div>

        <nav>
          <ul className="flex flex-row justify-between items-center cursor-pointer">
            <li className="pr-9 py-16 nav-text 2xl:pr-8 2xl:py-12">
              <ScrollAnchor to="institution" first={isFirst} onSetInactive={onSetInactive}>
                {t('institution')}
              </ScrollAnchor>
            </li>
            <div className="w-px h-5 bg-[#D9E0E6] opacity-30" />
            <li className="px-9 py-16 nav-text 2xl:px-8 2xl:py-12">
              <ScrollAnchor to="news">{t('news')}</ScrollAnchor>
            </li>
            <div className="w-px h-5 bg-[#D9E0E6] opacity-30" />
            <li className="px-9 py-16 nav-text 2xl:px-8 2xl:py-12">
              <ScrollAnchor to="scholar">{t('scholar')}</ScrollAnchor>
            </li>
            <div className="w-px h-5 bg-[#D9E0E6] opacity-30" />
            <li className="px-9 py-16 nav-text 2xl:px-8 2xl:py-12">
              <ScrollAnchor to="domain">{t('domain')}</ScrollAnchor>
            </li>
            <div className="w-px h-5 bg-[#D9E0E6] opacity-30" />
            <li className="px-9 py-16 nav-text 2xl:px-8 2xl:py-12">
              <button type="button" onClick={toggleOpen} className="opacity-80 hover:opacity-100">
                {t('apply')}
              </button>
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

export default memo(Navigation)
