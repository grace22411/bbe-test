
import axios from 'axios'
import React from 'react'
import {useQuery} from "react-query"

const ShoppingList = () => {
     async function fetchShopping() {
         const data = await axios.get('https://jsonplaceholder.typicode.com/photos')
         return data
     }
    const { data } = useQuery('shop', fetchShopping)

   console.log(data)
    return (
        <div>
            {/* <p>{data[0][1].title}</p> */}
        </div>
    )
}

export default ShoppingList
