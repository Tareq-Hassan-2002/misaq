import Header from '../components/landing/Header/Header'
import Hero from '../components/landing/Hero/Hero'
import Problem from '../components/landing/Problem/Problem'
import Method from '../components/landing/Method/Method'
import HowItWorks from '../components/landing/HowItWorks/HowItWorks'
import Hints from '../components/landing/Hints/Hints'
import CTA from '../components/landing/CTA/CTA'
import Footer from '../components/landing/Footer/Footer'

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Method />
        <HowItWorks />
        <Hints />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage
