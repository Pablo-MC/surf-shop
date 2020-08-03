import React, { useReducer } from 'react';

// Import Context and Reducer
import authContext from './authContext';
import authReducer from './authReducer';

// Import Types
import {
   LOGIN,
   SIGN_OFF
} from '../../types';


const AuthState = (props) => {

   // Initial State of Auth
   const initialState = {
      login: false

   }


   // Create the state and dispatch (useReducer)
   const [state, dispatch] = useReducer(authReducer, initialState);


   // Functions
   
   const logInUser = () => {
      dispatch ({
         type: LOGIN
      })   
   }

   const signOffUser = () => {
      dispatch ({
         type: SIGN_OFF
      })   
   }


   return (
      <authContext.Provider
         value={{
            login: state.login,
            logInUser,
            signOffUser
         }}
      >
         {props.children}
      </authContext.Provider>
   );
}

export default AuthState;