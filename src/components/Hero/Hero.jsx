import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroLeft'>
        <h1>Hi! I'm</h1>
        <span>Kavindu Janith</span>
        <br />
        <br />
        <h2><span className='software'>Software</span> <span className='engineer'>Engineer</span></h2>
        <p>As a driven software engineer, I specialize in mobile app development using Flutter and Dart, crafting engaging experiences for Android users. My expertise extends to microservices and distributed systems, ensuring scalable and resilient solutions. Currently, I am enhancing my skills in web development with React, Node.js, and Spring Boot, while embracing DevOps practices.</p>
      </div>
      <div className='heroRight'>
        <img src="public/assets/Leonardo_Phoenix_A_stunningly_surreal_and_vibrantly_cinematic_3.jpg" alt="image" />
      </div>
    </div>
  )
}

export default Hero
