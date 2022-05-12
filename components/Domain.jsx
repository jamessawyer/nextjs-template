import { useTranslations } from 'next-intl'
import { Fade, Zoom } from 'react-awesome-reveal'
import Image from 'next/image'
import { memo } from 'react'
import DomainTag1 from '../public/images/home/domain-tag-1.png'
import DomainTag2 from '../public/images/home/domain-tag-2.png'
import DomainTag3 from '../public/images/home/domain-tag-3.png'
import DomainTag4 from '../public/images/home/domain-tag-4.png'
import DomainTag5 from '../public/images/home/domain-tag-5.png'
import DomainTag6 from '../public/images/home/domain-tag-6.png'
import DomainCard1 from '../public/images/home/domain-card-1.png'
import DomainCard2 from '../public/images/home/domain-card-2.png'
import TagList from './TagList'

const TAGS = [
  {
    id: 1,
    src: DomainTag1,
    tag: 'tag1',
    width: 'w-23.5 sm:w-[36px]',
    height: 'h-23.5 sm:h-[36px]',
  },
  {
    id: 2,
    src: DomainTag2,
    tag: 'tag2',
    width: 'w-23.5 sm:w-[36px]',
    height: 'h-23.5 sm:h-[36px]',
  },
  {
    id: 3,
    src: DomainTag3,
    tag: 'tag3',
    width: 'w-23.5 sm:w-[36px]',
    height: 'h-23.5 sm:h-[36px]',
  },
  {
    id: 4,
    src: DomainTag4,
    tag: 'tag4',
    width: 'w-20 sm:w-[38px]',
    height: 'h-20 sm:h-[38px]',
  },
  {
    id: 5,
    src: DomainTag5,
    tag: 'tag5',
    width: 'w-20 sm:w-[38px]',
    height: 'h-20 sm:h-[38px]',
  },
  {
    id: 6,
    src: DomainTag6,
    tag: 'tag6',
    width: 'w-20 sm:w-[38px]',
    height: 'h-20 sm:h-[38px]',
  },
]

function Domain() {
  const t = useTranslations('Domain')
  return (
    <section
      id="domain"
      className="
      bg-[#E5E5E5] px-45 pt-26.5 pb-40
        2xl:px-32 2xl:pt-20 2xl:pb-28

        sm:px-0
        sm:py-16
    ">
      <Fade direction="up" cascade className="ml-4 flex flex-col sm:ml-0">
        <h1
          className="
            text-6xl font-semibold text-[#0E204E]
            2xl:text-5xl

            sm:text-2xl
            sm:text-black
            sm:opacity-80
            sm:text-center
          ">
          {t('title')}
        </h1>
        <h2
          className="
            mt-5 mb-2 text-6xl font-semibold text-[#0E204E]
            2xl:text-5xl

            sm:text-2xl
            sm:text-black
            sm:opacity-80
            sm:text-center
            sm:px-11
            sm:mt-2
            sm:mb-8
        ">
          {t('subtitle')}
        </h2>
        <p
          className="
          mt-3.5 mb-20 max-w-4xl text-xl font-normal text-[#263238] opacity-80
          2xl:text-lg
          sm:hidden
          ">
          {t('description')}
        </p>
      </Fade>
      <div
        className="
        flex flex-row items-center justify-between gap-x-94
        2xl:gap-x-60

        sm:flex-col
        sm:gap-x-0
        sm:items-start
        sm:gap-y-8
        ">
        <Zoom>
          <div
            className="-after:right-full relative h-148
              w-142 after:absolute after:top-1/2 after:h-89.5
              after:w-52 after:-translate-y-1/2 after:bg-[#0E204E] after:content-['']
              2xl:h-100 2xl:w-96 2xl:after:h-56 2xl:after:w-24

              sm:h-[280px] sm:w-[272px]
              sm:after:-right-[68px] sm:after:top-1/2 sm:after:h-[210px]
              sm:after:w-[68px]
              ">
            <Image src={DomainCard1} alt="" />
          </div>
        </Zoom>
        <TagList tags={TAGS.slice(0, 3)} />
      </div>
      <div
        className="
        flex flex-row-reverse items-center justify-between gap-x-94
        2xl:gap-x-60

        sm:mt-10
        sm:flex-col
        sm:items-end
        sm:gap-y-8
      ">
        <Zoom>
          <div
            className="relative h-148 w-142 grow-0
              after:absolute after:-left-52 after:top-1/2 after:h-89.5
              after:w-52 after:-translate-y-1/2 after:bg-[#0E204E] after:content-['']
              2xl:h-100 2xl:w-96 2xl:after:-left-24 2xl:after:h-56 2xl:after:w-24

              sm:h-[280px] sm:w-[272px]
              sm:after:-left-[68px] sm:after:top-1/2 sm:after:h-[210px]
              sm:after:w-[68px]
              ">
            <Image src={DomainCard2} alt="" />
          </div>
        </Zoom>
        <TagList tags={TAGS.slice(3)} />
      </div>
    </section>
  )
}

export default memo(Domain)
