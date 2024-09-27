import React, { useEffect, useState } from 'react'
import Messination from '../IMG/Messination.jpg'
export const National = () => {
  const [isvisible, setisvisible] = useState(false)

  useEffect(() => {
    const handlescoll = () => {
      const Position = window.scrollY
      if(Position > 2580){
        setisvisible(true)
      }else{
        setisvisible(false)
      }
    }

    window.addEventListener("scroll", handlescoll)
  }, [])

  return (
    <div className='National' id='Nation'>

      <div className='National-wrapper'>

        <div className={`National-img ${isvisible ? "National-img-display" : ""}`}>
          <img src={Messination} alt='Messination'/>
        </div>

        <div className={`National-detail ${isvisible ? "National-detail-display" : ""}`}>
          <h1>International Career</h1>
          <p>Messi has played for the Argentina national team since a young age. He has served as captain and led Argentina to several major victories, including:</p>
          <li>The 2008 Olympics, where he won a gold medal.</li>
          <li>The 2021 Copa América, where Messi helped Argentina win the title after a long wait.</li>
          <li>The 2022 FIFA World Cup, where Messi led the Argentina national team to win the World Cup, marking the pinnacle of his international career.</li>
        </div>

      </div>

    </div>
  )
}


