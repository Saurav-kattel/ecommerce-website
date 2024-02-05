import React from 'react'
import { useState } from 'react';


const Admin = () => {
  const [fomvalue,setfomvalue]=useState({
    type:"",
    brand:"",
    title:"",
    desc:"",
    price:"",
    img:""
  })
  const handleonChange=(e)=>{
    setfomvalue({ ...fomvalue, [e.target.name]: e.target.value });
  }
  const handleFileChange = (e) => {
    setfomvalue({ ...fomvalue, img: e.target.files[0] });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", fomvalue);
  }

  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen' >
      <form className='flex flex-col  w-96 '>
        <label htmlFor="name">Product-Name</label>
        <input type='text' id='name' name='name' onChange={handleonChange}/>
        <label htmlFor='type'>Type</label>
        <input type='text' id='type' name='type' onChange={handleonChange} />
        <label htmlFor='price'>Price</label>
        <input type='text' id='price' name='pice' onChange={handleonChange}/>
        <label htmlFor="brand">brand</label>
        <input type='text' id='brand' name='brand' onChange={handleonChange} />
        
      </form>
      <form className='mt-10' action="/upload-img" method="post" encType="multipart/form-data">
      <label htmlFor="img">Img</label>
        <input type='file' id='img' name='img' onChange={handleFileChange} />
        <button className='mt-5 bg-black text-white p-1 w-48' type='submit' onClick={handleSubmit}>Submit</button>
      </form>

    </div>

    </>
  )
}

export default Admin
