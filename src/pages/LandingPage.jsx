import React from 'react'
import Hero from '../components/Hero'
import Analytics from '../components/Analytics'
import Cards from '../components/Cards'
import NewsLetter from '../components/NewsLetter'

const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <Analytics/>
        <NewsLetter/>
        <Cards/>  
    </div>
  )
}

export default LandingPage