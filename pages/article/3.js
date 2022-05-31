import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ArticleLayout from '@/components/ArticleLayout'
import Banner3 from '../../public/images/home/banner-3.png'
import Article3ACN from '../../public/images/article/article3-a-cn.png'
import Article3Formula1 from '../../public/images/article/article3-formula-1.png'
import Article3Formula2 from '../../public/images/article/article3-formula-2.png'
import Article3Formula3 from '../../public/images/article/article3-formula-3.png'
import Article3Formula4 from '../../public/images/article/article3-formula-4.png'
import Article3Formula5 from '../../public/images/article/article3-formula-5.png'
import Article3Formula6 from '../../public/images/article/article3-formula-6.png'

const MODEL_IMAGE = {
  zh: Article3ACN,
  en: Article3ACN,
  jp: Article3ACN,
}

export default function BannerArticle3() {
  const t = useTranslations('Article3')
  const { locale: currentLocal } = useRouter()

  return (
    <ArticleLayout>
      <section>
        <div className="relative h-139 w-full overflow-hidden sm:h-36">
          <Image src={Banner3} layout="fill" alt="" />
        </div>
        <article
          className="
          max-w-5xl mt-24 pb-28 mx-auto
          sm:px-8 sm:mt-8
        ">
          <h1 className="article-heading">{t('heading')}</h1>
          <p className="article-p">{t('p1')}</p>
          <p className="article-p">{t('p2')}</p>
          <p className="article-p">{t('p3')}</p>

          {/* 算法简介 */}
          <h2 className="article-header-main">{t('header-main-1')}</h2>
          <h3 className="article-header-sub my-4">{t('header-sub-1')}</h3>
          <div
            className="
            relative w-[668px] h-[494px] mt-8 mb-10 mx-auto
            sm:w-full sm:h-auto
          ">
            <Image src={MODEL_IMAGE[currentLocal]} alt="" />
          </div>
          <p className="article-p">{t('p4')}</p>
          <p className="article-p">{t('p5')}</p>
          <div className="article-p" dangerouslySetInnerHTML={{ __html: t.raw('p6') }} />
          <div className="relative mt-8 mb-10 mx-auto">
            <Image src={Article3Formula1} alt="" />
          </div>
          <div className="article-p" dangerouslySetInnerHTML={{ __html: t.raw('p7') }} />
          <div className="relative mt-8 mb-10 mx-auto">
            <Image src={Article3Formula2} alt="" />
          </div>
          <p className="article-p">{t('p8')}</p>

          {/* 距离向量 */}
          <h2 className="article-header-main mt-12">{t('header-main-2')}</h2>
          <div className="article-p" dangerouslySetInnerHTML={{ __html: t.raw('p9') }} />
          <div className="relative mt-8 mb-10 mx-auto">
            <Image src={Article3Formula3} alt="" />
          </div>
          <p className="article-p">{t('p10')}</p>
          <div className="relative mt-8 mb-10 mx-auto">
            <Image src={Article3Formula4} alt="" />
          </div>

          {/* 文本分类器 */}
          <h2 className="article-header-main mt-12">{t('header-main-3')}</h2>
          <div className="article-p" dangerouslySetInnerHTML={{ __html: t.raw('p11') }} />
          <div
            className="
            relative flex flex-col gap-y-4 w-[651px] h-[213px] mt-8 mb-10 mx-auto
            sm:w-full sm:h-auto
            ">
            <Image src={Article3Formula5} alt="" />
            <p className="text-lg text-[#1a487f] text-center">{t('caption')}</p>
          </div>
          <div className="article-p" dangerouslySetInnerHTML={{ __html: t.raw('p12') }} />
          <div className="relative mt-8 mb-10 mx-auto">
            <Image src={Article3Formula6} alt="" />
          </div>
          <p className="article-p">{t('p14')}</p>
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
