import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between bg-white h-14 items-center">

      {/* bar icon and topic of the shop */}
      <div className="text-2xl ml-3 md:hidden">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div>
        <h1 className="font-semibold text-2xl">ShopOnline</h1>
      </div>

      {/* different topics for navbar */}
      <div className="hidden md:block">
        <ul>
          <Link to="/" className="mx-2">
            Home
          </Link>
          <Link to="/types" className="mx-2">
            Shop
          </Link>
          <Link to="/brands" className="mx-2">
            Brands
          </Link>
          <Link to="/addtocart" className="mx-2">
            Addtocart
          </Link>
        </ul>
      </div>

      {/* signup and login component */}
      <div className="hidden md:block">
        <Link to="/signup" className="mx-2">
          Singup
        </Link>
        <Link to="/login" className="mx-2">
          Login
        </Link>
      </div>

    {/* search and add to cart icon */}
      <div>
        
      </div>

    </header>
  );
};

export default Navbar;
