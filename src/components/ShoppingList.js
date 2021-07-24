import axios from "axios";
import React, {useState} from 'react'
import { useQuery } from "react-query";
import Modal from 'react-modal';
import '../App.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  

const ShoppingList = () => {
  async function fetchShopping() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response.data;
  }
  const { data, isLoading, error } = useQuery("shop", fetchShopping);


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

  function closeModal() {
    setIsOpen(false);
  }

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
                  <div className='fruit-image bg-cover cursor:pointer' onClick={openModal} style={{backgroundImage:`url(${thumbnailUrl})`}}></div>
                  <div className="p-8">
                  <h1 className="text-3xl">{name}</h1>
                  <p className="text-2xl" style={{color:'#06AB0D',marginTop:"10px"}}>#{price}</p>
                  </div>
                
              </div>
              <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="bg-white pb-4 rounded-lg">
                  <div className='fruit-image bg-cover cursor:pointer' onClick={openModal} style={{backgroundImage:`url(${url})`}}></div>
                  <div className="p-8">
                  <h1 className="text-3xl">{name}</h1>
                  <h6>{title}</h6>
                  <p className="text-2xl" style={{color:'#06AB0D',marginTop:"10px"}}>#{price}</p>
                  </div>
                
              </div>
      </Modal>
            </>
          );
        })
      )}
    </div>
  );
};

export default ShoppingList;
