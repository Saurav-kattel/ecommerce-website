import React, { useState,useEffect } from 'react'

const ShowLaptop = ({laptop}) => {
  const [imageurl,setimageurl]=useState('');

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


  return (
    <div className='flex flex-col mt-4 bg-white h-96 w-80 p-5 rounded-xl'>
    <div className=''>
      <img className='h-64 rounded-xl' src={imageurl} alt={laptop.name}/>
    </div>
    <div className='mt-6'>
        <h2>{laptop.name}</h2>
        <h2>{laptop.price}</h2>
    </div>
    </div>
  )
}

export default ShowLaptop
