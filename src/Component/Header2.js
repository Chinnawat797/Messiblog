import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import useAOS from './useAOS';

export const Header2 = () => {

  const [isopen, setisopen] = useState(false);

  const toggleham = () =>{
    setisopen(!isopen);
  }
   
  
  useAOS();
  return (
    <div className='Header' data-aos="fade-down">
        <div className='Header-wrapper'>

          <div className='Header-Logo'>
            <h1>Lionel</h1>
          </div>

          <ul className={`Header-link ${isopen ? "ullink" : ""}`}>
            <a href='#Home'><li>Home</li></a>
            <a href='#Personal'><li>Personal</li></a>
            <a href='#Success'><li>Success</li></a>
            <a href='#Nation'><li>National team</li></a>
            <a href='#Life'><li>Current life</li></a>
            <a href='#Info'><li>Info</li></a>
          </ul>

          <div className='Ham' onClick={toggleham}>{isopen ? 'X' : <FiAlignJustify/>}</div>

        </div>
    </div>
  )
}
