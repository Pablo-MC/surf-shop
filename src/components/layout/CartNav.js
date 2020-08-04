import React from 'react';
import { Link } from 'react-router-dom';


const CartNav = () => {
   return (
      <div className="container">
         <h2 className="display-4 text-center text-uppercase font-weight-bold border-bottom mx-auto w-75 py-2">My Cart</h2>
         <nav className="navbar navbar-expand-sm navbar-light">
            <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav text-uppercase m-auto py-3">
                  <Link to={'/'} className="btn btn-danger text-uppercase text-white px-3 mx-3 mb-1">Home<i className="fa fa-home ml-2"></i></Link>
                  <Link to={'/contact'} className="btn btn-success text-uppercase text-white mx-3 mb-1">Contact<i className="fa fa-telegram ml-2"></i></Link>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default CartNav;