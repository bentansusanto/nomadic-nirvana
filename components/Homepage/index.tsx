import React from 'react'
import AboutSection from './sectionHome/AboutSection'
import DestinationSection from './sectionHome/DestinationSection'
import HeroSection from './sectionHome/HeroSection'
import ServiceSection from './sectionHome/ServiceSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <ServiceSection/>
        <DestinationSection/>
    </div>
  )
}

export default Home