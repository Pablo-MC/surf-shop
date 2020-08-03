import React, { useReducer } from 'react';

import { storeProducts } from '../../data';


// Import Context and Reducer
import shopContext from './shopContext';
import shopReducer from './shopReducer';

// Import Types
import {
   ADD_PRODUCT,
   DELETE_PRODUCT,
   DELETE_ALL_PRODUCT,
   INCREASE_QUANTITY,
   DECREASE_QUANTITY
} from '../../types';



const ShopState = (props) => {

   // Initial State of Shop
   const initialState = {
      products: storeProducts,
      productsCart: [],
      totalPrice: 0  
   }


   // Create the state and dispatch (useReducer)
   const [state, dispatch] = useReducer(shopReducer, initialState);


   
   // Functions

   const addProduct = (product) => { 
      
      // Para no duplicar el producto en la lista, agrego el producto unicamente si no está en el carrito.
      if (!product.inCart) {
         
         product.inCart = true;
         
         dispatch({
            type: ADD_PRODUCT,
            payload: product
         })   
      } 
   }               
   
   const deleteProduct = (product) => {

      product.inCart = false; 

      dispatch({
         type: DELETE_PRODUCT,
         payload: product
      })
   }

   const deleteAllProducts = () => {
            
      dispatch({
         type: DELETE_ALL_PRODUCT
      })
   }

   const decreaseQuantity = (product) => {

      if (product.quantity > 1) {
         product.quantity--;
         product.total = product.price * product.quantity;

         dispatch({
            type: DECREASE_QUANTITY,
            payload: product
         })
      }
   } 

   const increaseQuantity = (product) => {

      if (product.quantity < 10) {
         product.quantity++;
         product.total = product.price * product.quantity;

         dispatch({
            type: INCREASE_QUANTITY,
            payload: product
         })
      }
   }



   return (
      <shopContext.Provider
         value={{
            products: state.products,
            productsCart: state.productsCart,
            totalPrice: state.totalPrice,
            addProduct,
            deleteProduct,
            increaseQuantity,
            decreaseQuantity,
            deleteAllProducts

         }}
      >
         {props.children}
      </shopContext.Provider>
   );
}

export default ShopState;