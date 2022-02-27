import './App.css';
import Head from './component/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Categories from './component/Categories';
import Home from './component/Home';
import AddModel from './component/AddModel';
import React from 'react';
import EditModel from './component/EditModel';


export const Modelcontext = React.createContext();

function App() {

  return (
    <Router>
     
     <Head/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/EditModel/:id' element={<EditModel/>}></Route>
        <Route path='/AddModel' element={<AddModel/>}></Route>
        <Route path='/Categories' element={<Categories/>}></Route>
        
        

      </Routes>
      <Footer/> 
     
      </Router>
  );

}

export default App;

