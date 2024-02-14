import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { openlaptop } from '../../features/Laptopslice';
import { useNavigate } from 'react-router-dom';

const ShowLaptop = ({laptop}) => {
  const [imageurl,setimageurl]=useState('');
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Construct image URL from backend endpoint and image path
        const imageurl = `http://localhost:5000/${laptop.img}`;
        const response = await fetch(imageurl);

        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        // Set image URL if response is okay
        setimageurl(imageurl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
    fetchImage();
  }, [laptop.img]);

const handleopen=(e)=>{
  e.preventDefault()
  dispatch(openlaptop(laptop));
  navigate('/laptopinsider');
}

  return (
    <div className='flex flex-col mt-4 bg-white h-96 w-80 p-5 rounded-xl'
    onClick={handleopen}>
    <div>
      <img className='h-64 rounded-xl' src={imageurl} alt={laptop.name}/>
    </div>
    <div className='mt-6'>
        <h2>{laptop.name}</h2>
        <h2 className='font-semibold'>RS.{laptop.price}</h2>
    </div>
    </div>
  )
}

export default ShowLaptop
