import axios from 'axios';
import React, { useState } from 'react';
import {useFormik} from 'formik'
import *as yup from 'yup'
import {Link} from 'react-router-dom'
import env from "react-dotenv";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

function SignUp() {
  
  let history = useNavigate()
  
    const formik = useFormik({
      initialValues:{ 
        name:'',
        email:'',
        phone:'',
        password:''
      },
      validationSchema: yup.object({
      name:yup.string().required('Name is required'),
      email:yup.string().email('Invalid email address').required('Email is required'),
      phone:yup.string().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/gm, "Invalid Number").required('Mobile Number is required'),
      password:yup.string().required('Password is required')
      }),
      onSubmit:values=>{
        save(values, null, 2)
  
      }
    })
  
  // Adding data using axios
  let save = async(val)=>{
    try {
      let res =  await axios.post(env.API_URL+'users/register',val) 
      toast.success(res.data.message)    
      history('/')          
    } catch (error) {
      alert("error occured please contact the developer")
      console.log(error)
    } 
  }
  return (
    <div>
        <div className='container d-flex justify-content-center' style={{width:"400px"}}>
    <div className='row'>
    <img src='https://cloudcdn.taiwantradeshows.com.tw/2018/shoetech/e-letter2/images/300x250_en.gif' className="mx-auto" style={{height:"300px", padding:'0px'}}/>

    <h4 className='text-center contactTitle'>Sign Up</h4>
         <form  onSubmit={formik.handleSubmit}>
         <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Name:</label>
            <input id="name" name="name" type="text"
                  className="form-control" placeholder='Enter Name'
                  onChange={formik.handleChange}
                  value={formik.values.name}/>
        {formik.touched.name && formik.errors.name?(<div style={{color:"red"}}>{formik.errors.name}</div>):null}
            </div>

            <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Email ID:</label>
            <input id="email" name="email" type="email"
                  className="form-control" placeholder='Enter Email'
                  onChange={formik.handleChange}
                  value={formik.values.email}/>
        {formik.touched.email && formik.errors.email?(<div style={{color:"red"}}>{formik.errors.email}</div>):null}
            </div>

            <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Phone Number</label>
            <input id="phone" name="phone" type="mobile"
                  className="form-control" placeholder='Enter phone'
                  onChange={formik.handleChange}
                  value={formik.values.phone}/>            
        {formik.touched.phone && formik.errors.phone?(<div style={{color:"red"}}>{formik.errors.phone}</div>):null}
            </div>

            <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Password:</label>
            <input id="password" name="password" type="text"
                  className="form-control" placeholder='Enter password'
                  onChange={formik.handleChange}
                  value={formik.values.password}/>
        {formik.touched.password && formik.errors.password?(<div style={{color:"red"}}>{formik.errors.password}</div>):null}
            </div>
            
            <div className="modal-footer">
            
            <div class="mx-auto">

            
            <button type='submit' className="btn btn-primary" >Sign Up</button>&nbsp;&nbsp;
            <Link to="/">                      
                 <button className="btn btn-secondary">Sign In</button>
            </Link>
            </div>

            
            
        </div>
        <br/>
        </form>

        </div>
        </div>

    </div>
  )
}

export default SignUp