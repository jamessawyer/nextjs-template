import ArticleNavigation from './ArticleNavigation'
import Footer from './Footer'

export default function ArticleLayout({ children }) {
  return (
    <>
      <ArticleNavigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
