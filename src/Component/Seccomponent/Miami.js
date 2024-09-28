import React from 'react'
import MessiMM from './IMG/MessiMM.jpg'
import useAOS from '../useAOS'
export const Miami = () => {

  useAOS();

  return (

   
    <div className='Miami'>

      <div className='Miami-wrapper'>

        <div><h1>3. Inter Miami</h1></div>
        <div className="Miami-img"  data-aos="fade-up" data-aos-duration="1200">
          <img src={MessiMM} alt='MessiMM'/>
        </div>

        <div className='Miami-detail'  data-aos="fade-up" data-aos-duration="1200">
        <p>In 2023, Messi joined Inter Miami, a club in Major League Soccer (MLS) in the United States. He was warmly welcomed by fans in the U.S. and continues to be a highly influential player in the world of football.</p>
        </div>
        
      </div>

     </div>
   
  )
}

