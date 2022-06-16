import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Menus() {

  let history = useNavigate()
  const [logout, setLogout] = useState(false)
  const [isadmin, setIsadmin] = useState(false)

  useEffect(() => {
    if(!localStorage.getItem('auth'))   history('/login')
  }, [logout])

  useEffect(() => {
    if(localStorage.getItem('admin') === "true"){
      setIsadmin(true)
    }
    },[])

  return <div className='row '>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/Home">                      
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </Link> 
                    </li>
                    
                    <li className="nav-item">
                    <Link to="/Categories">                      
                      <a className="nav-link active" aria-current="page" href="#">Categories</a>
                      </Link> 
                    </li>
                    
                    {isadmin?     
                    <li className="nav-item">
                    <Link to="/AddModel">                      
                      <a className="nav-link active" aria-current="page" href="#">Add Model</a>
                      </Link> 
                    </li>:""}

                    <li className="nav-item">
                    <Link to="/Profile">                      
                      <a className="nav-link active" aria-current="page" href="#">Profile</a>
                      </Link> 
                    </li>
                  </ul>
                  
                </div>
              </div>
              <button type="button" class="btn btn-primary" onClick={(e)=>{
               e.preventDefault()
               localStorage.removeItem('auth')
               localStorage.removeItem('email')
               localStorage.removeItem('phone')
               localStorage.removeItem('name')
               localStorage.removeItem('admin')
			   localStorage.removeItem('id')
               setLogout(true)
             }}>Logout</button>
            </nav>
            

            
  </div>;
}

export default Menus;
