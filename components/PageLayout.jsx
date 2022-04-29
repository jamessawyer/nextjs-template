import Footer from './Footer'
import Navigation from './Navigation'
import ApplyModal from './ApplyModal'

export default function PageLayout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <ApplyModal />
    </>
  )
}
