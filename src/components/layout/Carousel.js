import React from 'react';


const Carousel = () => {
   return (
      <div className="container">
         <div className="carousel slide mt-1" id="carouselExampleControls" data-ride="carousel">
            <div className="carousel-inner shadow-lg rounded">
               <div className="carousel-item active">
                  <img className="d-block w-100" src="images/carousel_1.jpg" alt="Img-1"/>
                  <div className="carousel-caption d-none d-lg-block">
                     <p className="lead mb-4 font-weight-normal">- Great Surfing Spots Near Amazing Costa Rica -</p>
                  </div>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100" src="images/carousel_2.jpg" alt="Img-2"/>
                  <div className="carousel-caption d-none d-lg-block">
                     <p className="lead mb-4 font-weight-normal">- A Once In A Lifetime Look at the World’s Best Waves -</p>
                  </div>
               </div>
               <div className="carousel-item">
                  <img className="d-block w-100" src="images/carousel_3.jpg" alt="Img-3"/>
                  <div className="carousel-caption d-none d-lg-block">
                     <p className="lead mb-4 text-dark font-weight-normal">- Mentawai Islands Offer Some 400 Surfing Spots -</p>
                     {/* <button className="btn btn-outline-light btn-lg text-uppercase">Shop Now <i className="fa fa-cart-arrow-down ml-2"></i></button> */}
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