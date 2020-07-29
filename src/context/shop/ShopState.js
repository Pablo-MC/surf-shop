import React, { useReducer } from 'react';

import { storeProducts } from '../../data';


// Importar Context y Reducer
import shopContext from './shopContext';
import shopReducer from './shopReducer';


import { 
   ADD_PRODUCT,
   DELETE_PRODUCT,
   INCREASE_QUANTITY,
   DECREASE_QUANTITY
} from '../../types';


// ShopState es el State inicial de toda la administración del Shop.
const ShopState = (props) => {

   const initialState = {
      products: storeProducts,
      productsCart: [],
      totalPrice: 0   
   }


   // Creacion del state y el dispatch (useReducer)
   const [state, dispatch] = useReducer(shopReducer, initialState);


   
   // Funciones

   const addProduct = (product) => {  
      dispatch({
         type: ADD_PRODUCT,
         payload: product
      })
   }


   const deleteProduct = (productId) => {
      dispatch({
         type: DELETE_PRODUCT,
         payload: productId
      })
   }


   const increaseQuantity = (productId) => {
      dispatch({
         type: INCREASE_QUANTITY,
         payload: productId
      })
   }


   const decreaseQuantity = (productId) => {
      dispatch({
         type: DECREASE_QUANTITY,
         payload: productId
      })
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
            decreaseQuantity


         }}
      >
         {props.children}
      </shopContext.Provider>
   );
}

export default ShopState;