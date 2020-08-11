import React from 'react';
import Title from './Title';

const About = () => {
   return (
      <div className="container rounded-top shadow-lg d-none d-md-block" id='about'>
         <Title name={'About'}/>
         <p className="lead text-justify px-5 pt-3 pb-5 mb-0"><span className="h2 pr-1">&#x275b;&#x275b;</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi perferendis officiis omnis atque sapiente ut fugiat quo, quaerat architecto alias, odio quos distinctio laborum blanditiis qui aliquam doloribus minus.lorel Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati deleniti quo dicta corrupti ipsum architecto maxime reprehenderit. Quas cum labore necessitatibus eaque consectetur maiores beatae delectus molestias magni!.</p>
         <a className="d-block text-center pb-3" href="/">
            <img src="images/logo_white.png" width="100" alt="logo_white" />
         </a>
      </div>
   )
}

export default About;