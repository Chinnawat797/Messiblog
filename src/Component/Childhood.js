import React from 'react'
import useAOS from './useAOS'

export const Childhood = () => {

  useAOS();

  return (
    <div className='Childhood'>
      <div className='Childhood-wrapper'>

        <div className="Childhood-detail" data-aos="fade-down" data-aos-duration="1200">
          <h1>Childhood</h1>
          <p> Lionel Messi was born and raised in the city of Rosario, Argentina. His family was a middle-class family. His father, Jorge Messi, worked in a steel factory, and his mother, Celia Cuccittini, worked in a magnet manufacturing workshop. Messi started playing football at the age of 5 for a local club called Grandoli, where his father was the coach</p>
          <h1>Health Issues and Joining Barcelona</h1>
          <p>When Messi was 11 years old, he was diagnosed with Growth Hormone Deficiency, which affected his normal growth. The treatment was expensive, and Messi's family could not afford the cost of the medical care needed.</p>
        </div>
      </div>
       
    </div>
  )
}
