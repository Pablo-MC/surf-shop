import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Navbar from './components/layout/Navbar';
import Carousel from './components/layout/Carousel';
import ProductsList from './components/products/ProductsList';
import About from './components/layout/About';
import Footer from './components/layout/Footer';

import Cart from './components/cart/Cart';

import Default from './components/layout/Default';



function App () {
   return (
      <>
         <Router>
            <Navbar />
            <Carousel />
            <Switch>
               <Route exact path="/" component={ProductsList} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/register" component={Register} />
               {/* <Route exact path="/cart" component={Cart} /> */}
               <Route component={Default} />
            </Switch>
            <About />
            <Footer />   
         </Router> 
      </>     
   );
}

export default App;
