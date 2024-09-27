import React from 'react'
import LionelBG2 from "../IMG/LionelBG2.jpg"

export const Home = () => {

  return (
    <div className='Home' id='Home'>

      <div className='Home-bg'>
        <img src={LionelBG2} alt='LionelBG2'/>
      </div>
        
        <div className='Home-wrapper'>
        <div className='Home-Detail'>
            <h1>Introduction</h1>
            <p>This website is created as a blog for displaying information. Lionel Massi from the past to the present. This blog is not intended. to violate in any way But it was created to publicize the most successful people in their careers.</p>
        </div>
        </div>
    </div>
  )
}
