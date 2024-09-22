import React, { useEffect, useState } from 'react'
import MessiMM from './IMG/MessiMM.jpg'
export const Miami = () => {

  const [miamidisplay, setmiamidisplay] = useState(false)

  useEffect(() => {
    
    const handlescroll = () => {
      const Position = window.scrollY
      if(Position > 2520){
        setmiamidisplay(true)
      }else{
        setmiamidisplay(false)
      }
    }

    window.addEventListener("scroll", handlescroll)
  }, [])
  return (

   
    <div className='Miami'>

      <div className='Miami-wrapper'>

        <div><h1>3. Inter Miami</h1></div>
        <div className={`Miami-img ${miamidisplay ? 'Miami-img-display' : ""}`}>
          <img src={MessiMM} alt='MessiMM'/>
        </div>

        <div className='Miami-detail'>
        <p>In 2023, Messi joined Inter Miami, a club in Major League Soccer (MLS) in the United States. He was warmly welcomed by fans in the U.S. and continues to be a highly influential player in the world of football.</p>
        </div>
        
      </div>

     </div>
   
  )
}

