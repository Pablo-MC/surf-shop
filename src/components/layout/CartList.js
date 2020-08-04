import React, { useContext } from 'react';

import shopContext from '../../context/shop/shopContext';


const CartList = ({product}) =>  {
   

   const ShopContext = useContext(shopContext);
   const { deleteProduct, increaseQuantity, decreaseQuantity } = ShopContext;


   const { title, img, price, total, quantity } = product;
   

   return (
      <>
         <div className="row border-bottom border-info align-items-baseline text-center py-4 m-0">
            <div className="col-4">
               <img className="w-25 rounded mx-3" src={img} alt={title} />
               <span>{title}</span>
            </div>

            <div className="col-2">
               <p>$ {price}</p>   
            </div>
         
            <div className="col-2">         
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
            
            <div className="col-2">
               <p className="text-center">$ {(total).toFixed(2)}</p>
            </div>

            <div className="col-2">
               <button className="btn btn-primary btn-sm" onClick={() => deleteProduct(product)}>
                  <i className="fa fa-trash"></i>
               </button>
            </div>
      
         </div>
      </>
   )
}

export default CartList;