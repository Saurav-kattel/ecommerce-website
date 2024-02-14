import React from 'react'
import { useSelector } from 'react-redux'

const Iteminsider = () => {
  const selector=useSelector(state=>state.laptopslice.initialstate)
  console.log(selector)
  return (
    <div className='h-screen bg-slate-100 flex flex-row items-center justify-center'>
    <div className='bg-white h-5/6 w-1/2 mr-10 ml-20'>
      tyhisd efref
    </div>
    <div className='bg-white  h-5/6 w-1/2 mr-20'>
      
    </div>
    </div>
  )
}

export default Iteminsider
