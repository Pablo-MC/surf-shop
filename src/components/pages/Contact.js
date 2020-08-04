import React from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {
   return (
      <>
         <div className="container-fluid" id="contact">
            <h2 className="display-4 text-center text-uppercase font-weight-bold border-bottom border-danger mx-auto w-75 py-2">Surf Shop</h2> 
            <div className="text-center">   
               <Link to={'/'} className="btn btn-danger text-uppercase text-white my-4">Home <i className="fa fa-home ml-2"></i></Link>
            </div>
            <form className="col-9 col-md-10 col-lg-10 col-xl-7 w-100 mx-auto py-4">
               <div className="form-row text-white lead font-weight-normal">
                  <div className="form-group col-md-4">
                     <label>Name</label>
                     <input className="form-control form-control-lg" type="text" required />
                  </div>
                  <div className="form-group col-md-4">
                     <label>Email</label>
                     <input className="form-control form-control-lg" type="email" required />
                  </div>
                  <div className="form-group col-md-4">
                     <label>Phone</label>
                     <input className="form-control form-control-lg" type="number" />
                  </div>
                  <div className="form-group col-md-12 pt-2">
                     <textarea className="form-control form-control-lg" rows="6" placeholder="Message..."></textarea>
                  </div>
               </div>  
               <button className="btn btn-success d-block mx-auto text-uppercase mt-2 py-2" type="submit">Contact Us <i className="fa fa-paper-plane-o ml-2"></i></button>
            </form>
         </div>
      </>
   )
}

export default Contact;