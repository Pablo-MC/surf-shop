import React, { useReducer } from 'react';

import { storeProducts } from '../../data';


// Importar Context y Reducer
import shopContext from './shopContext';
import shopReducer from './shopReducer';


import { 
   ADD_PRODUCT,
   DELETE_PRODUCT
} from '../../types';


// ProyectState va a ser el State inicial de toda la administración del Shop.
const ShopState = (props) => {

   const initialState = {
      products: storeProducts,
      productsCart: []
      

   }


   // Creacion del state y el dispatch (useReducer)
   const [state, dispatch] = useReducer(shopReducer, initialState);


   // Funciones

   // cuando se llame a dicha funcion se va a ejecutar el type AGREGAR_PRODUCTO.
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






   return (
      <shopContext.Provider
         value={{
            products: state.products,
            productsCart: state.productsCart,
            addProduct,
            deleteProduct


         }}
      >
         {props.children}
      </shopContext.Provider>
   );
}

export default ShopState;