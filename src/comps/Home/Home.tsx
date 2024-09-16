import React, { FC } from 'react';
import { HomeWrapper } from './Home.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
const useEffect = () => {

}

return (
<HomeWrapper>
   <div className='App full-height'>
     <div className='container-fluid bg-dark'>
         <div className='row'>
           <div className='col-md-2'></div>
           <div className="col-md-8 ">
               <div className='my-4 display-1 text-center'>
                 Hello!
                 
               </div>
               <hr/>
               <div className='mt-3 display-5 text-center pb-5'>
                 Coming Soon

             </div>
           </div>
           <div className='col-md-2'></div>
         </div>
       </div>
   </div>
</HomeWrapper>

   )
   
}



export default Home;
