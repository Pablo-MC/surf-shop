import React, { useContext } from 'react';


import shopContext from '../../context/shop/shopContext';

const CartList = ({product}) =>  {
   

   const ShopContext = useContext(shopContext);
   const { deleteProduct } = ShopContext;


   const { title, img, price, info, total } = product;
   
   const deleteProd = (productId) => {
      deleteProduct(productId);
   }


   return (
      <>
         <div className="media border-bottom border-info mt-5">
            <img src={img} className="mr-5 mb-5 w-25" alt={title} />
            <div className="media-body">
               <h5>{title}</h5>
               <p className="lead mb-3">{info}</p>
               <p>Precio: ${price}</p>
               <p>Cantidad en Stock: {total}</p>
               <button className="btn btn-secondary mr-4">Buy <i class="fa fa-usd ml-2"></i></button>
               <button className="btn btn-primary" onClick={() => deleteProd(product.id)}>Delete Product</button>
            </div>
         </div>
      </>
   )
}

export default CartList;