import React from 'react';
import './headerStyle.css'
import Menus from './Menus';


function Head() {



  return (<div className='container-fluid fixed-top'>
      <div className='row header'>
        <div className="d-flex flex-row align-items-center">          
              <div className='col logoimage'>  
                <img src="https://il.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/campaign/3d-printing-18/3D-Homepage-Header.png?v=4" alt="header_logo" className='header_logo'></img><h1 id='logotitle'>PRINTING</h1>
              </div>
              <div>
              <p style={{color:'white'}}>{localStorage.getItem('name')}</p>  
              
             </div>
              </div> 
             
             
             
          </div >        
           <Menus fixed="top"/>
          
   

  </div>);
}

export default Head;
