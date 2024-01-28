import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

const Navabarup = () => {
  return (
    <div className='flex h-16 bg-black text-white items-center '>
      <button className='text-2xl ml-3'>NPR <span><FontAwesomeIcon icon={faCircleChevronDown} /></span></button>
    </div>
  )
}

export default Navabarup
