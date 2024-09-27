import React, { useEffect, useState } from 'react'
import MessiPS from './IMG/MessiPS.jpg'

export const Paris = () => {

  const [parisdisplay, setparisdisplay] = useState(false)

  useEffect(() => {
    const handlescroll = () => {
      const Position = window.scrollY

      if(Position > 1340){
        setparisdisplay(true);
      }else{
        setparisdisplay(false)
      }
    }

    window.addEventListener("scroll", handlescroll)
  }, [])
  return (
    <div className='Paris'>
      
      <div className='Paris-wrapper'>

        <div><h1>2. Paris Saint-Germain ( PSG )</h1></div>

        <div className={`Paris-img ${parisdisplay ? "Paris-img-display" : ""}`}>
          <img src={MessiPS} alt='MessiPs'/>
        </div>

        <div className='Paris-detail'>
          <p>In 2021, Messi moved from Barcelona to Paris Saint-Germain (PSG) after Barcelona was unable to renew his contract due to the club's financial issues. Messi played in Ligue 1 and helped PSG achieve success in various competitions.</p>
        </div>
      </div>
    
    </div>
  )
}

