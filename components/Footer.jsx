import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { memo } from 'react'
import useStore, { selectToggleOpen } from '@/utils/useStore'
import { LOGOS } from '../constants'
import ShannonLogo from '../public/images/footer/shannon-logo.png'
import ShannonText from '../public/images/footer/shannon-text.png'
import Hust from '../public/images/footer/hust.png'

// todo 点击订阅按钮 弹出Modal
function Footer() {
  const t = useTranslations('Contact')
  const { locale: currentLocal } = useRouter()
  const toggleOpen = useStore(selectToggleOpen)

  return (
    <footer className="w-full h-97 bg-[url('/images/footer/bg.png')] bg-cover bg-bottom-center flex flex-row justify-center gap-x-28">
      <div className="mt-16">
        <div className="w-94 relative">
          <Image src={LOGOS[currentLocal]} alt="HUST AI" priority />
        </div>
        <h4 className="font-normal text-xs text-white mb-3 ml-6">{t('organization')}</h4>
        <div className="flex flex-row gap-x-6 ml-6">
          <div className="w-72 relative">
            <Image src={Hust} alt="" priority />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-7 relative">
              <Image src={ShannonLogo} alt="" priority />
            </div>
            <div className="w-26 relative">
              <Image src={ShannonText} alt="" priority />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-32">
        <h1
          className="
          font-normal text-2xl text-white mb-3
          2xl:text-xl
        ">
          {t('info')}
        </h1>
        <h3
          className="
          font-normal text-xl text-white
          2xl:text-lg
          ">
          12349901@shannon.com
        </h3>
        <h3
          className="
          font-normal text-xl text-white
          2xl:text-lg
          ">
          027-8888 8888
        </h3>
        <button
          type="button"
          onClick={toggleOpen}
          className="w-102 h-11 bg-white text-right pr-[18px] mt-8 font-light text-xl text-[#0E204E] hover:bg-black hover:text-white transition-all">
          {t('button')}
        </button>
      </div>
    </footer>
  )
}

export default memo(Footer)
