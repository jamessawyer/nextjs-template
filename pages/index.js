import ImageCarousel from '@/components/ImageCarousel'
import ApplyIntro from '@/components/ApplyIntro'
import Domain from '@/components/Domain'
import News from '@/components/News'
import ScholarCarousel from '@/components/ScholarCarousel'
import PageLayout from '@/components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <ImageCarousel />
      <ApplyIntro />
      <Domain />
      <News />
      <ScholarCarousel />
    </PageLayout>
  )
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/index/${locale}.json`),
        // 注意这里要引入 components 中才能使用
        ...require(`../messages/shared/${locale}.json`),
      },
    },
  }
}
