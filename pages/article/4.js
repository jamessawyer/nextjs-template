import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ArticleLayout from '@/components/ArticleLayout'
import Banner4 from '../../public/images/home/banner-4.png'
import Article4A from '../../public/images/article/article4-a.png'
import Article4BCN from '../../public/images/article/article4-b-cn.png'
import Article4BEN from '../../public/images/article/article4-b-en.jpg'
import Article4BJP from '../../public/images/article/article4-b-jp.jpg'
import Article4C from '../../public/images/article/article4-c.png'
import Article4D from '../../public/images/article/article4-d.png'
import Article4E from '../../public/images/article/article4-e.png'
import Article4FCN from '../../public/images/article/article4-f-cn.jpg'
import Article4FEN from '../../public/images/article/article4-f-en.jpg'
import Article4FJP from '../../public/images/article/article4-f-jp.jpg'

const LAYER_IMAGE = {
  zh: Article4BCN,
  en: Article4BEN,
  jp: Article4BJP,
}
const PACKAGE_RATE = {
  zh: Article4FCN,
  en: Article4FEN,
  jp: Article4FJP,
}

export default function BannerArticle4() {
  const t = useTranslations('Article4')
  const { locale: currentLocal } = useRouter()

  return (
    <ArticleLayout>
      <section>
        <div className="relative h-139 w-full overflow-hidden sm:h-36">
          <Image src={Banner4} layout="fill" alt="" />
        </div>
        <article
          className="
          max-w-5xl mt-24 pb-28 mx-auto
          sm:px-8 sm:pb-14 sm:mt-8
        ">
          <h1 className="article-heading">{t('heading-1')}</h1>
          <div
            className="
            relative w-[540px] h-[167px] mt-8 mb-10 
            sm:w-full sm:h-auto sm:mb-4 sm:mt-4
          ">
            <Image src={Article4A} alt="" />
          </div>
          <p className="article-p">{t('p1')}</p>
          <p className="article-p">{t('p2')}</p>
          <p className="article-p">{t('p3')}</p>

          {/* 主要任务 */}
          <h2 className="article-header-main">{t('header-main-1')}</h2>
          <p className="article-p">{t('p4')}</p>

          {/* 算法简介 */}
          <h2 className="article-header-main">{t('header-main-2')}</h2>
          <h3 className="text-[#DD4247] mt-7">{t('header-sub-1')}</h3>
          <p className="article-p">{t('p5')}</p>
          <h3 className="text-[#DD4247]">{t('header-sub-2')}</h3>
          <p className="article-p">{t('p6')}</p>
          <div
            className="
            relative w-[365px] mt-8 mb-10 mx-auto
            sm:w-full
          ">
            <Image src={LAYER_IMAGE[currentLocal]} alt="" />
          </div>
          <h3 className="text-[#DD4247]">{t('header-sub-3')}</h3>
          <p className="article-p">{t('p7')}</p>
          <div
            className="
            relative w-[298px] mt-8 mb-10 mx-auto
            sm:w-full
            ">
            <Image src={Article4C} alt="" />
          </div>
          <p className="article-p">{t('p8')}</p>
          <h3 className="text-[#DD4247]">{t('header-sub-4')}</h3>
          <p className="article-p indent-5">{t('p9')}</p>
          <div
            className="
            relative w-[334px] mt-8 mx-auto
            sm:w-full
            ">
            <Image src={Article4D} alt="" />
          </div>
          <p className="article-p">{t('p10')}</p>
          <p className="article-p indent-5">{t('p11')}</p>
          <h3 className="text-[#DD4247]">{t('header-sub-5')}</h3>
          <p className="article-p indent-5">{t('p12')}</p>
          <div
            className="
            relative w-[241px] mt-8 mb-10 mx-auto
            sm:w-full
            ">
            <Image src={Article4E} alt="" />
          </div>

          {/* RFM */}
          <h2 className="article-header-main">{t('header-main-3')}</h2>
          <p className="article-p mt-7 mb-14">{t('p13')}</p>

          <h2 className="article-header-main">{t('header-main-4')}</h2>
          <p className="article-p">{t('p14')}</p>
          <p className="article-p mt-[-0.75rem] mb-[0.75rem]">{t('p18')}</p>
          <p className="article-p mt-[0.75rem]">{t('p19')}</p>

          {/* Island King 	测试方案及指标 */}
          <h1 className="article-heading">{t('heading-2')}</h1>
          <p className="article-p">{t('p15')}</p>
          <p className="article-p">{t('p16')}</p>
          <div
            className="
            relative w-[620px] mt-8 mb-10 mx-auto
            sm:w-full
            ">
            <Image src={PACKAGE_RATE[currentLocal]} alt="" />
          </div>
          <p className="article-p">{t('p17')}</p>
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
