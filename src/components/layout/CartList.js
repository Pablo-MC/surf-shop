import React, { useContext } from 'react';
import $ from 'jquery';


import shopContext from '../../context/shop/shopContext';



const CartList = ({product}) =>  {
   

   const ShopContext = useContext(shopContext);
   const { deleteProduct } = ShopContext;


   const { title, img, price, total } = product;
   



   $(document).ready(function () {

      $('.quantity-minus').click(function (e) {
         var quantity = parseInt($('#quantity').val());

         if (quantity > 1)
            $('#quantity').val(quantity - 1);
      });

      $('.quantity-plus').click(function (e) {
         var quantity = parseInt($('#quantity').val());

         if (quantity < total)
            $('#quantity').val(quantity + 1);
      });

   });



   // const increaseValue = () => {
   //    var value = parseInt(document.getElementById('number').value, 10);
   //    value = isNaN(value) ? 0 : value;
   //    value++;
   //    document.getElementById('number').value = value;
   // }

   // function decreaseValue() {
   //    var value = parseInt(document.getElementById('number').value, 10);
   //    value = isNaN(value) ? 0 : value;
   //    // value < 1 ? value = 1 : '';
   //    value--;
   //    document.getElementById('number').value = value;
   // }




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
                     <button className="quantity-minus btn btn-danger btn-sm" type="button" data-type="minus" data-field="">
                        <i className="fa fa-minus"></i> 
                     </button>
                  </span>                  
                  
                  <input className="form-control form-control-sm input-number text-center" type="text" id="quantity" name="quantity" value="1" />                  
                  
                  <span className="input-group-btn">
                     <button className="quantity-plus btn btn-success btn-sm" type="button" data-type="plus" data-field="">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                     </button>
                  </span>
               </div>
            </div>               

            <div className="col-2">
               <p className="text-center">$ total</p>
            </div>

            <div className="col-2">
               <button className="btn btn-primary btn-sm" onClick={() => deleteProduct(product.id)}><i className="fa fa-trash"></i></button>
            </div>
      
         </div>

      </>
   )
}

export default CartList;