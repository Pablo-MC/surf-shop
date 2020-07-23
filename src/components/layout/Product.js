import React, { useContext } from 'react';

import shopContext from '../../context/shop/shopContext';



const Product = ({ product }) => {

   
   const ShopContext = useContext(shopContext);
   const { addProduct } = ShopContext;
   
   
   
   const { id, title, price, img, info } = product;


   const addCart = (product) => {
      addProduct(product);
   }


   return (
      <>
         <div className="card shadow mb-5">
            <div className="card-body">
               <p>{id}</p>
               <p className="lead">{title}</p>
               <p className="lead">$ {price}</p>


               <img src={img} className="w-100" alt="Img" role="button" data-toggle="modal" data-target="#exampleModal" />
               

               <button
                  className="btn btn-outline-info mt-4"
                  onClick={() => addCart(product)}
               >Add Cart <i className="fa fa-shopping-cart ml-2"></i></button>



               {/* <img src={img} className="w-100" alt="Img" onClick={() => hola(id)} role="button" data-toggle="modal" data-target="#exampleModal" /> */}


               {/* <button type="button" data-toggle="modal" data-target="#exampleModal">
                  <img src={img} className="w-100" alt="Img" />
               </button> */}


               {/* Modal */}
               <div className="modal fade style-modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                     <div className="modal-content">

                        <div className="modal-header">
                           <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
                        <div className="modal-body">
                           <img src={img} className="w-100" alt="Img" />
                           <p className="lead">{info}</p>
                        </div>
                        <div className="modal-footer">
                           <button type="button" className="btn btn-secondary" data-dismiss="modal">Back to Products</button>
                           <button type="button" className="btn btn-primary" onClick={() => addCart(product)}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

         </div>
      </>
   )
}

export default Product;