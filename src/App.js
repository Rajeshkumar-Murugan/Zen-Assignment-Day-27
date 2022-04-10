import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Categories from './component/Categories';
import Home from './component/Home';
import AddModel from './component/AddModel';
import EditModel from './component/EditModel';
import Signin from './component/Signin';
import SignUp from './component/SignUp';
import env from "react-dotenv";



function App() {
  console.log(env.API_URL)
  return (

<Router>
     
     
     
     <Routes>
     
     <Route path='/' element={<Signin/>}></Route>
     <Route path='/Sign-up' element={<SignUp/>}></Route>
       <Route path='/Home' element={<Home/>}></Route>
       <Route path='/EditModel/:id' element={<EditModel/>}></Route>
       <Route path='/AddModel' element={<AddModel/>}></Route>
       <Route path='/Categories' element={<Categories/>}></Route>
       
       

     </Routes>
     
    
     </Router>
     
     
  );

}

export default App;

