import React from 'react';


const Carousel = () => {
   return (
      <div className="container">
         <div id="carouselExampleControls" className="carousel slide mt-1" data-ride="carousel">
            <div className="carousel-inner shadow-lg rounded">
               <div className="carousel-item active">
                  <img src="images/carousel_1.jpg" className="d-block w-100" alt="Img-1"/>
                  <div className="carousel-caption d-none d-lg-block">
                     {/* <h5 className="display-1">First slide label</h5> */}
                     <p className="lead mb-4">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     <button className="btn btn-outline-light btn-lg text-uppercase mb-5">Shop Now <i className="fa fa-cart-arrow-down ml-2"></i></button>
                  </div>
               </div>
               <div className="carousel-item">
                  <img src="images/carousel_2.jpg" className="d-block w-100" alt="Img-2"/>
                  <div className="carousel-caption d-none d-lg-block">
                     {/* <h5 className="display-1">First slide label</h5> */}
                     <p className="lead mb-4">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     <button className="btn btn-outline-light btn-lg text-uppercase mb-5">Shop Now <i className="fa fa-cart-arrow-down ml-2"></i></button>
                  </div>
               </div>
               <div className="carousel-item">
                  <img src="images/carousel_3.jpg" className="d-block w-100" alt="Img-3"/>
                  <div className="carousel-caption d-none d-lg-block">
                     {/* <h5 className="display-1">First slide label</h5> */}
                     <p className="lead mb-4">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     <button className="btn btn-outline-light btn-lg text-uppercase mb-5">Shop Now <i className="fa fa-cart-arrow-down ml-2"></i></button>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="sr-only">Next</span>
            </a>
         </div>   
      </div>
   )
}

export default Carousel;