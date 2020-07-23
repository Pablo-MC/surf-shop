import React, { useContext } from 'react';
import NavCart from '../layout/NavCart';

import shopContext from '../../context/shop/shopContext';

import CartList from '../layout/CartList';


const Cart = () => {

   const ShopContext = useContext(shopContext);
   const { productsCart } = ShopContext;


   return (
      <>
         <NavCart />   

         <div className="container">
            <h2 className="display-4 ml-5">My Cart</h2>

            {productsCart.length === 0 
            ?
               <div className="alert alert-danger lead text-center w-50 mx-auto mt-5" role="alert">
                  There are no products added to the Cart
               </div>
               
            :   
   
               productsCart.map(product => (
                  <CartList
                     key={product.id} 
                     product={product}
                  />
               ))
               
            }
            
         </div>
      </>
   )
}

export default Cart;
