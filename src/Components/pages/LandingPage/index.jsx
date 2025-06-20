import React from 'react'
import Header from './Header'
import Hero from './HeroSection'
import MarketSection from './MarketSection'
import WhyTradeSection from './WhyTradeSection'
import FaqSection from './FaqSection'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <MarketSection />
        <WhyTradeSection />
        <FaqSection />
        <Footer />
    </div>
  )
}

export default LandingPage