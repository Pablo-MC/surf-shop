import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
   return (
      <>
         <div className="container-fluid" id="login">
            <h2 className="display-4 text-center text-uppercase font-weight-bold border-bottom text-light mx-auto w-75 py-2">Surf Shop</h2>
            <form className="col-sm-7 col-md-6 col-lg-5 col-xl-4 w-100 mx-auto mt-5">
               <h2 className="text-center mb-4 text-white">Register</h2>
               <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                  <input className="form-control rounded-right" type="text" placeholder="Name" required />
               </div>
               <div className="input-group my-3">
                  <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                  <input className="form-control rounded-right" type="email" placeholder="Email" required />
               </div>
               <div className="input-group my-3">
                  <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                  <input className="form-control rounded-right" type="password" placeholder="Password" required />
               </div>
               <div className="input-group my-3">
                  <div className="input-group-prepend"><span className="input-group-text">@</span></div>
                  <input className="form-control rounded-right" type="password" placeholder="Confirm Password" required />
               </div>
               <div className="form-check mb-3 text-center">
                  <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                  <label className="form-check-label text-white" for="autoSizingCheck">I agree to the <a className="text-warning" href="#">Terms and Conditions</a></label>
               </div>
               <button className="btn btn-primary btn-block mb-3">Register</button>
               <Link to={'/login'} className="d-block text-center text-white">Login</Link>
            </form>
         </div>
      </>
   )
}

export default Register;