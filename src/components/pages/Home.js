import React from 'react';

import Navbar from '../layout/Navbar';
import Carousel from '../layout/Carousel';
import ProductList from '../layout/ProductsList';
import About from '../layout/About';
import Footer from '../layout/Footer';


const Home = () => {
   return (
      <>
         <Navbar />
         <Carousel />
         <ProductList />
         <About />
         <Footer />
      </>
   )
}

export default Home;