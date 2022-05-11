import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'
import Slider from 'react-slick'
import RightArrow from '../public/images/right-arrow.png'

const settings = {
  dots: true,
  arrows: false, // 是否需要左右箭头
  infinite: true,
  autoplaySpeed: 3000,
  autoplay: true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  // 添加自定义dotsClass 用于改写其样式
  dotsClass: 'slick-dots gallery-dots',
}

function ImageCarousel() {
  const t = useTranslations('Index')
  const { locale: currentLocal } = useRouter()

  return (
    <section id="institution" className="relative h-139 w-full">
      <Slider {...settings}>
        <div className="h-139 w-full bg-[url('/images/home/banner-1.png')] bg-cover bg-center" />
        <div className="h-139 w-full bg-[url('/images/home/banner-2.png')] bg-cover bg-center" />
        <div className="h-139 w-full bg-[url('/images/home/banner-3.png')] bg-cover bg-center" />
      </Slider>
      <div className="absolute left-0 bottom-16 bg-[#0c3655] bg-opacity-60 transition-all hover:bg-opacity-80">
        <Link href={{ pathname: '/deep' }} locale={currentLocal}>
          <a
            className="
            flex h-full w-full flex-row items-center gap-x-7 pl-39 pr-29 pt-15 pb-13
            2xl:pl-24 2xl:pr-15 2xl:pt-8 2xl:pb-7
          ">
            <p
              className="
              max-w-[305px] text-2xl font-semibold text-[#E5E5E5]
              hover:text-white
              2xl:max-w-[190px] 2xl:text-xl
              ">
              {t('gallery-button')}
            </p>
            <div className="relative h-10 w-10 2xl:h-8 2xl:w-8">
              <Image src={RightArrow} alt="" />
            </div>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default memo(ImageCarousel)
