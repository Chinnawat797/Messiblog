import React, { useEffect, useState } from 'react'
import barz1 from '../Seccomponent/IMG/barz1.jpg'

export const Bar = () => {
  const [bardisplay, setbardisplay] = useState(false)

useEffect(() => {
  const handlescroll = () => {
    const Position = window.scrollY

    if(Position > 960){
      setbardisplay(true)
    }else{
      setbardisplay(false)
    }
  }

  window.addEventListener('scroll', handlescroll)
}, [])

  return (
    <div className=' Barcelona'>
      <div className='Barcelona-wrapper'>

         <div><h1>1. Barcelona</h1></div>
        <div className={`Barcelona-img ${bardisplay ? "Barcelona-img-display" : ""}`}>
            <img src={barz1} alt='barz1'/>
        </div>

        <div className='Barcelona-detail'> 
            <p>Messi began playing for Barcelona's youth team at La Masia, the club's renowned football academy. In 2003, Messi made his debut for Barcelona's first team at the age of just 16, and by 2004, he had fully established himself as a part of the first team.</p>
        </div>

      </div>
    </div>
  )
}
