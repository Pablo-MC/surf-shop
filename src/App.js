import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Cart from './components/pages/Cart';
import Contact from './components/pages/Contact';
import Default from './components/pages/Default';

import AuthSate from './context/auth/AuthState'
import ShopState from './context/shop/ShopState';


function App () {
   return (
      <>
         <AuthSate>
            <ShopState>
               <Router>
                  <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/login" component={Login} />
                     <Route exact path="/register" component={Register} />
                     <Route exact path="/cart" component={Cart} />
                     <Route exact path="/contact" component={Contact} />
                     <Route component={Default} />
                  </Switch>  
               </Router>
            </ShopState>
         </AuthSate> 
      </>     
   );
}

export default App;
