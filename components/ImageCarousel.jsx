import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import Banner1 from '../public/images/home/banner-1.png'
import Banner2 from '../public/images/home/banner-2.png'
import Banner3 from '../public/images/home/banner-3.png'
import RightArrow from '../public/images/right-arrow.png'

const IMAGES = [
  {
    id: 1,
    src: Banner1,
  },
  {
    id: 2,
    src: Banner2,
  },
  {
    id: 3,
    src: Banner3,
  },
]

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

export default function ImageCarousel() {
  const t = useTranslations('Index')
  const { locale: currentLocal } = useRouter()

  return (
    <section className="w-full h-140 overflow-hidden relative">
      <Slider {...settings}>
        {IMAGES.map(({ id, src }) => (
          <div className="relative h-full" key={id}>
            <Image src={src} alt="" />
          </div>
        ))}
      </Slider>
      <div className="absolute left-0 bottom-16 bg-[#0c3655] bg-opacity-60">
        <Link href={{ pathname: '/deep' }} locale={currentLocal}>
          <a className="w-full h-full pl-39 pr-29 pt-15 pb-13 flex flex-row items-center gap-x-7">
            <p className="font-semibold text-[#E5E5E5] text-2xl max-w-[305px]">
              {t('gallery-button')}
            </p>
            <div className="relative w-10 h-10">
              <Image src={RightArrow} alt="" />
            </div>
          </a>
        </Link>
      </div>
    </section>
  )
}
