import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
   return (
      <>
         <div className="container-fluid" id="login">
            <h2 className="display-4 text-center text-uppercase font-weight-bold border-bottom text-light mx-auto w-75 py-2">Surf Shop</h2>
            <form className="col-sm-7 col-md-6 col-lg-5 col-xl-3 w-100 mx-auto mt-5">
               <h2 className="text-center mb-4 text-white">Register</h2>
               {/* Name */}
               <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-user-circle"></i></span></div>
                  <input className="form-control rounded-right" type="text" placeholder="Name" required />
               </div>
               {/* Email */}
               <div className="input-group my-3">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-envelope"></i></span></div>
                  <input className="form-control rounded-right" type="email" placeholder="Email" required />
               </div>
               {/* Password */}
               <div className="input-group my-3">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-unlock-alt px-1"></i></span></div>
                  <input className="form-control rounded-right" type="password" placeholder="Password" required />
               </div>
               {/* Confirm Password */}
               <div className="input-group my-3">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-unlock-alt px-1"></i></span></div>
                  <input className="form-control rounded-right" type="password" placeholder="Confirm Password" required />
               </div>
               {/* Terms and Conditions */}
               <div className="form-check mb-3 text-center">
                  <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                  <label className="form-check-label text-white" for="autoSizingCheck">I agree to the <a className="text-warning" href="#">Terms and Conditions</a></label>
               </div>
               
               <button className="btn btn-primary btn-block rounded-pill text-uppercase mb-3">Register</button>
               <Link to={'/login'} className="d-block text-center text-white pb-4">Login</Link>
            </form>
         </div>
      </>
   )
}

export default Register;