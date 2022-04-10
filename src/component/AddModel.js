import axios from 'axios';
import {React} from 'react';
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import *as yup from 'yup'
import Head from './Head';
import env from "react-dotenv";

function AddModel() {
  
  let history = useNavigate()

  const formik = useFormik({
    initialValues:{         
      Imageone:'',
      Imagetwo:'',
      Imagethree:'',
      Name:'', 
      width:'',
      height:'',
      Material:'',
      Age:'',
      Assembly:'',
      weight:'',
      Price:'',
      Category:''
    },
    validationSchema: yup.object({
      Imageone:yup.string().required('Image link is required'),
      Imagetwo:yup.string(),
      Imagethree:yup.string(),
      Name:yup.string().required('Name is required'), 
      width:yup.string().required('Width this required'),
      height:yup.string().required('Height is required'),
      Material:yup.string().required('Material type is required'),
      Age:yup.string().required('Age is required'),
      Assembly:yup.string().required('Assembly is required'),
      weight:yup.string().required('Weight is required'),
      Price:yup.string().required('Price is required'),
      Category:yup.string().required('Category is required')
    }),
    onSubmit:values=>{
      save(values, null, 2)
    }
  })
  
//Adding data using axios
  let save = async(data)=>{
    try {
      let res =  await axios.post(env.API_URL+'addmodel',data)
        console.log(res)
    history('/Categories')
      
    } catch (error) {
      alert("error occured please contact the developer")
      console.log(error)
    }
    
  }

  return <div>
    <Head></Head>
    <div className='container'>  
              <form className='row g-3' onSubmit={formik.handleSubmit}>
              <h4>Add/Update Model</h4> 
          <div className="col-md-6">
                <label htmlFor="Imageone">Image 1 URL</label>
                <input id="Imageone" name="Imageone" type="text"
                  className="form-control" placeholder='Enter Imageone'
                  onChange={formik.handleChange}
                  value={formik.values.Imageone}/>
                  {formik.touched.Imageone && formik.errors.Imageone?(<div style={{color:"red"}}>{formik.errors.Imageone}</div>
                  ):null}
            </div>
            
            <div className="col-md-6">     

              <label htmlFor="Name">Name</label>
                <input id="Name" name="Name" type="text"
                  className="form-control" placeholder='Enter Name'
                  onChange={formik.handleChange}
                  value={formik.values.Name}/>
                  {formik.touched.Name && formik.errors.Name?(<div style={{color:"red"}}>{formik.errors.Name}</div>
                  ):null}
             </div>

             <div className="col-md-6">
               
              <label htmlFor="width">Width</label>
                <input id="width" name="width" type="text"
                  className="form-control" placeholder='Enter width'
                  onChange={formik.handleChange}
                  value={formik.values.width}/>
                  {formik.touched.height && formik.errors.width?(<div style={{color:"red"}}>{formik.errors.width}</div>
                  ):null}


</div>
            <div className="col-md-6">
               
              <label htmlFor="height">height</label>
                <input id="height" name="height" type="text"
                  className="form-control" placeholder='Enter height'
                  onChange={formik.handleChange}
                  value={formik.values.height}/>
                  {formik.touched.height && formik.errors.height?(<div style={{color:"red"}}>{formik.errors.height}</div>
                  ):null}


</div>
            <div className="col-md-6">
            <label htmlFor="Material">Material</label>
                <input id="Material" name="Material" type="text"
                  className="form-control" placeholder='Enter Material'
                  onChange={formik.handleChange}
                  value={formik.values.Material}/>
                  {formik.touched.Material && formik.errors.Material?(<div style={{color:"red"}}>{formik.errors.Material}</div>
                  ):null}
 </div>
            <div className="col-md-6">
            <label htmlFor="Age">Age</label>
                <input id="Age" name="Age" type="text"
                  className="form-control" placeholder='Enter Age'
                  onChange={formik.handleChange}
                  value={formik.values.Age}/>
                  {formik.touched.Age && formik.errors.Age?(<div style={{color:"red"}}>{formik.errors.Age}</div>
                  ):null}
 </div>
            
<div className="col-md-6">
    <label htmlFor="moviename" className="form-label" style={{ display: 'block' }}>
    Assembly required
      </label>
      <select
        name="Assembly"
        id="Assembly"
        className="form-control" placeholder='Select Assembly'
        value={formik.values.Assembly}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        style={{ display: 'block' }}
      >
        <option value="" label="Select option" />
        
        <option value='Yes' label='Yes' />
        <option value='No' label='No' />
       
      </select>

       {formik.touched.Assembly && formik.errors.Assembly?(<div style={{color:"red"}}>{formik.errors.Assembly}</div>):null}
  
  </div>

 <div className="col-md-6">
            <label htmlFor="weight">Weight</label>
                <input id="weight" name="weight" type="text"
                  className="form-control" placeholder='Enter weight'
                  onChange={formik.handleChange}
                  value={formik.values.weight}/>
                  {formik.touched.weight && formik.errors.weight?(<div style={{color:"red"}}>{formik.errors.weight}</div>
                  ):null}
 </div>

            <div className="col-md-6">
              <label htmlFor="Price">Price</label>
                <input id="Price" name="Price" type="text"
                  className="form-control" placeholder='Enter Price'
                  onChange={formik.handleChange}
                  value={formik.values.Price}/>
                  {formik.touched.Price && formik.errors.Price?(<div style={{color:"red"}}>{formik.errors.Price}</div>
                  ):null}

</div>


<div className="col-md-6">
    <label htmlFor="Category" className="form-label" style={{ display: 'block' }}>
        Select Category Name
      </label>
      <select
        name="Category"
        id="Category"
        className="form-control" placeholder='Enter movie Name'
        value={formik.values.Category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        style={{ display: 'block' }}
      >
        <option value="" label="Select Category" />
       
      <option value='Cars and motor bike' label='Cars and motor bike' />
      <option value='Action figure' label='Action figure'></option>
      <option value='Anime figure' label='Anime figure'></option>
      <option value='Gift material' label='Gift material'></option>
      <option value='Antique models' label='Antique models'></option>
      <option value='Cartoon models' label='Cartoon models'></option>
      <option value='Custom search' label='Custom search'></option>
     
      </select>

       {formik.touched.Category && formik.errors.Category?(<div style={{color:"red"}}>{formik.errors.Category}</div>):null}
  
  </div>

           
                  <button type='submit' className='btn btn-primary'>
                  Add Model
                  </button>

              </form>

   
  </div>
  </div>
  // </div>
}

export default AddModel;

