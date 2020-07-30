import {
   ADD_PRODUCT,
   DELETE_PRODUCT,
   INCREASE_QUANTITY,
   DECREASE_QUANTITY
} from '../../types';


export default (state, action) => {
   switch (action.type) {

      case ADD_PRODUCT:
         return {
            ...state,
            productsCart: [...state.productsCart, action.payload],
            totalPrice: state.totalPrice + action.payload.price 
         }

      case DELETE_PRODUCT:
         return {
            ...state,
            productsCart: state.productsCart.filter(product => product.id !== action.payload.id),
            
            totalPrice: parseFloat(state.totalPrice - (state.productsCart.find(product => product.id === action.payload.id).total))
         }

      case DECREASE_QUANTITY:
         return {
            ...state,
            productsCart: state.productsCart.map(product => product.id === action.payload.id ? action.payload : product),

            totalPrice: parseFloat(state.totalPrice - (state.productsCart.find(product => product.id === action.payload.id).price))

         }   

      case INCREASE_QUANTITY:
         return {
            ...state,
            productsCart: state.productsCart.map(product => product.id === action.payload.id ? action.payload : product),
            
            totalPrice: parseFloat(state.totalPrice + (state.productsCart.find(product => product.id === action.payload.id).price))

         }

      default:
         return state;
   }
}

// El Reducer cambia los States de los componentes. 

// OBS 1: Para cada acción, SIEMPRE se debe hacer una copia del State incial (...state) y luego agregar el resto.
// OBS 2: action.payload --> payload contiene valor que se le asigna a la propiedad payload en la fn del dispatch.