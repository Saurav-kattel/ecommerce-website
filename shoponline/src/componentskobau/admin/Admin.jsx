import React from "react";
import { useState } from "react";

const Admin = () => {
  const [fomvalue, setfomvalue] = useState({
    name: "",
    type: "",
    brand: "",
    desc: "",
    price: "",
    img: null, // Store the selected image file
  });
  const handleonChange = (e) => {
    setfomvalue({ ...fomvalue, [e.target.name]: e.target.value });
  };

  
  const handleFileChange = (e) => {
    setfomvalue({ ...fomvalue, img: e.target.files[0] }); // Capture the selected image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    const response = await fetch("http://localhost:5000/api/admin/upload-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, type, brand, desc, price }),
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <form
          className="flex flex-col  w-96 "
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}>
          <label htmlFor="name">Product-Name</label>
          <input type="text" id="name" name="name" onChange={handleonChange} />
          <label htmlFor="type">Type</label>
          <input type="text" id="type" name="type" onChange={handleonChange} />
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" onChange={handleonChange} />
          <label htmlFor="brand">brand</label>
          <input type="text" id="brand" name="brand" onChange={handleonChange} />
          <label htmlFor="desc">description</label>
          <input type="text" id="desc" name="desc" onChange={handleonChange} />
        </form>
        <form className="mt-10" action="api/admin/upload-img" method="post" encType="multipart/form-data">
          <label htmlFor="img">Img</label>
          <input type="file" id="img" name="img" />
          <button className="mt-5 bg-black text-white p-1 w-48" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
