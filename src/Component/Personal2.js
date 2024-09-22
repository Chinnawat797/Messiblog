import React ,{useState, useEffect} from 'react'
import Messiperson from '../IMG/Messiperson.jpg'

export const Personal2 = () => {

    const [isvisible, setisvisible] = useState(false)

    useEffect(() => {
      const handlescoll = () => {
        const Position = window.scrollY
        if(Position > 385){
          setisvisible(true)
        }else{
          setisvisible(false)
        }
      }
  
      window.addEventListener("scroll", handlescoll)
    }, [])
  
  return (
    <div className='Personal2' id='Personal'>

        <div className='Personal-wrapper'>

          <div className={`Personal-img ${isvisible ? 'Personal-img-scr': ""}`}>
            <img src={Messiperson} alt='Messiperson'/>
          </div>

          <div className={`Personal-detail ${isvisible ? 'Personal-detail-scr' : ""}`}>
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
