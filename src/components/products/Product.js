import React from 'react';


const Product = ({product}) => {

   const { id, title, price, img, info, inCart, count, total } = product;

   return (
      <> 
         <div className="card shadow mb-5">
            <div className="card-body">
               <p>{id}</p>
               <p className="lead">{title}</p>
               <p className="lead">$ {price}</p>
               <a href="/"> <img src={img} className="w-100" alt="Photo"/> </a>
               <button className="btn btn-outline-info mt-4">Add Cart <i className="fa fa-shopping-cart ml-2"></i></button>
            </div>
         </div>
      </>
   )
}

export default Product;