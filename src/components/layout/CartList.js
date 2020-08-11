import React, { useContext } from 'react';

import shopContext from '../../context/shop/shopContext';


const CartList = ({product}) =>  {
   

   const ShopContext = useContext(shopContext);
   const { deleteProduct, increaseQuantity, decreaseQuantity } = ShopContext;


   const { title, img, price, total, quantity } = product;
   

   return (
      <>
         <div className="row border-bottom border-info text-center align-items-baseline py-4 m-0">
            <div className="col-4 text-justify">
               <img className="w-25 rounded ml-5" src={img} alt={title} />
               <span className="d-none d-lg-inline ml-2">{title}</span>
            </div>

            <div className="col-2 d-none d-lg-block">
               <p>$ {price}</p>   
            </div>
         
            <div className="col-3 col-lg-2 colg-xl-2 d-none d-sm-block">         
               <div className="input-group">
                  <span className="input-group-btn">
                     <button className="btn btn-danger btn-sm" onClick={() => decreaseQuantity(product)}>
                        <i className="fa fa-minus"></i> 
                     </button>
                  </span>                  
                  
                  <input 
                     className="form-control form-control-sm text-center" 
                     type="text" 
                     value={quantity}
                  />

                  <span className="input-group-btn">
                     <button className="btn btn-success btn-sm" onClick={() => increaseQuantity(product)}>
                        <i className="fa fa-plus"></i>
                     </button>
                  </span>
               </div>
            </div>               
            
            <div className="col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2">
               <p className="text-center">$ {(total).toFixed(2)}</p>
            </div>

            <div className="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2">
               <button className="btn btn-primary btn-sm" onClick={() => deleteProduct(product)}>
                  <i className="fa fa-trash"></i>
               </button>
            </div>
      
         </div>
      </>
   )
}

export default CartList;