import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';


const Navbar = () => {

   // SMOOTH SCROLLING (jQuery)
   $(document).ready(function () {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
            });
         });
      });
   });


   return (
      <div className="container">
         <h2 className="display-4 text-center text-uppercase font-weight-bold border-bottom mx-auto w-75 py-2">Surf Shop</h2>
         <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse style-navbar mb-2" id="navbarNavAltMarkup">
               <div className="navbar-nav text-uppercase m-auto lead py-0">
                  <Link to={'/'} className="nav-item nav-link text-danger px-4">Home</Link>           
                  <a className="nav-item nav-link px-4" href="#about">About</a>  
                  {/* Begin Dropdown Button */}
                  <div className="dropdown">
                     <a className="nav-item nav-link dropdown-toggle px-4" href="!#" id="dropdownMenuLink" data-toggle="dropdown">Shop</a>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#fins">Fins</a>
                        <a className="dropdown-item" href="#boards">Boards <i className="fa fa-pagelines ml-2"></i></a>
                        <a className="dropdown-item" href="#neopreme">Neoprenes <i className="fa fa-envira ml-2"></i></a>
                        <a className="dropdown-item" href="#accesories">Accesories <i className="fa fa-cubes ml-2"></i></a>
                     </div>
                  </div>
                  {/* End Dropdown Button */}
                  <a className="nav-item nav-link px-4" href="#footer">Contact</a>
                  <a className="nav-item nav-link px-4" href="!#"><i className="fa fa-search text-dark"></i></a>
               </div>
               
               <Link to={'/cart'} className="btn btn-outline-info text-uppercase">My Cart <i className="fa fa-cart-arrow-down ml-2"></i></Link>

            </div>
         </nav>
      </div>
   )
}

export default Navbar;