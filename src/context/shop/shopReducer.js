import {
   ADD_PRODUCT,
   DELETE_PRODUCT
} from '../../types';


export default (state, action) => {
   switch (action.type) {

      case ADD_PRODUCT:
         return {
            ...state,
            productsCart: [...state.productsCart, action.payload]
         }

      case DELETE_PRODUCT:
         return {
            ...state,
            productsCart: state.productsCart.filter(product => product.id !== action.payload)
         }

      

      default:
         return state;
   }
}

// El Reducer cambia los States de los componentes. 

// OBS 1: Para cada acción, SIEMPRE se debe hacer una copia del State incial (...state) y luego agregar el resto.
// OBS 2: action.payload --> payload contiene valor que se le asigna a la propiedad payload en la fn del dispatch.