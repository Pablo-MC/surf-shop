import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// import shopContext from '../../context/shop/shopContext';


const Login = (props) => {
   
   // const ShopContext = useContext(shopContext);
   // const { login } = ShopContext;


   const [ user, setUser ] = useState({
      email: '',
      password: ''
   });

   // Destructuring user
   const { email, password } = user;

   const handleChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
   }


   const handleSubmit = e => {
      e.preventDefault();

      // Validar que no haya campos vacios
      // if (email.trim() === '' || password.trim() === '') {
      //    mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      //    return;
      // }

      
      // Cambio el state de Login
      

      // Redirijo al usuario a la pagina de Home.
      props.history.push('/');
   }   

   
   return (
      <>
         <div className="container-fluid" id="login">
            <h2 className="display-4 text-center text-uppercase font-weight-bold border-bottom text-light mx-auto w-75 py-2">Surf Shop</h2> 
            <form 
               className="col-sm-7 col-md-6 col-lg-5 col-xl-3 w-100 mx-auto mt-5"
               onSubmit={handleSubmit}
            >
               <h2 className="text-center mb-4 text-white">Login</h2>
               {/* Email */}
               <div className="input-group">
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
               {/* Remember me */}
               <div className="form-check mb-3 text-center">
                  <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                  <label className="form-check-label text-white" for="autoSizingCheck">Remember me</label>
               </div>
         
               <button className="btn btn-primary btn-block rounded-pill text-uppercase mb-3" type="submit">Login</button>
               <Link to={'/register'} className="d-block text-center text-white pb-4">Create Account</Link>           
            </form>
         </div>
      </>
   )
}

export default Login;

