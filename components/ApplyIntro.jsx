import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { memo } from 'react'
import { Slide } from 'react-awesome-reveal'
import ApplyCard from '../public/images/home/apply-card.png'
import useStore, { selectToggleOpen } from '@/utils/useStore'

function ApplyIntro() {
  const t = useTranslations('Apply')

  const toggleOpen = useStore(selectToggleOpen)

  return (
    <section>
      <section
        id="apply"
        className="
          -mt-px flex h-189 w-full flex-row gap-x-38 bg-[#132A4F] bg-[url('/images/home/apply-bg.png')] bg-cover  bg-center pl-48 pr-83 pt-40.5 pb-38 mix-blend-overlay
          2xl:h-177.25 2xl:gap-x-28 2xl:pr-56
          sm:hidden
        ">
        <Slide direction="left" triggerOnce>
          <div className="w-88.5 shrink-0 2xl:w-80">
            <Image src={ApplyCard} alt="" />
          </div>
        </Slide>
        <Slide direction="right" triggerOnce>
          <div className="flex h-full flex-col">
            <h1
              className="
              text-4xl font-semibold tracking-wider text-[#E5E5E5]
              2xl:text-3xl
            ">
              {t('title')}
            </h1>
            <p
              className="
              mt-14 text-2.5xl font-medium text-[#E5E5E5]
              2xl:mt-10 2xl:text-xl 2xl:leading-8
              ">
              {t('content')}
            </p>
            <button
              type="button"
              onClick={toggleOpen}
              className="
                mt-auto h-14.5 w-46 bg-[#972F17] text-center text-1.5xl leading-14.5 tracking-[0.26em] text-[#E5E5E5]
                transition-all hover:bg-[#972F56] hover:text-white
                2xl:text-lg
                ">
              {t('button')}
            </button>
          </div>
        </Slide>
      </section>

      <section
        className="
        mobile hidden sm:flex flex-col items-center h-[498px] w-full
        bg-[#132A4F] bg-[url('/images/home/m-apply-bg.png')] bg-cover bg-center px-9 py-14
      ">
        <h1 className="font-bold text-2xl text-white text-center tracking-wider">{t('title')}</h1>
        <p className="mt-9 font-normal text-[13px] leading-[18px] text-center text-[#E5E5E5]">
          {t('content')}
        </p>
        <button
          type="button"
          onClick={toggleOpen}
          className="
              mt-auto h-[32px] w-[128px] inline-block bg-[#972F17] font-semibold text-center text-xs leading-[32px] tracking-[0.26em] text-[#E5E5E5]
              ">
          {t('button')}
        </button>
      </section>
    </section>
  )
}

export default memo(ApplyIntro)
