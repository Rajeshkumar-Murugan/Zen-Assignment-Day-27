import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Profiler } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Categories from './component/Categories';
import Home from './component/Home';
import AddModel from './component/AddModel';
import EditModel from './component/EditModel';
import Profile from './component/Profile';
import Signin from './component/Signin';
import SignUp from './component/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (<>

<Router>
     
     
     
     <Routes>
     
     <Route path='/' element={<Signin/>}></Route>
     <Route path='/login' element={<Signin/>}></Route>
     <Route path='/Sign-up' element={<SignUp/>}></Route>
       <Route path='/Home' element={<Home/>}></Route>
       <Route path='/EditModel/:id' element={<EditModel/>}></Route>
       <Route path='/AddModel' element={<AddModel/>}></Route>
       <Route path='/Categories' element={<Categories/>}></Route>
       <Route path='/Profile' element={<Profile/>}></Route>
      
     </Routes>
    

     </Router>
     <ToastContainer/>
     
     </>
  );

}

export default App;

