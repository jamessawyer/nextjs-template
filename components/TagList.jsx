import { useTranslations } from 'next-intl'
import Image from 'next/image'

function Tag({ src, title, width, height }) {
  return (
    <div className="flex flex-col items-center gap-y-12">
      <div className={`relative ${width} ${height}`}>
        <Image src={src} alt="" />
      </div>
      <p className="font-normal text-lg text-[#263238]">{title}</p>
    </div>
  )
}

export default function TagList({ tags }) {
  const t = useTranslations('Domain')
  return (
    <div className="flex flex-row gap-x-44">
      {tags.map((item) => (
        <Tag
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
