import React from 'react';
import Title from './Title';

const About = () => {
   return (
      <div className="container rounded shadow-lg" id='about'>
         <Title name={'About'}/>
         <p className="lead text-justify p-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi perferendis officiis omnis atque sapiente ut fugiat quo, quaerat architecto alias, odio quos distinctio laborum blanditiis qui aliquam doloribus minus.lorel Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati deleniti quo dicta corrupti ipsum architecto maxime reprehenderit. Quas cum labore necessitatibus eaque consectetur maiores beatae delectus molestias magni ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Por voluptates provident assumenda non iste aliquid, nostrum hic soluta incidunt itaque impedit voluptas saepe tenetur, illum expedita quas dolorum dolorem deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ad enim illum odit recusandae numquam maxime laudantium eos dignissimos ea laboriosam vero ratione et exercitationem quod, commodi, maiores nobis voluptates!</p>
         <a className="d-block text-center pb-3" href="/">
            <img src="images/logo_about.png" width="100" alt="logo" />
         </a>
      </div>
   )
}

export default About;