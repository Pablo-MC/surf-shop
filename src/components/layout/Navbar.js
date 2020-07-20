import React from 'react';
// import { Link } from 'react-router-dom';


const Navbar = () => {
   return (
      <div className="container">
         <h2 className="display-4 text-center text-uppercase font-weight-bold border-bottom mx-auto w-75 py-2">Surf Shop</h2>
         <nav className="navbar navbar-expand-md navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav text-uppercase m-auto lead py-0">
                  <a className="nav-item nav-link text-danger px-4" href="/">Home</a>
                  {/* <Link to={'/about'} className="nav-item nav-link px-4" style={{ textDecoration: 'none' }}> 
                     About
                  </Link> */}
                  <a className="nav-item nav-link px-4" href="/about">About</a>
                  <div className="dropdown">
                     <a className="nav-item nav-link dropdown-toggle px-4" href="!#" id="dropdownMenuLink" data-toggle="dropdown">Shop</a>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="!#">Fins</a>
                        <a className="dropdown-item" href="!#">Boards</a>
                        <a className="dropdown-item" href="!#">Wetsuits</a>
                        <a className="dropdown-item" href="!#">Accesories</a>
                     </div>
                  </div>
                  <a className="nav-item nav-link px-4" href="!#">Contact</a>
                  <a className="nav-item nav-link px-4" href="!#"><i className="fa fa-search"></i></a>
               </div>
               <a className="btn btn-outline-info text-uppercase" href="!#">My Cart <i className="fa fa-cart-arrow-down ml-2"></i></a>
            </div>
         </nav>
      </div>
   )
}

export default Navbar;