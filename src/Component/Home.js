import React from 'react'
import LionelBG2 from "../IMG/LionelBG2.jpg"

export const Home = () => {

    window.onload = function(){
        const Imges = document.querySelector('.Fade-in')
        Imges.classList.add('visible')

        const Text = document.querySelector('.Home-Detail')
        Text.classList.add('Scolltext')
    }
  return (
    <div className='Home' id='Home'>
        <img src={LionelBG2} alt='LionelBG2' className='Fade-in'/>

        <div className='Home-wrapper'>
        <div className='Home-Detail'>
            <h1>Introduction</h1>
            <p>This website is created as a blog for displaying information. Lionel Massi from the past to the present. This blog is not intended. to violate in any way But it was created to publicize the most successful people in their careers.</p>
        </div>
        </div>
    </div>
  )
}
