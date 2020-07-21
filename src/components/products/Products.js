import React from 'react';

import { storeProducts } from '../../db/data';

import Title from './../layout/Title';
import Product from './Product';

const Products = () => {
   
   return (
      <div className="container py-5 text-center">
         <Title name={'Products'} />
         
         <h2 id="fins" className="mt-5">Fins</h2>
         <div className="row my-5">
            {storeProducts.filter(product => product.category == "fins").map(product => ( 
            <div className="col-4">
               <Product
                  key= {product.id}
                  product= {product}   
               /> 
            </div>
            ))}
         </div>  

         <h2 id="boards">Boards</h2>
         <div className="row my-5">
            {storeProducts.filter(product => product.category == "boards").map(product => ( 
            <div className="col-4">
               <Product
                  key= {product.id}
                  product= {product}   
               /> 
            </div>
            ))}
         </div>

         <h2 id="neopreme">Neoprene</h2>
         <div className="row my-5">
               {storeProducts.filter(product => product.category == "neoprene").map(product => ( 
               <div className="col-4">
                  <Product
                     key= {product.id}
                     product= {product}   
                  /> 
               </div>
               ))}
         </div>   
         
         <h2 id="accesories">Accesories</h2>
         <div className="row my-5">
               {storeProducts.filter(product => product.category == "accesories").map(product => ( 
               <div className="col-4">
                  <Product
                     key= {product.id}
                     product= {product}   
                  /> 
               </div>
               ))}
         </div>            
      </div>
   );
}

export default Products;

