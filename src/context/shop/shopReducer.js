import {
   ADD_PRODUCT,
   DELETE_PRODUCT
} from '../../types';


export default (state, action) => {
   switch (action.type) {

      case ADD_PRODUCT:
         return {
            ...state,
            productsCart: [...state.productsCart, action.payload],
            totalPrice: state.totalPrice + action.payload.price  // Suma total de los productos. 
         }

      case DELETE_PRODUCT:
         return {
            ...state,
            productsCart: state.productsCart.filter(product => product.id !== action.payload),
            totalPrice: (state.totalPrice - (state.productsCart.find(product => product.id === action.payload).price)).toFixed(2) // Dos decimales.
         }

      

      default:
         return state;
   }
}

// El Reducer cambia los States de los componentes. 

// OBS 1: Para cada acción, SIEMPRE se debe hacer una copia del State incial (...state) y luego agregar el resto.
// OBS 2: action.payload --> payload contiene valor que se le asigna a la propiedad payload en la fn del dispatch.