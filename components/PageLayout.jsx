import Footer from './Footer'
import Navigation from './Navigation'

export default function PageLayout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
