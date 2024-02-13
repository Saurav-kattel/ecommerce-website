import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ShowLaptop from './ShowLaptop';
import { fetchlaptop,laptopError,laptopLoading,laptopdata } from '../../features/Laptopslice';
 
const  Laptops = () => {
const dispatch=useDispatch();
const  laptoploadings=useSelector(laptopLoading);
const laptperror=useSelector(laptopError)
const laptopdta=useSelector(laptopdata)

useEffect(()=>{
  dispatch(fetchlaptop());
},[dispatch])

if (laptoploadings) {
  return <div>Loading...</div>;
}

if (laptperror) {
  return <div>Error: {laptperror}</div>;
}


  return (
    <div className='ml-10 mt-10 h-'>
        <div className='flex justify-between'>
        <h3 className='font-semibold text-xl'>Laptops</h3>
        <h3 className='mr-12  hover:underline text-blue-800'>View all</h3>
        </div>

    <div className='md:grid grid-cols-4 grid-rows-1 gap-2 mt-1'>
    {/* {
    laptops.map((laptop,index)=>{
        return <ShowLaptop key={index} laptop={laptop}/>;})
    } */}

    {laptopdta && laptopdta.map((laptop,index)=>{
      return  <ShowLaptop key={index} laptop={laptop}/>;
    })}
</div></div>
  )
}

export default Laptops
