import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import authContext from '../../context/auth/authContext';


const Register = (props) => {

   const AuthContext = useContext(authContext);
   const { logInUser } = AuthContext;

   // New User Sate
   const [ newUser, setNewUser ] = useState({
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
   });
 
   // Destructuring newUser State
   const { name, email, password, passwordConfirm } = newUser;

   
   const handleChange = e => {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
   }

   const handleSubmit = e => {
      e.preventDefault();

      // Check that there are no empty inputs
      // if (name.trim() === '' || email.trim() === '' || password.trim() === '' || passwordConfirm.trim() === '') {
      //    alert('All inputs are required!');
      //    return;
      // }

      // Verify that the passwords are the same
      // if (password !== passwordConfirm) {
      //    alert('Passwords do not match!');
      //    return;
      // }

      // Give the user login and change the LogIn button to Sign off button
      logInUser();

      // Redirect the user to the Home page.
      props.history.push('/');
   }


   return (
      <>
         <div className="container-fluid" id="register">
            <h2 className="display-4 text-center text-uppercase font-weight-bold border-bottom text-light mx-auto w-75 py-2">Surf Shop</h2>
            <form 
               className="col-sm-7 col-md-6 col-lg-5 col-xl-3 w-100 mx-auto mt-5"
               onSubmit={handleSubmit}   
            >
               <h2 className="text-center mb-4 text-white">Register</h2>
               
               {/* Name */}
               <div className="input-group">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-user-circle"></i></span></div>
                  <input 
                     className="form-control rounded-right" 
                     type="text"
                     name="name"
                     value={name}
                     placeholder="Name" required
                     onChange={handleChange} 
                  />
               </div>
               
               {/* Email */}
               <div className="input-group my-3">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-envelope"></i></span></div>
                  <input 
                     className="form-control rounded-right" 
                     type="email"
                     name="email"
                     value={email} 
                     placeholder="Email" required 
                     onChange={handleChange}
                  />
               </div>
               
               {/* Password */}
               <div className="input-group my-3">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-unlock-alt px-1"></i></span></div>
                  <input 
                     className="form-control rounded-right" 
                     type="password"
                     name="password"
                     value={password} 
                     placeholder="Password" required
                     onChange={handleChange}
                  />
               </div>
               
               {/* Confirm Password */}
               <div className="input-group my-3">
                  <div className="input-group-prepend"><span className="input-group-text"><i className="fa fa-unlock-alt px-1"></i></span></div>
                  <input 
                     className="form-control rounded-right" 
                     type="password" 
                     name="passwordConfirm"
                     vale={passwordConfirm}   
                     placeholder="Confirm Password" required 
                     onChange={handleChange}
                  />
               </div>
               
               {/* Terms and Conditions */}
               <div className="form-check mb-3 text-center">
                  <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                  <label className="form-check-label text-white" htmlFor="autoSizingCheck">I agree to the <a className="text-warning" href="!#">Terms and Conditions</a></label>
               </div>
               
               <button className="btn btn-primary btn-block rounded-pill text-uppercase mb-3">Register</button>
               <Link to={'/login'} className="d-block text-center text-white pb-4">Login</Link>
            </form>
         </div>
      </>
   )
}

export default Register;