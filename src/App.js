import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Default from './components/pages/Default';

import ShopState from './context/shop/ShopState';


function App () {
   return (
      <>
         <ShopState>
            <Router>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/cart" component={Cart} />
                  <Route component={Default} />
               </Switch>  
            </Router>
         </ShopState> 
      </>     
   );
}

export default App;
