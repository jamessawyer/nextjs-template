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
        <p className="font-normal text-lg text-[#263238]">{title}</p>
      </div>
    </Zoom>
  )
}

export default function TagList({ tags }) {
  const t = useTranslations('Domain')
  return (
    <div className="flex flex-row justify-between grow">
      {tags.map((item, idx) => (
        <Tag
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
