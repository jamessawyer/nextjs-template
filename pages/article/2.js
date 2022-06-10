import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Banner1 from '../../public/images/home/banner-1.png'
import Article1A from '../../public/images/article/article1-a.png'
import Article1B from '../../public/images/article/article1-b.png'
import Article1C from '../../public/images/article/article1-c.png'
import ArticleLayout from '@/components/ArticleLayout'

export default function BannerArticle1() {
  const t = useTranslations('Article1')

  return (
    <ArticleLayout>
      <section>
        <div className="relative h-139 w-full overflow-hidden">
          <Image src={Banner1} layout="fill" alt="" />
        </div>
        <article className="max-w-5xl mt-24 pb-28 mx-auto">
          <h1 className="article-heading">{t('heading')}</h1>
          <p className="article-p my-7">{t('p1')}</p>
          <div className="relative h-[286px] flex flex-row gap-x-6">
            <Image src={Article1A} alt="" />
            <Image src={Article1B} alt="" />
          </div>
          <p className="article-p my-7">{t('p2')}</p>
          <p className="article-p my-7">{t('p3')}</p>
          <div className="relative w-[850px] h-[249px]">
            <Image src={Article1C} alt="" />
          </div>
          <p className="article-p my-7">{t('p4')}</p>
          <p className="article-p my-7">{t('p5')}</p>
        </article>
      </section>
    </ArticleLayout>
  )
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../../messages/article/${locale}.json`),
        ...require(`../../messages/shared/${locale}.json`),
      },
    },
  }
}
