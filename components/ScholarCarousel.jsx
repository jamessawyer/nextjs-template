/* eslint-disable react/no-danger */
import { useTranslations } from 'next-intl'
import { Slide } from 'react-awesome-reveal'
import Image from 'next/image'
import Slider from 'react-slick'
import { useCallback, useRef, memo } from 'react'
import RightArrow from '../public/images/right-arrow.png'
import ScholarZhu from '../public/images/scholar/scholar-zhu.png'
import ScholarYuan from '../public/images/scholar/scholar-yuan.png'
import ScholarTang from '../public/images/scholar/scholar-tang.png'
import ScholarZhuo from '../public/images/scholar/scholar-zhuo.png'
import ScholarGuo from '../public/images/scholar/scholar-guo.png'
import ScholarXu from '../public/images/scholar/scholar-xu.png'
import ScholarChen from '../public/images/scholar/scholar-chen.png'
import ScholarLiu from '../public/images/scholar/scholar-liu.png'
import ScholarYan from '../public/images/scholar/scholar-yan.png'
import ScholarEyad from '../public/images/scholar/scholar-eyad.png'
import ScholarThomas from '../public/images/scholar/scholar-thomas.png'
import ScholarLee from '../public/images/scholar/scholar-lee.png'

const SCHOLARS = [
  {
    id: 1,
    name: 'scholar1.name',
    title: 'scholar1.title',
    honors: 'scholar1.honors',
    avatar: ScholarZhu,
  },
  {
    id: 2,
    name: 'scholar2.name',
    title: 'scholar2.title',
    honors: 'scholar2.honors',
    avatar: ScholarYuan,
  },
  {
    id: 3,
    name: 'scholar3.name',
    title: 'scholar3.title',
    honors: 'scholar3.honors',
    avatar: ScholarTang,
  },
  {
    id: 4,
    name: 'scholar4.name',
    title: 'scholar4.title',
    honors: 'scholar4.honors',
    avatar: ScholarZhuo,
  },
  {
    id: 5,
    name: 'scholar5.name',
    title: 'scholar5.title',
    honors: 'scholar5.honors',
    avatar: ScholarGuo,
  },
  {
    id: 6,
    name: 'scholar6.name',
    title: 'scholar6.title',
    honors: 'scholar6.honors',
    avatar: ScholarXu,
  },
  {
    id: 7,
    name: 'scholar7.name',
    title: 'scholar7.title',
    honors: 'scholar7.honors',
    avatar: ScholarChen,
  },
  {
    id: 8,
    name: 'scholar8.name',
    title: 'scholar8.title',
    honors: 'scholar8.honors',
    avatar: ScholarLiu,
  },
  {
    id: 9,
    name: 'scholar9.name',
    title: 'scholar9.title',
    honors: 'scholar9.honors',
    avatar: ScholarYan,
  },
  {
    id: 10,
    name: 'scholar10.name',
    title: 'scholar10.title',
    honors: 'scholar10.honors',
    avatar: ScholarEyad,
  },
  {
    id: 11,
    name: 'scholar11.name',
    title: 'scholar11.title',
    honors: 'scholar11.honors',
    avatar: ScholarThomas,
  },
  {
    id: 12,
    name: 'scholar12.name',
    title: 'scholar12.title',
    honors: 'scholar12.honors',
    avatar: ScholarLee,
  },
]

const settings = {
  dots: false,
  arrows: false, // 是否需要左右箭头
  infinite: true,
  autoplay: false,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  // fade: true,
}

function Scholar({ name, title, honors, avatar, onClick }) {
  const t = useTranslations('Scholars')
  return (
    <div
      className="
      flex flex-row items-center justify-center gap-x-96

      sm:gap-x-16
      sm:justify-between
      ">
      <div
        className="
          relative h-150.25 w-114.25
          2xl:h-140 2xl:w-102

          sm:h-[161px] sm:min-w-[121px] sm:w-[121px] sm:grow
        ">
        <Image src={avatar} layout="fill" alt="" />
        <button
          type="button"
          onClick={onClick}
          aria-hidden
          tabIndex="-1"
          className="
            group absolute -right-[12.875rem] top-1/2 h-89.5 w-51.5 -translate-y-1/2 bg-[#0E204E] transition-all hover:bg-[#051847]
            2xl:-right-[11.5rem] 2xl:h-80 2xl:w-46

            sm:h-[100px] sm:w-[39px] sm:-right-[39px]
          ">
          <div
            className="
            relative mx-auto h-10 w-10 transition-transform duration-100 group-hover:translate-x-4

            sm:w-[17px] sm:h-[17px] sm:transition-none sm:group-hover:translate-x-0
            ">
            <Image src={RightArrow} alt="" priority />
          </div>
        </button>
      </div>

      <div className="flex flex-col gap-y-8 sm:gap-y-1.5 sm:items-start">
        <div
          className="
          flex flex-row items-end gap-x-2 text-[#0E204E]

          sm:flex-col sm:items-start sm:gap-x-0
          ">
          <span
            className="
            text-4xl tracking-wider

            sm:text-xl
            ">
            {t(name)}
          </span>
          <span className="text-2xl sm:text-xs">{t(title)}</span>
        </div>
        <div
          className="
            flex max-w-sm flex-col tracking-wider text-[#0E204E]

            sm:text-xs sm:origin-top-left sm:scale-75
          "
          dangerouslySetInnerHTML={{ __html: t.raw(honors) }}
        />
      </div>
    </div>
  )
}

const MemoedScholar = memo(Scholar)

function ScholarCarousel() {
  const t = useTranslations('Scholars')

  const slider = useRef(null)
  const onClick = useCallback(() => {
    slider?.current.slickNext()
  }, [])

  return (
    <section
      id="scholar"
      className="
      pt-48 pb-60 pl-40
      2xl:pt-32 2xl:pb-36

      sm:px-6 sm:pt-16 sm:pb-10
      ">
      <div direction="up" className="flex flex-col items-center sm:mb-12">
        <Slide direction="left">
          <h1
            className="
            text-6xl font-semibold text-[#0E204E] 
            sm:text-2xl sm:px-20 sm:text-center
          ">
            {t('title')}
          </h1>
        </Slide>
        <Slide direction="right">
          <p
            className="
            mt-9 mb-36.5 max-w-181.5 text-center text-xl font-normal text-[#263238]
            2xl:mb-24

            sm:hidden
            ">
            {t('subtitle')}
          </p>
        </Slide>
      </div>
      <div>
        <Slider {...settings} ref={slider}>
          {SCHOLARS.map((scholar) => (
            <MemoedScholar key={scholar.id} {...scholar} onClick={onClick} />
          ))}
        </Slider>
      </div>
    </section>
  )
}
export default memo(ScholarCarousel)
