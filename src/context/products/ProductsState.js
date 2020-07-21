import React, { useReducer } from 'react';

import { storeProducts } from '../../db/data';


// Importar Context y Reducer
import productContext from './productsContext';
import productReducer from './productsReducer';

// import { EJEMPLO } from '../../types';





// ProyectState va a ser el State inicial de toda la administración de los productos.
const ProductState = (props) => {

   const initialState = {
      products: storeProducts 

   }


   // Creacion del state y el dispatch (useReducer)
   const [state, dispatch] = useReducer(productReducer, initialState);


   // Funciones


   return (
      <productContext.Provider
         value={{


         }}
      >
         {props.children}
      </productContext.Provider>
   );
}

export default ProductState;