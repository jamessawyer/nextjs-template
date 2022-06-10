import Modal from 'react-modal'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { memo } from 'react'
import { MODAL_LOGOS } from '../constants'
import useStore, { selectOpen, selectToggleOpen } from '@/utils/useStore'
import CloseIcon from '../public/images/close.png'

// modal样式
const customStyles = {
  content: {
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(12, 54, 85, 0.6)',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
Modal.setAppElement('#__next')

function ApplyModal() {
  const isOpen = useStore(selectOpen)
  const toggleOpen = useStore(selectToggleOpen)
  const t = useTranslations('Modal')
  const { locale: currentLocal } = useRouter()

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      className="
        relative z-50 flex flex-col gap-y-9 bg-[#EBEBEB] !pt-10 !pl-7 !pr-24 !pb-20

        sm:!pt-6 sm:!pl-2 sm:!pr-18 sm:!pb-12 sm:gap-y-6 sm:mr-4 sm:ml-4
      ">
      <div className="relative w-94 sm:w-72">
        <Image src={MODAL_LOGOS[currentLocal]} alt="" />
      </div>
      <div
        className="
        w-181.5 pl-9 text-xl font-normal text-[#263238] opacity-80
        
        sm:text-xs sm:pl-4 sm:w-[320px] sw:break-words
        ">
        <p>{t('title')}</p>
        <p>{t('item1')}</p>
        <p>{t('item2')}</p>
        <p>{t('item3')}</p>
        <p>{t('item4')}</p>
        <p>{t('item5')}</p>
        <p className="mt-4 flex flex-row items-center gap-x-2">
          <span>{t('emailLabel')}</span>
          <span className="text-[#972F17]">aiii@aifun.com</span>
        </p>
        <p className="mt-4 flex flex-row items-center gap-x-2">
          <span>{t('phone')}</span>
          <span className="text-[#972F17]">027-8754941</span>
        </p>
      </div>
      <button
        type="button"
        className="absolute top-11 right-11 sm:top-6 sm:right-6"
        onClick={toggleOpen}>
        <div className="relative h-5 w-5 sm:h-4 sm:w-4">
          <Image src={CloseIcon} alt="" />
        </div>
      </button>
    </Modal>
  )
}
export default memo(ApplyModal)
