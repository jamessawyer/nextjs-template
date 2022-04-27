import ImageCarousel from '../components/ImageCarousel'
import ApplyIntro from '../components/ApplyIntro'
import Domain from '../components/Domain'
import News from '../components/News'

export default function Home() {
  return (
    <>
      <ImageCarousel />
      <ApplyIntro />
      <Domain />
      <News />
      <div className="h-[100vh] w-full bg-orange-400" />
      <div id="scholar" className="h-[100vh] w-full bg-green-400" />
    </>
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
