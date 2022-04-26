import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useCallback } from 'react'
import { Slide } from 'react-awesome-reveal'
import ApplyCard from '../public/images/home/apply-card.png'

export default function ApplyIntro() {
  const t = useTranslations('Apply')

  // 打开Modal框
  const openModal = useCallback(() => {}, [])

  return (
    <section
      id="apply"
      className="w-full h-189 bg-[url('/images/home/apply-bg.png')] bg-[#132A4F] mix-blend-overlay bg-cover bg-center flex flex-row  gap-x-38 pl-48 pr-83 pt-40.5 pb-38">
      <Slide direction="left" triggerOnce>
        <div className="shrink-0 w-88.5">
          <Image src={ApplyCard} alt="" />
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className="flex flex-col h-full">
          <h1 className="font-semibold text-4xl text-[#E5E5E5] tracking-wider">{t('title')}</h1>
          <p className="font-medium text-[#E5E5E5] text-2.5xl mt-14">{t('content')}</p>
          <button
            type="button"
            onClick={openModal}
            className="w-46 h-14.5 leading-14.5 tracking-[0.26em] bg-[#972F17] text-center text-[#E5E5E5] text-1.5xl mt-auto">
            {t('button')}
          </button>
        </div>
      </Slide>
    </section>
  )
}
