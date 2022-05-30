import Footer from './Footer'

export default function ArticleLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
