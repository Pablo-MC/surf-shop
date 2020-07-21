import {
   EJEMPLO
} from '../../types';


export default (state, action) => {
   switch (action.type) {

      case EJEMPLO:
         return {
            ...state,

         }

      default:
         return state;
   }
}

// El Reducer cambia los States de los componentes. 





// OBS 1: SIEMPRE se debe hacer una copia del State incial (...state) para que se haga una copia y se agrege el resto.
// OBS 2: action.payload --> payload contiene valor que se le asigna a la propiedad payload en la fn del dispatch.