import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    
    <div className='hero'>
      <div className='heroLeft'>
        <div className='heroLeftTitle'>
          <span className='heroLeftTitleHi'>Hi, my name is</span>
          <span className='heroLeftTitleName'>Kavindu Janith</span>
          <span className='heroLeftTitleDesc'>I build things for the web</span>
        </div>
        <div className='heroLeftDesc'>
          I'm a software engineer based in Sri Lanka specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
        </div>
        <div className='heroLeftButton'>
          <a href='#projects'>
            <button>See my work</button>
          </a>
        </div>
      </div>
      <div className='heroRight'>
        <img src='assets/hero.png' alt='hero' className='heroRightImg' />
      </div>
    </div>
  )
}

export default Hero
