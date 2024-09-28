import React from 'react'
import barz1 from '../Seccomponent/IMG/barz1.jpg'
import useAOS from '../useAOS'

export const Bar = () => {

  useAOS();
  return (
    <div className=' Barcelona'>
      <div className='Barcelona-wrapper'>

         <div data-aos="fade-up"><h1>1. Barcelona</h1></div>
        <div className="Barcelona-img" data-aos="fade-up">
            <img src={barz1} alt='barz1'/>
        </div>

        <div className='Barcelona-detail' data-aos="fade-up"> 
            <p>Messi began playing for Barcelona's youth team at La Masia, the club's renowned football academy. In 2003, Messi made his debut for Barcelona's first team at the age of just 16, and by 2004, he had fully established himself as a part of the first team.</p>
        </div>

      </div>
    </div>
  )
}
