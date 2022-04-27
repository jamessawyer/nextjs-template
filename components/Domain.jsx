import { useTranslations } from 'next-intl'
import { Fade, Zoom } from 'react-awesome-reveal'
import Image from 'next/image'
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
    width: 'w-23.5',
    height: 'h-23.5',
  },
  {
    id: 2,
    src: DomainTag2,
    tag: 'tag2',
    width: 'w-23.5',
    height: 'h-23.5',
  },
  {
    id: 3,
    src: DomainTag3,
    tag: 'tag3',
    width: 'w-23.5',
    height: 'h-23.5',
  },
  {
    id: 4,
    src: DomainTag4,
    tag: 'tag4',
    width: 'w-20',
    height: 'h-20',
  },
  {
    id: 5,
    src: DomainTag5,
    tag: 'tag5',
    width: 'w-20',
    height: 'h-20',
  },
  {
    id: 6,
    src: DomainTag6,
    tag: 'tag6',
    width: 'w-20',
    height: 'h-20',
  },
]

export default function Domain() {
  const t = useTranslations('Domain')
  return (
    <section
      id="domain"
      className="
      bg-[#E5E5E5] pt-26.5 px-45 pb-40
        2xl:pt-20 2xl:px-32 2xl:pb-28
    ">
      <Fade direction="up" cascade className="flex flex-col ml-4">
        <h1
          className="
            font-semibold text-6xl text-[#0E204E]
            2xl:text-5xl
          ">
          {t('title')}
        </h1>
        <h2
          className="
            font-semibold text-6xl text-[#0E204E] mt-5 mb-2
            2xl:text-5xl
        ">
          {t('subtitle')}
        </h2>
        <p
          className="
          max-w-4xl font-normal text-xl text-[#263238] opacity-80 mt-3.5 mb-20
          2xl:text-lg
          ">
          {t('description')}
        </p>
      </Fade>
      <div
        className="
        flex flex-row justify-between items-center gap-x-94
        2xl:gap-x-60
        ">
        <Zoom>
          <div
            className="relative w-142 h-148
              after:content-[''] after:w-52 after:h-89.5 after:bg-[#0E204E]
              after:absolute -after:right-full after:top-1/2 after:-translate-y-1/2
              2xl:w-96 2xl:h-100 2xl:after:w-24 2xl:after:h-56
              ">
            <Image src={DomainCard1} alt="" />
          </div>
        </Zoom>
        <TagList tags={TAGS.slice(0, 3)} />
      </div>
      <div
        className="
        flex flex-row-reverse justify-between items-center gap-x-94
        2xl:gap-x-60
      ">
        <Zoom>
          <div
            className="relative w-142 h-148 grow-0
              after:content-[''] after:w-52 after:h-89.5 after:bg-[#0E204E]
              after:absolute after:-left-52 after:top-1/2 after:-translate-y-1/2
              2xl:w-96 2xl:h-100 2xl:after:w-24 2xl:after:h-56 2xl:after:-left-24
              ">
            <Image src={DomainCard2} alt="" />
          </div>
        </Zoom>
        <TagList tags={TAGS.slice(3)} />
      </div>
    </section>
  )
}
