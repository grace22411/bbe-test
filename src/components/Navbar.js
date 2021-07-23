import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/BBe Logo.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-between h-16 items-center relative shadow-sm " role="navigation">
      <Link to="/" className="pl-8">
        {" "}
        <img src={logo} alt="Bbe logo" />
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="pr-8  md:block hidden">
          <Link to="/" className="p-4  text-red">Bbe</Link>
          <Link to="/" className="p-4 ">Join Waitlist</Link>
          <Link to="/shop" className="p-4 ">Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
