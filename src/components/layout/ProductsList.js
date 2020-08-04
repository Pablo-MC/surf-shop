import React, { useContext } from 'react';

import shopContext from '../../context/shop/shopContext';

import Title from './Title';
import Product from './Product';


const ProductsList = () => {

   // Extraer states y funciones que necesito del Context de Shop
   const ShopContext = useContext(shopContext);
   const { products } = ShopContext;


   return (
      <div className="container pt-5 text-center">
         <Title name={'Products'} />
         
         <h2 id="fins" className="mt-5">Fins</h2>
         <div className="row my-5">
            {products.filter(product => product.category === "fins").map(product => ( 
               <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4" key={product.id}>
                  <Product
                     // key={product.id}
                     product= {product}   
                  /> 
               </div>
            ))}
         </div>  

         <h2 id="boards">Boards</h2>
         <div className="row my-5">
            {products.filter(product => product.category === "boards").map(product => ( 
               <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4" key={product.id}>
                  <Product
                     // key= {product.id}
                     product= {product}   
                  /> 
               </div>
            ))}
         </div>

         <h2 id="neopreme">Neoprene</h2>
         <div className="row my-5">
            {products.filter(product => product.category === "neoprene").map(product => ( 
               <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4" key={product.id}>
                  <Product
                     // key= {product.id}
                     product= {product}   
                  /> 
               </div>
            ))}
         </div>   
         
         <h2 id="accesories">Accesories</h2>
         <div className="row my-5">
            {products.filter(product => product.category === "accesories").map(product => ( 
               <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4" key={product.id}>
                  <Product
                     // key= {product.id}
                     product= {product}   
                  /> 
               </div>
            ))}
         </div>     
      </div>
   );
}

export default ProductsList;