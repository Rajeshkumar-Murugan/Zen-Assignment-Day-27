import React from 'react';
import ControlledCarousel from './carousel_img'
import 'bootstrap/dist/css/bootstrap.min.css';

import NewestPrint from './NewestPrint';
import BestSeller from './BestSeller';

function Home() {
  return <div>
      <div id='styleprop'>   
     <div className='container'>          
         <ControlledCarousel />
         <div className='row'>            
           <div className='col-6 newestPrint'>
            <NewestPrint/>
           </div>
           <div className='col-6 bestSeller'>
            <BestSeller/> 
           </div>
         </div>         
      </div>
      
     </div>
  </div>;
}

export default Home;
