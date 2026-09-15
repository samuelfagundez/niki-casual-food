import Seo from '../components/Seo'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
