import { 
   LOGIN,
   SIGN_OFF 
} from '../../types';


export default (state, action) => {
   switch (action.type) {

      case LOGIN:
         return {
            ...state,
            login: true
         }
      
      case SIGN_OFF:
         return {
            ...state,
            login: false
         }


      default:
         return state;
   }
}