import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import authContext from '../../context/auth/authContext'
import shopContext from '../../context/shop/shopContext'


const Navbar = () => {

   const AuthContext = useContext(authContext);
   const { login, signOffUser } = AuthContext;
   
   const ShopContext = useContext(shopContext);
   const { deleteAllProducts } = ShopContext;


   const signOff = () => {
      signOffUser();
      deleteAllProducts();
   }


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
            <button className="navbar-toggler mx-auto mb-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse style-navbar" id="navbarNavAltMarkup">
               <a className="navbar-brand d-none d-lg-block" href="/"><img src={process.env.PUBLIC_URL + 'images/logo_navbar.png'} width="100" alt="logo" loading="lazy" /></a>
               <div className="navbar-nav text-uppercase mx-auto lead py-0 pl-5">
                  <Link to={'/'} className="nav-item nav-link text-danger d-none d-lg-block px-4 ">Home</Link>           
                  <a className="nav-item nav-link pl-4 d-none d-lg-block" href="#about">About</a>  
                  {/* Begin Dropdown Button */}
                  <div className="dropdown px-4 d-none d-lg-block">
                     <a className="nav-item nav-link dropdown-toggle" href="!#" id="dropdownMenuLink" data-toggle="dropdown">Shop</a>
                     <div className="dropdown-menu text-center" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#fins">Fins</a>
                        <a className="dropdown-item" href="#boards">Boards</a>
                        <a className="dropdown-item" href="#neopreme">Neoprenes</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#accesories">Accesories</a>
                     </div>
                  </div>
                  {/* End Dropdown Button */}
                  <Link to={'/contact'} className="nav-item nav-link d-none d-lg-block pl-3">Contact</Link>           
               </div>
               <div className="text-center">
               <Link to={'/cart'} className="btn btn-outline-info text-uppercase">My Cart<i className="fa fa-cart-arrow-down ml-2"></i></Link>
               
               {login
               ?
                  <Link to={'/'} onClick={() => signOff()} className="btn btn-info text-uppercase ml-3">Sign off<i className="fa fa-sign-out ml-2"></i></Link>
               :     
                  <Link to={'/login'} className="btn btn-info text-uppercase ml-3">Login<i className="fa fa-user-circle ml-2"></i></Link>
               }
               </div> 
            
            </div>
         </nav>
      </div>
   )
}

export default Navbar;