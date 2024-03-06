import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ShowLaptop from './ShowLaptop';
import { fetchlaptop,laptopError,laptopLoading,laptopdata } from '../../features/Laptopslice';
 
const LaptopPage = () => {
  // dipatch to send data from conponent to slice
const dispatch=useDispatch();
// useselctor to get data from slice
const  laptoploadings=useSelector(laptopLoading);
const laptperror=useSelector(laptopError)
// get the filtered data i.e laptop from slice
const laptopdta=useSelector(laptopdata)

useEffect(()=>{
  // useeffect to the fetch, only load when dispatch has changed
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
        </div>

    <div className='md:grid grid-cols-4 grid-rows-1 gap-2 mt-1'>
      {/* loop over the filtred data up to 4  */}
    {laptopdta && laptopdta.map((laptop,index)=>{
      return  <ShowLaptop key={index} laptop={laptop}/>;
    })}
</div></div>
  )
}

export default  LaptopPage;