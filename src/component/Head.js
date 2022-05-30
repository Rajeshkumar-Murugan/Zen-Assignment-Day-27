import React,{ useState, useEffect } from 'react';
import './headerStyle.css'
import Menus from './Menus';
import {useNavigate} from 'react-router-dom'

function Head() {
  let history = useNavigate()
  const [logout, setLogout] = useState(false)

  useEffect(() => {
    if(!localStorage.getItem('auth'))   history('/login')
  }, [logout])


  return (<div className='container-fluid'>
      <div className='row header'>
        <div className="d-flex flex-row align-items-center">          
              <div className='col logoimage'>  
                <img src="https://il.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset/images/common/campaign/3d-printing-18/3D-Homepage-Header.png?v=4" alt="header_logo" className='header_logo'></img><h1 id='logotitle'>PRINTING</h1>
              </div>
              <div>
              <p style={{color:'white'}}>{localStorage.getItem('name')}</p>  
              <button type="button" class="btn btn-primary" onClick={(e)=>{
               e.preventDefault()
               localStorage.removeItem('auth')
               localStorage.removeItem('email')
               localStorage.removeItem('phone')
               localStorage.removeItem('name')
               setLogout(true)
             }}>Logout</button>
             </div>
              </div> 
             
             
             
          </div>        
           <Menus fixed="top"/>

  </div>);
}

export default Head;
