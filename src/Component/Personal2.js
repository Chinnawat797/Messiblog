import React from 'react'
import Messiperson from '../IMG/Messiperson.jpg'
import useAOS from './useAOS';

export const Personal2 = () => {

  useAOS();

  return (
    <div className='Personal2' id='Personal'>

        <div className='Personal-wrapper'>

          <div className="Personal-img" data-aos="fade-right" data-aos-duration="1200">
            <img src={Messiperson} alt='Messiperson'/>
          </div>

          <div className="Personal-detail" data-aos="fade-left" data-aos-duration="1200">
            <p>Full Name: Lionel Andrés Messi Cuccittini</p>
            <p>Birth date: June 24, 1987</p>
            <p>Place of birth: Rosario, Santa Fe, Argentina</p>
            <p>Nationality: Argentine</p>
            <p>Height: 1.70 meters (5 feet 7 inches)</p>
            <p>Position: Forward, Attacking Midfielder</p>
            <p>Current club (2023): Inter Miami (Inter Miami)</p>
            <p>Shirt numbers: 10 (international team), 30 (Inter Miami)</p>
        </div>


        </div>
    </div>
  )
}
