import React from "react";
import google from "../images/google-2 2.svg";
import apple from "../images/apple.png";
import blackbox from "../images/Blackbox.svg";
import { Link } from "react-router-dom";
import logo from "../images/BBe Logo.svg"
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="font-medium text-center text-sm mt-32 mb-0">
        Coming Soon On:
      </p>
      <div className=" flex justify-center items-center">
        <img src={google} alt="" className="mr-4" />
        <img src={apple} alt="" className="middle mr-4" />
        <img src={blackbox} alt="" />
      </div>

      <div
        className="flex justify-between h-16 items-center px-10 mt-40 relative"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          {" "}
          <img src={logo} alt="Bbe logo" />
        </Link>
        <div className="pr-8  md:block hidden">
          <Link to="/" className="p-4 font-medium">
            Lawrence Price & Company
          </Link>
        </div>
      </div>

      <div
        className="flex justify-between h-16 items-center px-20 mt-24 relative"
        role="navigation"
      >
        {/* <p className="font-medium text-center text-sm mt-32 mb-0">
        Coming Soon On:
      </p> */}
      <div className=" flex justify-center items-center">
        <img src={google} alt="" className="mr-4" />
        <img src={apple} alt="" className="middle mr-4" />
        <img src={blackbox} alt="" />
      </div>
        <div className="pr-8  md:block hidden">
          <Link to="/" className="p-4 font-medium">
            Lawrence Price & Company
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
