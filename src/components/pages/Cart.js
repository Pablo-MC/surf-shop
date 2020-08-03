import React, { useContext } from 'react';
import $ from 'jquery';

import CartNav from '../layout/CartNav';
import CartList from '../layout/CartList';

import authContext from '../../context/auth/authContext';
import shopContext from '../../context/shop/shopContext';


const Cart = (props) => {

   const AuthContext = useContext(authContext);
   const { login } = AuthContext;
   
   const ShopContext = useContext(shopContext);
   const { productsCart, totalPrice, deleteAllProducts } = ShopContext;
   

   // Modal Checkout (timer)
   $(document).ready(() => {
      $('#checkoutModal').on('shown.bs.modal', () => {
         var timer = setInterval(() => {
            $('#checkoutModal').modal('toggle');
            clearInterval(timer);
         }, 900);
      });
   });

   
   return (
      <>
         <CartNav />   

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
                  <h2 className="m-0">Total: $ {totalPrice.toFixed(2)}</h2> 
                  
                  {login
                  ?
                     <button 
                        className="btn btn-md btn-success ml-5 mb-2 py-2 text-uppercase"
                        data-toggle="modal" data-target="#checkoutModal"
                        onClick={deleteAllProducts}
                     >Buy Now<i className="fa fa-arrow-right ml-3"></i></button>       
                  :
                     <button
                        className="btn btn-md btn-success ml-5 mb-2 py-2 text-uppercase"
                        onClick={() => props.history.push('/login')}
                     >Buy Now<i className="fa fa-arrow-right ml-3"></i></button>       
                  }
                                  
               </div>
            </div>                
         }


         {/* Modal Checkout */}
         <div className="modal fade" id="checkoutModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                  <div className="card-body text-center py-5">
                     <i className="fa fa-smile-o text-success fa-5x"></i>
                     <h4 className="mt-3">Thanks for your purchase!</h4>
                  </div>
               </div>
            </div>
         </div>

      </>         
   )
}

export default Cart;
