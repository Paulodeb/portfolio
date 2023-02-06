import './HeroImgStyles.css'
import React from 'react'
import IntroImg from '../../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img'
        src={IntroImg} alt='Intro_Image'/>
      </div>
      <div className='content'>
        <p>HI, I'M A FRONT END</p>
        <h1>React Developer.</h1>
        <div>
          <Link to='/project'
          className='btn my-2 mx-1 btn-outline-secondary'>Projects</Link>
          <Link to='/contact'
          className='btn mx-1 btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg