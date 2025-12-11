import React from 'react'
import Hero from '../Components/Hero'
import ServicesSection from '../Components/ServicesSection'
import TechShowcase from '../Components/TechShowcase'
import FeaturesSection from '../Components/FeaturesSection'
import AllServices from '../Components/AllServices'

const Home = () => {
  return (
    <div>
        <Hero/>
        <ServicesSection/>
        <TechShowcase/>
        <FeaturesSection/>
        <AllServices/>
    </div>
  )
}

export default Home