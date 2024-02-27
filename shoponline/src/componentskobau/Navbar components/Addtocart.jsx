import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cart } from "../../features/Laptopslice";
import Navbar from "./Navbar";
import Navabarup from "./Navabarup";

const Addtocart = () => {
  const selector = useSelector(cart);
  console.log(selector);

  const [data, setdata] = useState([]);
  const [img, setimg] = useState(null);
  useEffect(() => {
    if (selector) {
      const fetchdata = async () => {
        try {
          const url = await fetch(`http://localhost:5000/api/admin/laptop/${selector}`);
          const dataresponse = await url.json();
          setdata((previousitem)=>[...previousitem,dataresponse]);

        } catch (error) {
          console.error("Error fetching:", error);
        }
      };
      fetchdata();
    }
  }, [selector]);
  console.log(data && data.img);

  useEffect(() => {
    if (data && data.img) {
      const fetchimg = async () => {
        try {
          // Construct image URL from backend endpoint and image path
          const imageUrl = `http://localhost:5000/${data && data.img}`;
          // fetching so that we can see the image  in our show page
          const imgresponse = await fetch(imageUrl);
          setimg(imageUrl);
        } catch (error) {
          console.error("Error fetching:", error);
        }
      };
      fetchimg();
    }
  }, [data]);

  // Check if data is null before accessing its properties
  if (!data) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <>
      <Navabarup />
      <Navbar />
      <h1 className="flex justify-center mt-16 text-3xl font">Cart</h1>
      <section className="h-screen flex flex-row">
        <div className="w-32 h-36 bg-white">
          {data.map((datas,index)=>{
            return <h1 key={index}>{datas.name}</h1>
          })}
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Addtocart;
