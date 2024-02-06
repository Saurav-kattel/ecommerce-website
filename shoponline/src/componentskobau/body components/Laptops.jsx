import React from 'react'
import ShowLaptop from './ShowLaptop';
const Laptops = () => {
    const laptops=[{
        img: require("../../pictureskobau/pictures/macbook_air_m1__dxctrdvvxm4i_large.jpg"),
        name: "MacBook Air 13",
        price:"$2099.99"
      },
      {img: require("../../pictureskobau/pictures/macbook_air_m1__dxctrdvvxm4i_large.jpg"),
        name: "Dell XPS 15",
      price: "$1749.99"},
      {img: require("../../pictureskobau/pictures/macbook_air_m1__dxctrdvvxm4i_large.jpg"),
      name: "Dell XPS 15",
    price: "$1749.99"}
];

  return (
    <div className='ml-10 mt-10 h-'>
        <div className='flex justify-between'>
        <h3 className='font-semibold text-xl'>Laptops</h3>
        <h3 className='mr-12  hover:underline text-blue-800'>View all</h3>
        </div>

    <div className='md:grid grid-cols-4 grid-rows-1 gap-2 mt-1'>
    {
    laptops.map((laptop,index)=>{
        return <ShowLaptop key={index} laptop={laptop}/>;})
    }
</div></div>
  )
}

export default Laptops
