import React, { useState } from "react";
import yellow from "../images/yellow.svg";
import laughing from "../images/laughing.svg";
import hat from "../images/hat.svg";
import { WaitingLists } from "../data/waitlist";
import "../App.css";
import Footer from "./Footer";

const Hero = () => {
  const [currentView, setCurrentView] = useState("email");

  const proceedToEmail = () => {
    setCurrentView("email");
  };
  const proceedToPhone = () => {
    setCurrentView("phone");
  };

  return (
    <>
      <div className="bg-white pt-20 flex flex-col justify-left items-center">
        <h1 className="lg:text-5xl md:text-5xl sm:text-5xl text-5xl font-black">
          Grow above <br /> and beyond
        </h1>
        <p className="font-200">
          one platform to manage records, pay ,<br /> Access grants, and run
          your business.
        </p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-0 px-20 my-20">
        <img src={yellow} alt="" className="row-span-3 md:row-span-3" />

        <img src={hat} alt="" className="row-span-1 col-span-2" />
        <img
          src={laughing}
          alt=""
          className="w-full row-span-2 col-span-2 -mt-16"
        />
      </div>

      <div className="bg-white flex flex-col justify-left items-center">
        <p className="font-medium text-sm">
          FINANCIALS FOR BUSINESSES SMALL & LARGE
        </p>
        <h2 className="lg:text-5xl md:text-3xl sm:text-3xl text-3xl font-black">
          freedom begins here!
        </h2>
        <div className="waitingListContain flex items-center justify-center">
          {WaitingLists.map((item, index) => {
            return (
              <>
                <div
                  className="waiting-list bg-cover"
                  style={{ backgroundImage: `url(${item.pic})` }}
                  key={index}
                ></div>
              </>
            );
          })}
        </div>

        <p className="font-normal text-lg text-center">
          Be amongst the First to
          <br />
          Get the News When we Launch!
        </p>

        {currentView === "email" ? (
          <div className="input-box">
            <form className="w-full max-w-md">
              <div className="flex items-center  py-2">
                <input
                  className="appearance-none bg-transparent  border-solid border-2 w-full h-10 rounded-3xl  mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="email"
                  placeholder="Your Email Address"
                  aria-label="email"
                />
                <button
                  className="flex-shrink-0  text-sm border-none text-white py-1 px-2 rounded"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p
              onClick={proceedToPhone}
              className="cursor-pointer text-gray-500 text-lg mt-4 text-center"
            >
              I would prefer an SMS instead.{" "}
            </p>
          </div>
        ) : currentView === "phone" ? (
          <div className="input-box" setCurrentView={setCurrentView}>
            <p className="cursor-pointer text-gray-500 text-lg  mb-4 text-center" onClick={proceedToEmail}>
            I think an e-mail will do 
            </p>
            <form className="w-full max-w-sm">
              <div className="flex items-center py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 rounded-3xl leading-tight focus:outline-none"
                  type="number"
                  placeholder="i.e  +234 0800 000 0000"
                  aria-label="Phone Number"
                />
                <button
                  className="flex-shrink-0 text-sm border-none text-white py-1 px-2 rounded"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Hero;
