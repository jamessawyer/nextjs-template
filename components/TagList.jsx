import { memo } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Zoom } from 'react-awesome-reveal'

function Tag({ src, title, width, height, delay }) {
  return (
    <Zoom delay={delay * 300}>
      <div className="flex flex-col items-center gap-y-12">
        <div className={`relative ${width} ${height}`}>
          <Image src={src} alt="" />
        </div>
        <p className="text-lg font-normal text-[#263238]">{title}</p>
      </div>
    </Zoom>
  )
}

const MemoedTag = memo(Tag)

function TagList({ tags }) {
  const t = useTranslations('Domain')
  return (
    <div className="flex grow flex-row justify-between">
      {tags.map((item, idx) => (
        <MemoedTag
          delay={idx}
          key={item.id}
          src={item.src}
          title={t(item.tag)}
          height={item.height}
          width={item.width}
        />
      ))}
    </div>
  )
}
export default memo(TagList)
