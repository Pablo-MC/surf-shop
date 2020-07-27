import React from 'react';
import { Link } from 'react-router-dom';


const NavCart = () => {
   return (
      <div className="container">
         <h2 className="display-4 text-center text-uppercase font-weight-bold border-bottom mx-auto w-75 py-2">My Cart</h2>
         <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav text-uppercase m-auto lead py-0">
                  <Link to={'/'} className="nav-item nav-link text-danger px-4">Home</Link>
                  <a className="nav-item nav-link px-4" href="!#">FAQ</a>
                  <a className="nav-item nav-link px-4" href="!#"><i className="fa fa-search"></i></a>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default NavCart;