import Modal from 'react-modal'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { MODAL_LOGOS } from '../constants'
import useStore, { selectOpen, selectToggleOpen } from '../utils/useStore'
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

export default function ApplyModal() {
  const isOpen = useStore(selectOpen)
  const toggleOpen = useStore(selectToggleOpen)
  const t = useTranslations('Modal')
  const { locale: currentLocal } = useRouter()

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      className="relative bg-[#EBEBEB] z-50 flex flex-col gap-y-9 !pt-10 !pl-7 !pr-24 !pb-20">
      <div className="w-94 relative">
        <Image src={MODAL_LOGOS[currentLocal]} alt="" />
      </div>
      <div className="w-181.5 pl-9 font-normal text-xl text-[#263238] opacity-80">
        <p>{t('title')}</p>
        <p>{t('item1')}</p>
        <p>{t('item2')}</p>
        <p>{t('item3')}</p>
        <p>{t('item4')}</p>
        <p>{t('item5')}</p>
        <p className="flex flex-row gap-x-2 items-center mt-4">
          <span>{t('emailLabel')}</span>
          <span className="text-[#972F17]">aiii@aifun.com</span>
        </p>
      </div>
      <button type="button" className="absolute top-11 right-11" onClick={toggleOpen}>
        <div className="relative w-5 h-5">
          <Image src={CloseIcon} />
        </div>
      </button>
    </Modal>
  )
}
