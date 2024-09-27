import React, { useEffect, useState } from 'react'
import Messidetail1 from '../IMG/Messidetail1.jpg'
import Messidetail2 from '../IMG/Messidetail2.jpg'
export const Life = () => {

  const [lifedisplay, setlifedisplay] = useState(false);

  useEffect(() => {
    const handlescr = () => {
      const Position = window.scrollY
      if(Position > 2890){
        setlifedisplay(true)
      }else{
        setlifedisplay(false)
      }
    }

    window.addEventListener('scroll', handlescr)
  }, [])
  return (
    <div className='Life' id='Life'>

      <div className='Life-wrapper'>

        <div className={`Life-detail1 ${lifedisplay ? "Life-detail1-display" : ""}`}>
          <h1>Personal Life</h1>
          <p>Messi is married to Antonella Roccuzzo, his childhood friend. The couple has three sons together: Thiago, Mateo, and Ciro. Messi’s family plays a significant role in his life, and he often expresses his love and connection to them through social media.</p>
          <div className='Life-img'>
            <img src={Messidetail1} alt='Messidetail1'/>
          </div>
         </div>

         <div className={`Life-detail2 ${lifedisplay ? "Life-detail2-display" : ""}`}>
          <h1>Impact on Football</h1>
          <p>Lionel Messi is not only a highly skilled player but also an inspiration to young footballers around the world. His humility and sportsmanship have made him beloved by fans and fellow players alike. Messi has created a lasting legacy in football and stands as a symbol of success and hard work.</p>
          <div className='Life-img'>
            <img src={Messidetail2} alt='Messidetail2'/>
          </div>
         </div>
      </div>
      

     </div>
    
  )
}
