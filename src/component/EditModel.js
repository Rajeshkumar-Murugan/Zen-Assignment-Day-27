import axios from 'axios';
import {React, useState, useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom'
import env from "react-dotenv";

function EditModel() {
  
    useEffect(() => {
        
            if(params.id){
              getData();
            }
    }, [])



  let history = useNavigate()
  let params = useParams()
     
  let [Imageone,setImageone]= useState("");
  let [Imagetwo,setImagetwo]= useState("");
  let [Imagethree,setImagethree]= useState("");
  let [Name,setName]= useState("");
  let [width,setwidth]= useState("");
  let [height,setheight]= useState("");
  let [Material,setMaterial]= useState("");
  let [Age,setAge]= useState("");
  let [Assembly,setAssembly]= useState("");
  let [weight,setweight]= useState("");
  let [Price,setPrice]= useState("");
  let [Category,setCategory]= useState("");
  

 
   //Get data of specific id using axios

   let getData = async()=>{
    try {
        let res= await axios.get(env.API_URL+'model/'+params.id)  
        let Editvalues = res.data.data[0]

        setImageone(Editvalues.Imageone)
        setImagetwo(Editvalues.Imagetwo)
        setImagethree(Editvalues.Imagethree)
        setName(Editvalues.Name)
        setwidth(Editvalues.width)
        setheight(Editvalues.height)
        setMaterial(Editvalues.Material)
        setAge(Editvalues.Age)
        setAssembly(Editvalues.Assembly)
        setweight(Editvalues.weight)
        setPrice(Editvalues.Price)
        setCategory(Editvalues.Category)
 
    } catch (error) {
      alert("Error occured while getting the data please contact developer")
        console.log(error)
    }

  }

 
// Edit and save data using axios
let save=async ()=>{
try {
  let res = await axios.put(env.API_URL+'edit-model/'+params.id,{      
  Imageone,Imagetwo,Imagethree,Name, width,height,Material,Age,Assembly,weight,Price,Category         
    })
    history('/Categories')
} catch (error) {
  alert("Error occured while updating the data please contact the developer")
      console.log(error)
}

}


  return <div className='container'>
    
      <div className="row g-3">
      <h4>Edit Model</h4>
  <div className="col-md-6">
    <label htmlFor="Image_1" className="form-label">Image 1 URL</label>
    <input type="text" value={Imageone} className="form-control" id="Image_1" onChange={(e)=>setImageone(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="Image_2" className="form-label">Image 2 URL</label>
    <input type="text" value={Imagetwo} className="form-control" id="Image_2"onChange={(e)=>setImagetwo(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="Image_3" className="form-label">Image 3 URL</label>
    <input type="text" value={Imagethree} className="form-control" id="Image_3" onChange={(e)=>setImagethree(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" value={Name} className="form-control" id="Name" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="Width" className="form-label">Width</label>
    <input type="text" value={width} className="form-control" id="Width" onChange={(e)=>setwidth(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="Height" className="form-label">Height</label>
    <input type="text" value={height} className="form-control" id="Height" onChange={(e)=>setheight(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="Material" className="form-label">Material</label>
    <input type="text" value={Material} className="form-control" id="Material"onChange={(e)=>setMaterial(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="Age" className="form-label">Age</label>
    <input type="text" value={Age} className="form-control" id="Age" onChange={(e)=>setAge(e.target.value)}/>
  </div>

  <div className='col-md-6'>
  <label htmlFor="Category" className="form-label">Assembly Required</label>
    <select id="Category" value={Assembly} className="form-select" onChange={(e)=>setAssembly(e.target.value)}>
      <option defaultValue>Choose...</option>
      <option>Yes</option>
      <option>No</option>
      </select>
      
  </div>


   <div className="col-md-6">
    <label htmlFor="Weight" className="form-label">Weight</label>
    <input type="text" value={weight} className="form-control" id="Weight"onChange={(e)=>setweight(e.target.value)}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="Price" className="form-label">Price</label>
    <input type="text" value={Price} className="form-control" id="Price"onChange={(e)=>setPrice(e.target.value)}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="Category" className="form-label">Category</label>
    <select id="Category" value={Category} className="form-select" onChange={(e)=>setCategory(e.target.value)}>
      <option defaultValue>Choose...</option>
      <option>Action figure</option>
      <option>Cars and motor bike</option>
      <option>Anime figure</option>
      <option>Gift material</option>
      <option>Antique models</option>
      <option>Cartoon models</option>
      <option>Custom search</option>
    </select>
  </div>
 
  <div className="col-12 d-grid gap-2">
    <button className="btn btn-primary" onClick={save}>Add Model</button>
  </div>
</div>

  </div>;
}

export default EditModel;
