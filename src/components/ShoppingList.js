import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import '../App.css'

const ShoppingList = () => {
  async function fetchShopping() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response.data;
  }
  const { data, isLoading, error } = useQuery("shop", fetchShopping);

  console.log(data && data.splice(0, 3));


  return (
    <div className="grid grid-cols-3 gap-4  bg-gray-200 px-40 py-20 mb-20">
        { !isLoading && error && <div>{error}</div> }
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data &&
        data.splice(0, 3).map(({title, thumbnailUrl, url, price=3500, name='Nuts'}) => {
          return (
            <>
              <div className="bg-white pb-4 rounded-lg">
                  <div className='fruit-image bg-cover' style={{backgroundImage:`url(${thumbnailUrl})`}}></div>
                  <div className="p-8">
                  <h1 className="text-3xl">{name}</h1>
                  <p className="text-2xl" style={{color:'#06AB0D',marginTop:"10px"}}>#{price}</p>
                  </div>
                  
                
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default ShoppingList;
