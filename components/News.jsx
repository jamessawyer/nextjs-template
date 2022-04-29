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
    <section
      id="news"
      className="w-full h-188.5 
        bg-white bg-[url('/images/home/news-bg.png')] bg-[length:100%_44.25rem] bg-left-top
        bg-no-repeat
        flex flex-row justify-center items-center gap-x-21.5
        2xl:h-158.5 2xl:gap-x-16 2xl:bg-[length:100%_39.625rem]
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
              text-4xl text-white mt-2 mb-1
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
        w-296.5 h-158.5 flex flex-row bg-white self-end
        2xl:w-248 2xl:h-132.5
        ">
        <ul
          className="
          text-xl text-[#0E204E] w-119.25 h-full shadow-[0px_4px_25px_5px_rgba(0,0,0,0.1)] px-25.25 py-26.5 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-200 scrollbar-track-gray-100
          2xl:text-base 2xl:w-100 2xl:px-16 2xl:py-20
          ">
          <li
            className="relative
              before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2
            ">
            {t('content1')}
          </li>
          <li
            className="relative
            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2">
            {t('content2')}
          </li>
          <li
            className="relative
            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2">
            {t('content3')}
          </li>
          <li
            className="relative
            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2">
            {t('content4')}
          </li>
          <li
            className="relative
            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2">
            {t('content5')}
          </li>
        </ul>
        <div className="relative grow">
          <Image src={NewsCard} layout="fill" alt="" />
          <Fade direction="right" className="absolute left-0 bottom-[75px]">
            <Link href={{ pathname: '/news' }} locale={currentLocal}>
              <a
                className="
                  py-6 px-16 text-xs text-[#333333] tracking-[.2em]  bg-white flex flex-row items-center gap-x-4
                  hover:bg-[#000] hover:text-white transition-all
              ">
                <span>{t('button')}</span>
                <span className="text-lg">→</span>
              </a>
            </Link>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default memo(News)
