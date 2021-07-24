import React from "react";
import '../App.css'
import ShoppingList from "../components/ShoppingList";
import { WaitingLists } from "../data/waitlist";

const Shop = () => {
  return (
    <>
      <div className="bg-white pt-20 flex flex-col justify-left items-center">
        <h1 className="lg:text-5xl md:text-5xl sm:text-5xl text-5xl font-black">
        Shop With Freedom
        </h1>
        <p className="font-200">
        Sell and Buy Products of your Choice
        </p>
      </div>
      <div className="shop-picture bg-cover"></div>

      <ShoppingList />
      <div className="bg-white flex flex-col justify-left items-center">
        <p className="font-medium text-sm">
          SHOPPING MADE SUPER EASY
        </p>
        <h2 className="lg:text-5xl md:text-3xl sm:text-3xl text-3xl font-black">
          shop with freedom
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
        Our App is is beta and coming<br /> soon🎉
        </p>
        </div>
    </>
  );
};

export default Shop;
