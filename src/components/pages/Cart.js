import React, { useContext } from 'react';
import NavCart from '../layout/NavCart';
import CartList from '../layout/CartList';

import shopContext from '../../context/shop/shopContext';


const Cart = () => {

   const ShopContext = useContext(shopContext);
   const { productsCart, totalPrice } = ShopContext;


   return (
      <>
         <NavCart />   

         {productsCart.length === 0 
         ?  
            <div className="container">
               <div className="alert alert-danger lead text-center w-50 mx-auto mt-5" role="alert">
                  There are no products added to the Cart
               </div>
            </div>            
         :   
            <div className="container"> 
         
               <table className="table table-info mt-3 text-center">
                  <thead>
                     <tr className="row m-0">
                        <th className="col-4">Product</th>
                        <th className="col-2">Price</th>
                        <th className="col-2">Quantity</th>
                        <th className="col-2">Total</th>
                        <th className="col-2">Delete</th>
                     </tr>
                  </thead>
               </table>
               
               {productsCart.map(product => (
                  <CartList
                     key={product.id} 
                     product={product}
                  />
               ))}

               <div className="container d-flex justify-content-end bg-light my-4 py-2">
                  <h2 className="m-0">Total: $ {totalPrice}</h2> 
                  <button className="btn btn-md btn-success ml-5 mb-2 py-2 text-uppercase">Checkout<i className="fa fa-arrow-right ml-3"></i></button>       
               </div>

            </div>                
         }
      </>         
   )
}

export default Cart;
