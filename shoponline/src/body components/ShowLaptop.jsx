import React from 'react'

const ShowLaptop = ({laptop}) => {
  return (
    <div className='flex flex-col  bg-white h-96 w-80 p-5 rounded-xl'>
    <div className=''>
      <img className='h-64 rounded-xl' src={laptop.img} alt={laptop.name}/>
    </div>
    <div className='mt-6'>
        <h3>{laptop.companyname}</h3>
        <h2>{laptop.name}</h2>
        <h2>{laptop.price}</h2>
    </div>
    </div>
  )
}

export default ShowLaptop
