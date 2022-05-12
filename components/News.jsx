import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { Fade } from 'react-awesome-reveal'
import NewsCard from '../public/images/home/news-card.png'

function News() {
  const t = useTranslations('News')
  const { locale: currentLocal } = useRouter()
  return (
    <section>
      <section
        id="news"
        className="flex h-188.5 
          w-full flex-row items-center justify-center
          gap-x-21.5
          bg-white bg-[url('/images/home/news-bg.png')] bg-[length:100%_44.25rem] bg-left-top bg-no-repeat
          2xl:h-158.5 2xl:gap-x-16 2xl:bg-[length:100%_39.625rem]
          sm:hidden
        ">
        <div className="flex flex-col">
          <Fade cascade direction="up">
            <h1
              className="
                text-5.5xl text-white
                2xl:text-4xl
              ">
              {t('title')}
            </h1>
            <h3
              className="
                mt-2 mb-1 text-4xl text-white
                2xl:text-2xl
                ">
              {t('subtitle1')}
            </h3>
            <h3
              className="
                text-4xl text-white
                2xl:text-2xl
              ">
              {t('subtitle2')}
            </h3>
          </Fade>
        </div>
        <div
          className="
          flex h-158.5 w-296.5 flex-row self-end bg-white
          2xl:h-132.5 2xl:w-248
          ">
          <ul
            className="
            h-full w-119.25 overflow-y-auto px-25.25 py-26.5 text-xl text-[#0E204E] shadow-[0px_4px_25px_5px_rgba(0,0,0,0.1)] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-sky-200
            2xl:w-100 2xl:px-16 2xl:py-20 2xl:text-base
            ">
            <li
              className="relative
                before:absolute before:-left-6 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#C4C4C4] before:content-['']
              ">
              {t('content1')}
            </li>
            <li
              className="relative
              before:absolute before:-left-6 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#C4C4C4] before:content-['']">
              {t('content2')}
            </li>
            <li
              className="relative
              before:absolute before:-left-6 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#C4C4C4] before:content-['']">
              {t('content3')}
            </li>
            <li
              className="relative
              before:absolute before:-left-6 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#C4C4C4] before:content-['']">
              {t('content4')}
            </li>
            <li
              className="relative
              before:absolute before:-left-6 before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#C4C4C4] before:content-['']">
              {t('content5')}
            </li>
          </ul>
          <div className="relative grow">
            <Image src={NewsCard} layout="fill" alt="" />
            <Fade direction="right" className="absolute left-0 bottom-[75px]">
              <Link href={{ pathname: '/news' }} locale={currentLocal}>
                <a
                  className="
                    flex flex-row items-center gap-x-4 bg-white  py-6 px-16 text-xs tracking-[.2em] text-[#333333]
                    transition-all hover:bg-[#000] hover:text-white
                ">
                  <span>{t('button')}</span>
                  <span className="text-lg">→</span>
                </a>
              </Link>
            </Fade>
          </div>
        </div>
      </section>

      <section className="mobile hidden sm:block">
        <div
          className="
          h-[210px] w-full
          bg-[url('/images/home/m-news-bg.png')] bg-[length:100%_210px] bg-center bg-no-repeat
          pt-5
          pl-8
          ">
          <Fade cascade direction="up">
            <h1 className="text-2xl text-white">{t('title')}</h1>
            <h3 className="mt-2 mb-1 text-sm text-white">{t('subtitle1')}</h3>
            <h3 className="text-sm text-white">{t('subtitle2')}</h3>
          </Fade>
        </div>

        <div className="-mt-20 flex flex-col bg-white w-[237px] mx-auto shadow-[0px_4px_25px_5px_rgba(0,0,0,0.1)]">
          <div className="relative h-[212px]">
            <Image src={NewsCard} layout="fill" alt="" />
            <div className="absolute bottom-[16px] -left-[84px] drop-shadow-md">
              <Link href={{ pathname: '/news' }} locale={currentLocal}>
                <a className="flex flex-row items-center gap-x-4 bg-white  py-3 px-6 text-xs tracking-[.2em] text-[#333333]">
                  <span>{t('button')}</span>
                  <span className="text-lg">→</span>
                </a>
              </Link>
            </div>
          </div>

          <ul className="h-[237px] overflow-y-auto p-7 text-xs text-[#0E204E]">
            <li
              className="relative
                before:absolute before:-left-3 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[#C4C4C4] before:content-['']
              ">
              {t('content1')}
            </li>
            <li
              className="relative
              before:absolute before:-left-3 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[#C4C4C4] before:content-['']">
              {t('content2')}
            </li>
            <li
              className="relative
              before:absolute before:-left-3 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[#C4C4C4] before:content-['']">
              {t('content3')}
            </li>
            <li
              className="relative
              before:absolute before:-left-3 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[#C4C4C4] before:content-['']">
              {t('content4')}
            </li>
            <li
              className="relative
              before:absolute before:-left-3 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-[#C4C4C4] before:content-['']">
              {t('content5')}
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}

export default memo(News)
