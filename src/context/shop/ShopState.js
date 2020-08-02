import React, { useReducer } from 'react';

import { storeProducts } from '../../data';


// Importo Context y Reducer
import shopContext from './shopContext';
import shopReducer from './shopReducer';


import {
   ADD_PRODUCT,
   DELETE_PRODUCT,
   DELETE_ALL_PRODUCT,
   INCREASE_QUANTITY,
   DECREASE_QUANTITY
} from '../../types';


// ShopState es el State inicial de toda la administración del Shop.
const ShopState = (props) => {

   const initialState = {
      products: storeProducts,
      productsCart: [],
      totalPrice: 0,
      login: true   
   }


   // CreaciÓn del state y el dispatch (useReducer)
   const [state, dispatch] = useReducer(shopReducer, initialState);


   
   // Funciones

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
      
      state.productsCart.map(product => product.inCart = false);
      
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
            login: state.login,
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