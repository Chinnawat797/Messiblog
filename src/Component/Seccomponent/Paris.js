import React from 'react'
import MessiPS from './IMG/MessiPS.jpg'
import useAOS from '../useAOS'

export const Paris = () => {

  useAOS();

  return (
    <div className='Paris'>
      
      <div className='Paris-wrapper'>

        <div><h1>2. Paris Saint-Germain ( PSG )</h1></div>

        <div className="Paris-img" data-aos="fade-up" data-aos-duration="1200">
          <img src={MessiPS} alt='MessiPs'/>
        </div>

        <div className='Paris-detail' data-aos="fade-up" data-aos-duration="1200">
          <p>In 2021, Messi moved from Barcelona to Paris Saint-Germain (PSG) after Barcelona was unable to renew his contract due to the club's financial issues. Messi played in Ligue 1 and helped PSG achieve success in various competitions.</p>
        </div>
      </div>
    
    </div>
  )
}

