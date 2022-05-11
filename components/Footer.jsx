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
    <footer className="bg-bottom-center flex h-97 w-full flex-row justify-center gap-x-28 bg-[url('/images/footer/bg.png')] bg-cover">
      <div className="mt-16">
        <div className="relative w-94">
          <Image src={LOGOS[currentLocal]} alt="HUST AI" priority />
        </div>
        <h4 className="mb-3 ml-6 text-xs font-normal text-white">{t('organization')}</h4>
        <div className="ml-6 flex flex-row gap-x-6">
          <div className="relative w-72">
            <Image src={Hust} alt="" priority />
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-7">
              <Image src={ShannonLogo} alt="" priority />
            </div>
            <div className="relative w-26">
              <Image src={ShannonText} alt="" priority />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 flex flex-col">
        <h1
          className="
          mb-3 text-2xl font-normal text-white
          2xl:text-xl
        ">
          {t('info')}
        </h1>
        <h3
          className="
          text-xl font-normal text-white
          2xl:text-lg
          ">
          12349901@shannon.com
        </h3>
        <h3
          className="
          text-xl font-normal text-white
          2xl:text-lg
          ">
          027-8888 8888
        </h3>
        <button
          type="button"
          onClick={toggleOpen}
          className="mt-8 h-11 w-102 bg-white pr-[18px] text-right text-xl font-light text-[#0E204E] transition-all hover:bg-black hover:text-white">
          {t('button')}
        </button>
      </div>
    </footer>
  )
}

export default memo(Footer)
