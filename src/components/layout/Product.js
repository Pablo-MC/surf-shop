import React, { useContext } from 'react';
import $ from 'jquery';

import shopContext from '../../context/shop/shopContext';


const Product = ({ product }) => {

   const ShopContext = useContext(shopContext);
   const { addProduct } = ShopContext;
   
   
   const { id, title, price, img, info } = product;


   // Modal Cart Timer (jQuery) 
   $(document).ready(function () {
      $('#cartModal').on('shown.bs.modal', function () {
         var timer = setInterval(function () {
            $('#cartModal').modal('toggle');
            clearInterval(timer);
         }, 700);
      });
   });
   

   // const saberId = () => {
   //    console.log(id);
   // }


   return (
      <>
         <div className="card shadow mb-5">
            <div className="card-body">
               <p>{id}</p>
               <p className="lead text-info font-weight-normal">{title}</p>
               <p className="lead font-weight-normal">$ {price}</p>

               <img src={img} alt={title}
                  className="w-100"  
                  data-toggle="modal" data-target="#productModal" role="button"
                  // onClick={() => saberId()}
               />
                 
               <button
                  onClick={() => addProduct(product)}
                  className="btn btn-outline-info mt-4 mb-2"
                  data-toggle="modal" data-target="#cartModal"
               >Add Cart <i className="fa fa-shopping-cart ml-2"></i>
               </button>
            </div>
         </div>



         {/* Modal Product */}
         <div className="modal fade style-modal" id="productModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">

                  <div className="modal-header">
                     <h5 className="modal-title mx-auto" id="exampleModalLabel">{title}</h5>
                  </div>
                  <div className="modal-body">
                     <img src={img} className="w-75" alt={title} />
                     <p className="lead">{info}</p>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-secondary mx-auto" data-dismiss="modal"><i className="fa fa-undo mr-2"></i>Back to Products</button>
                     {/* <button type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#cartModal" onClick={() => addProduct(product)}>Add to Cart</button> */}
                  </div>
               </div>
            </div>
         </div>
               

         {/* Modal Cart */}
         <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                  <div className="card-body text-center py-5">
                     <i className="fa fa-check-circle-o text-success fa-5x"></i>
                     <h4 className="mt-3">Product added to Cart</h4>
                  </div>
               </div>
            </div>
         </div>
         
      </>
   )
}

export default Product;