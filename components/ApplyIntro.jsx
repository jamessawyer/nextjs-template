import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'
import ApplyCard from '../public/images/home/apply-card.png'
import useStore, { selectToggleOpen } from '../utils/useStore'

export default function ApplyIntro() {
  const t = useTranslations('Apply')

  const toggleOpen = useStore(selectToggleOpen)

  return (
    <section
      id="apply"
      className="
        w-full h-189 bg-[url('/images/home/apply-bg.png')] bg-[#132A4F] mix-blend-overlay bg-cover bg-center flex flex-row  gap-x-38 pl-48 pr-83 pt-40.5 pb-38 -mt-px
        2xl:h-177.25 2xl:gap-x-28 2xl:pr-56
      ">
      <Slide direction="left" triggerOnce>
        <div className="shrink-0 w-88.5 2xl:w-80">
          <Image src={ApplyCard} alt="" />
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className="flex flex-col h-full">
          <h1
            className="
            font-semibold text-4xl text-[#E5E5E5] tracking-wider
            2xl:text-3xl
          ">
            {t('title')}
          </h1>
          <p
            className="
            font-medium text-[#E5E5E5] text-2.5xl mt-14
            2xl:text-xl 2xl:mt-10 2xl:leading-8
            ">
            {t('content')}
          </p>
          <button
            type="button"
            onClick={toggleOpen}
            className="
              w-46 h-14.5 leading-14.5 tracking-[0.26em] bg-[#972F17] text-center text-[#E5E5E5] text-1.5xl mt-auto
              hover:text-white hover:bg-[#972F56] transition-all
              2xl:text-lg
              ">
            {t('button')}
          </button>
        </div>
      </Slide>
    </section>
  )
}
