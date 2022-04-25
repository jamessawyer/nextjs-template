import Footer from './Footer'
import Navigation from './Navigation'

export default function PageLayout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
