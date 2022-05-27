import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'
import Slider from 'react-slick'

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
    <section>
      <section id="institution" className="relative h-139 w-full sm:hidden">
        <Slider {...settings}>
          <Link href={{ pathname: '/article/1' }} locale={currentLocal} passHref>
            <div className="h-139 w-full bg-[url('/images/home/banner-1.png')] bg-cover bg-center cursor-pointer" />
          </Link>
          <Link href={{ pathname: '/article/2' }} locale={currentLocal} passHref>
            <div className="h-139 w-full bg-[url('/images/home/banner-2.png')] bg-cover bg-center cursor-pointer" />
          </Link>
          <Link href={{ pathname: '/article/3' }} locale={currentLocal} passHref>
            <div className="h-139 w-full bg-[url('/images/home/banner-3.png')] bg-cover bg-center cursor-pointer" />
          </Link>
          <Link href={{ pathname: '/article/4' }} locale={currentLocal} passHref>
            <div className="h-139 w-full bg-[url('/images/home/banner-4.png')] bg-cover bg-center cursor-pointer" />
          </Link>
        </Slider>
      </section>

      <section className="mobile hidden sm:block sm:bg-[#0e204e] sm:pb-16">
        <Slider {...settings}>
          <div className="h-[237px] w-full bg-[url('/images/home/m-banner-1.png')] bg-cover bg-center" />
          <div className="h-[237px] w-full bg-[url('/images/home/m-banner-1.png')] bg-cover bg-center" />
          <div className="h-[237px] w-full bg-[url('/images/home/m-banner-1.png')] bg-cover bg-center" />
        </Slider>
        <p className="mt-5 mb-3.5 font-semibold text-lg text-[#E5E5E5] text-center">
          {t('gallery-button')}
        </p>
      </section>
    </section>
  )
}

export default memo(ImageCarousel)
