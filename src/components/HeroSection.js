import React from 'react'
import'./HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='F:\leafcraft\videos/video-2/VLC media file (.mp4) (.mp4)' autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        
        <button className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large' 
        >GET STARTED</button>
        <button
         className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large' >
            WATCH TRAILER<i className='far fa-play-circle'/>
        </button>
        
        </div>
      
    
  )
}

export default HeroSection
