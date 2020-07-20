import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Navbar from './components/layout/Navbar';
import Carousel from './components/layout/Carousel';
import Default from './components/layout/Default';

import Products from './components/products/Products';


function App() {
   return (
      <>
         <Router>
            <Navbar />
            <Carousel />
            <Switch>
               <Route exact path="/" component={Products} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/register" component={Register} />
               <Route component={Default} />
               {/* <Route exact path="/about" component={About} />
               <Route exact path="/cart" component={Cart} />
               <Route exact path="/search" component={Search} /> */}
            </Switch>
         </Router> 
      </>     
   );
}

export default App;
