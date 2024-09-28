import React from 'react'
import LionelBG2 from "../IMG/LionelBG2.jpg"
import useAOS from './useAOS'

export const Home = () => {

  useAOS();

  return (
    <div className='Home' id='Home'>

      <div className='Home-bg'>
        <img src={LionelBG2} alt='LionelBG2'/>
      </div>
        
        <div className='Home-wrapper'>
        <div className='Home-Detail' data-aos="fade-right" data-aos-duration="2000">
            <h1>Introduction</h1>
            <p>This website is created as a blog for displaying information. Lionel Massi from the past to the present. This blog is not intended. to violate in any way But it was created to publicize the most successful people in their careers.</p>
        </div>
        </div>
    </div>
  )
}
