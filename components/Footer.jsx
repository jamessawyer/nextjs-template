import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { memo } from 'react'
import useStore, { selectToggleOpen } from '@/utils/useStore'
import { LOGOS } from '../constants'
import ShannonLogo from '../public/images/footer/shannon-logo.png'
import ShannonText from '../public/images/footer/shannon-text.png'
import Badge from '../public/images/footer/badge.png'
import Hust from '../public/images/footer/hust.png'

// todo 点击订阅按钮 弹出Modal
function Footer() {
  const t = useTranslations('Contact')
  const { locale: currentLocal } = useRouter()
  const toggleOpen = useStore(selectToggleOpen)

  return (
    <>
      <footer
        className="
        bg-bottom-center flex h-97 w-full flex-row justify-center gap-x-28 bg-[url('/images/footer/bg.png')] bg-cover
        
        sm:h-[394px] sm:flex-col sm:justify-start sm:px-12 sm:gap-x-0 sm:bg-[url('/images/footer/m-bg.png')] sm:pt-8
        ">
        <div className="mt-16 sm:mt-0">
          <div className="relative w-94 sm:w-[217px] sm:-ml-4">
            <Image src={LOGOS[currentLocal]} alt="HUST AI" priority />
          </div>
          <p
            className="
            mb-3 ml-6 text-xs font-normal text-white
            sm:mb-0 sm:ml-0
            ">
            {t('organization')}
          </p>
          <div
            className="
            ml-6 flex flex-row gap-x-6

            sm:gap-x-0 sm:items-center sm:ml-0
            ">
            <div
              className="
              relative w-72 
              sm:w-[187px]
            ">
              <Image src={Hust} alt="" priority />
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-7 sm:w-6">
                <Image src={ShannonLogo} alt="" priority />
              </div>
              <div className="relative w-26">
                <Image src={ShannonText} alt="" priority />
              </div>
            </div>
          </div>
        </div>
        <div
          className="
          mt-32 flex flex-col
          sm:mt-6
          ">
          <h1
            className="
            mb-3 text-2xl font-normal text-white
            2xl:text-xl

            sm:text-xs
          ">
            {t('info')}
          </h1>
          <h2
            className="
            text-xl font-normal text-white
            2xl:text-lg

            sm:text-xs
            sm:origin-top-left
            sm:scale-90
            ">
            12349901@shannon.com
          </h2>
          <h2
            className="
            text-xl font-normal text-white
            2xl:text-lg

            sm:text-xs
            sm:origin-top-left
            sm:scale-90
            ">
            027-8888 8888
          </h2>
          <button
            type="button"
            onClick={toggleOpen}
            className="
              mt-8 h-11 w-102 bg-white pr-[18px] text-right text-xl font-light text-[#0E204E] transition-all hover:bg-black hover:text-white

              sm:h-[27px] sm:w-full sm:text-xs sm:pr-1.5
              ">
            {t('button')}
          </button>
        </div>
      </footer>
      <section
        className="
        w-full h-24 pl-[235px] flex flex-row items-center gap-x-12 bg-[#202020] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.48)]
        text-xl text-white
        sm:h-[84px] sm:flex-col-reverse sm:gap-y-2 sm:justify-center sm:pl-[0] sm:text-xs
        ">
        <div className="inline-flex flex-row items-center gap-x-2.5 sm:gap-x-1">
          <div className="relative w-8 h-6 sm:w-4 sm:h-3">
            <Image src={Badge} alt="" />
          </div>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42018502004969"
            rel="noreferrer">
            鄂公网安备 42018502004969号
          </a>
        </div>
        <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index" rel="noreferrer">
          鄂 ICP备2020022374号-3
        </a>
      </section>
    </>
  )
}

export default memo(Footer)
