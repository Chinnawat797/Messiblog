import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

export const Info = () => {

  const [infodisplay, setinfodisplay] = useState(false)

  useEffect(() => {
    const handlescr = () => {
      const Position = window.scrollY
      if(Position > 3240){
        setinfodisplay(true)
      }else{
        setinfodisplay(false)
      }
    }

    window.addEventListener('scroll', handlescr)
  }, [])
  return (
    <div className='Info' id='Info'>
      <div className={`Info-wrapper ${infodisplay ? "Info-wrapper-display" : ""}`}>
        <div>
          <p>Lionel Messi is one of the greatest footballers 
            in the history of the sport. With
             achievements 
             at both club and international levels, his all-around abilit
             ies and humility have made him loved and respected by people all ove
             r the world.</p>
          </div>
        <div className='Info-contact'>
            <p>Contact US</p>
            <span><FaGithub /></span>
            <span><CiLinkedin/></span>
            <span><FaFacebookF/></span>
            <span><TiSocialTwitter/></span>
        </div>
        </div>
    </div>
  )
}
