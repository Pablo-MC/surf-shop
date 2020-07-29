import React, { useContext } from 'react';
// import $ from 'jquery';


import shopContext from '../../context/shop/shopContext';


const CartList = ({product}) =>  {
   

   const ShopContext = useContext(shopContext);
   const { deleteProduct, increaseQuantity, decreaseQuantity } = ShopContext;


   const { id, title, img, price, total, quantity } = product;
   



   // $(document).ready(function () {

   //    $('.quantity-minus').click(function (e) {
   //       // e.preventDefault();
   //       // var value = parseInt($('#quantity').val());

   //       // if (value > 1)
   //          $('#quantity').val(quantity);
   //    });

   //    $('.quantity-plus').click(function (e) {
   //       // e.preventDefault();
   //       // var value = parseInt($('#quantity').val());

   //       // if (value < total)
   //          $('#quantity').val(quantity);
   //    });

   // });



   return (
      <>
         <div className="row flex-row border-bottom border-info align-items-baseline text-center py-4 m-0">
            <div className="col-4">
               <img src={img} className="w-25 mr-3" alt={title} />
               <span>{title}</span>
            </div>

            <div className="col-2">
               <p>$ {price}</p>   
            </div>
         

            <div className="col-2">         
               <div className="input-group">
                  <span className="input-group-btn">
                     <button className="btn btn-danger btn-sm quantity-minus" onClick={() => decreaseQuantity(id)}>
                        <i className="fa fa-minus"></i> 
                     </button>
                  </span>                  
                  
                  <input 
                     className="form-control form-control-sm text-center" 
                     type="text" 
                     // id={quantity} 
                     // name={quantity}
                     defaultValue={quantity}
                  />

                  <span className="input-group-btn">
                     <button className="btn btn-success btn-sm quantity-plus" onClick={() => increaseQuantity(id)}>
                        <i className="fa fa-plus"></i>
                     </button>
                  </span>
               </div>
            </div>               
            

            <div className="col-2">
               <p className="text-center">$ {total}</p>
            </div>

            <div className="col-2">
               <button className="btn btn-primary btn-sm" onClick={() => deleteProduct(id)}><i className="fa fa-trash"></i></button>
            </div>
      
         </div>

      </>
   )
}

export default CartList;