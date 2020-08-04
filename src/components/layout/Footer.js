import React from 'react';


const Footer = () => {
   return (
      <div className="container text-success mb-0 pt-5" id="footer">
         <div className="text-center">
            <a href="/"><i className="fa fa-facebook"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-instagram"></i></a>
            <a href="/"><i className="fa fa-google"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
         </div>
         <p className="lead text-center py-4 mb-0"> &copy; 2020 E-commerce by Pablo Martín Cruz</p>
      </div>
   )
}

export default Footer;