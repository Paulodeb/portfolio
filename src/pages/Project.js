import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg/HeroImg2'
import Navbar from '../components/Navbar/Navbar'
import Work from '../components/WorkCard/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='PROJECTS.' text='Some of my most recent works'/>
      <Work/>
      <Footer />
    </div>
  )
}

export default Project