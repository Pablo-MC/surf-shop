import React, { useContext } from 'react';
import $ from 'jquery';

import shopContext from '../../context/shop/shopContext';


const Product = ({ product }) => {

   const ShopContext = useContext(shopContext);
   const { addProduct } = ShopContext;
   
   
   const { title, img, price, info } = product;


   // Modal AddCart       
   $('#cartModal').on('shown.bs.modal', () => {         
      var timer = setInterval(() => {             
         $('#cartModal').modal('toggle');
         clearInterval(timer);
      }, 700);
   });      
   
   
   // Modal Product
   const viewModalProduct = (title, img, info) => {
      $('#ModalTitle').html(title);
      $('#ModalImg').attr('src', img);
      $('#ModalInfo').html(info);
   }


   return (
      <>
         <div className="card shadow mb-5">
            <div className="card-body">
               <p className="lead text-info font-weight-normal pt-3">{title}</p>
               <p className="lead font-weight-normal">$ {price}</p>

               <img src={img} alt={title}
                  className="w-100"  
                  data-toggle="modal" data-target="#productModal" role="button"
                  onClick={() => viewModalProduct(title, img, info)}
               />
                 
               <button
                  className="btn btn-outline-info mt-4 mb-3"
                  data-toggle="modal" data-target="#cartModal"
                  onClick={() => addProduct(product)}
               >Add Cart <i className="fa fa-shopping-cart ml-2"></i>
               </button>
            </div>
         </div>


         {/* Modal Product */}
         <div className="modal fade style-modal" id="productModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">

                  <div className="modal-header">
                     <h5 className="modal-title mx-auto" id="ModalTitle">Title</h5>
                  </div>
                  <div className="modal-body">
                     <img className="w-50" src="" alt="" id="ModalImg"/> 
                     <p className="lead pt-3" id="ModalInfo">Information</p>
                  </div>
                  <div className="modal-footer">
                     <button className="btn btn-secondary mx-auto" type="button" data-dismiss="modal"><i className="fa fa-undo mr-2"></i>Back to Products</button>
                     {/* <button type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#cartModal" onClick={() => addProduct(product)}>Add to Cart</button> */}
                  </div>

               </div>
            </div>
         </div>
               

         {/* Modal AddCart */}
         <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-hidden="true">
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