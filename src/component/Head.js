import React from 'react';
import './headerStyle.css'
import Menus from './Menus';


function Head() {
  return (<div className='container-fluid'>
      <div className='row header'>           
              <div className='col logoimage'>  
                <img src="https://il.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/campaign/3d-printing-18/3D-Homepage-Header.png?v=4" alt="header_logo" className='header_logo'></img><h1 id='logotitle'>PRINTING</h1>
              </div>
             
          </div>        
           <Menus fixed="top"/>

  </div>);
}

export default Head;
