import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NewsCard from '../public/images/home/news-card.png'

export default function News() {
  const t = useTranslations('News')
  const { locale: currentLocal } = useRouter()
  return (
    <section
      id="news"
      className="w-full h-188.5 
        bg-[#E5E5E5] bg-[url('/images/home/news-bg.png')] bg-[length:100%_44.25rem] bg-left-top
        bg-no-repeat
        flex flex-row justify-center items-center gap-x-21.5
      ">
      <div className="flex flex-col">
        <h1 className="text-5.5xl text-white">{t('title')}</h1>
        <h3 className="text-4xl text-white mt-2 mb-1">{t('subtitle1')}</h3>
        <h3 className="text-4xl text-white">{t('subtitle2')}</h3>
      </div>
      <div className="w-296.5 h-158.5 flex flex-row bg-white self-end overflow-hidden">
        <ul className="w-119.25 h-full shadow-[0px_4px_25px_5px_rgba(0,0,0,0.1)] px-25.25 py-26.5 overflow-y-auto">
          <li
            className="text-xl text-[#0E204E] relative
            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2">
            {t('content1')}
          </li>
          <li
            className="text-xl text-[#0E204E] relative
            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2">
            {t('content2')}
          </li>
          <li
            className="text-xl text-[#0E204E] relative
            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2">
            {t('content3')}
          </li>
          <li
            className="text-xl text-[#0E204E] relative
            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2">
            {t('content4')}
          </li>
          <li
            className="text-xl text-[#0E204E] relative
            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:bg-[#C4C4C4] before:absolute before:-left-6 before:top-2">
            {t('content5')}
          </li>
        </ul>
        <div className="relative">
          <Image src={NewsCard} alt="" />
        </div>
      </div>
    </section>
  )
}
