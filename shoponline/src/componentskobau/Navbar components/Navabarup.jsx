import React from 'react'
import { Link } from 'react-router-dom';

// import Dropdown from "./Dropdown"

const Navabarup = () => {
  return (
    <div className='flex h-8 bg-black text-white items-center justify-between'>
    {/* <Dropdown/> */}
      {/* signup and login component */}
      <div className=" text-white block text-xs mr-[10px] md:mr-[25px]">
        <Link to="/signup" className="mx-2">
          Singup
        </Link>
        <Link to="/login" className="mx-2 mr-5">
          Login
        </Link>
      </div>

    </div>
  )
}

export default Navabarup
