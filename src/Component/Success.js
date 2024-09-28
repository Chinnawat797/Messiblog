import React from 'react'
import SuccessMessi from '../IMG/SuccessMessi.jpg'
import useAOS from './useAOS'
export const Success = () => {

  useAOS();
  return (
    <div className='Success' id='Success'>

      <div className='Success-wrapper'>

        <div className="Success-detail" data-aos="fade-right" data-aos-duration="800">
          <h1>Achievements and Awards</h1>
          <p>Messi has won numerous awards throughout his football career</p>
          <li>Ballon d'Or: 7 times (a record)</li>
          <li>La Liga Champion: 10 times with Barcelona</li>
          <li>UEFA Champions League Champion: 4 times</li>
          <li>FIFA World Cup Champion: 1 time (2022)</li>
          <li>Copa América Champion: 1 time (2021)</li>
          <li>Olympic Gold Medal: 1 time (2008)</li>
        </div>

        <div className="Success-img" data-aos="fade-left" data-aos-duration="800">
          <img src={SuccessMessi} alt='SuccessMessi'/>
        </div>
      </div>

    </div>
  )
}

<ul>

</ul>
