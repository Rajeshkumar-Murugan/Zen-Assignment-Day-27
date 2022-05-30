import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useFormik} from 'formik'
import *as yup from 'yup'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import env from "react-dotenv";
import { toast } from 'react-toastify';

 


function Signin() {
  let history = useNavigate()

    useEffect(() => {
      if(localStorage.getItem('auth')) history('/Home')
    }, [])

    const formik = useFormik({
        initialValues:{ 
          email:'',
          password:''
        },
        validationSchema: yup.object({
        email:yup.string().email('Invalid email address').required('Email is required'),
        password:yup.string().required('Password is required')
        }),
        onSubmit:values=>{
          loggedin(values, null, 2)
          
        }
      })

      
      

      let loggedin = async(val)=>{  
        try {
          let res =  await axios.post(env.API_URL+'users/login',val)
            if(res)
            {
              
              if(res.data.message === "Login successfully"){              
                toast.success(res.data.message)
                console.log(res.data)
                localStorage.setItem('name',res.data.data.name)
                localStorage.setItem('email',res.data.data.email)
                localStorage.setItem('phone',res.data.data.phone)
                localStorage.setItem('auth', true)
                history('/Home')
              }
              else{
                  
                  toast.error(res.data.message)
              }
                   
            }
            else{
              toast.error(res.data.message)        
            } 
        } catch (error) {
          alert("error occured please contact the developer")
          console.log(error)
        } 
      }
    
      const forms = useFormik({
        initialValues:{ 
          email:''
        },
        validationSchema: yup.object({
        email:yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSubmit:values=>{
            // alert(values.email)
            
            let val = values.email
            forgetpwd(val, null, 2)
        }
      })

      const forgetpwd = async(data) => {
        var obj = JSON.stringify({ email: data});
        let object = JSON.parse(obj)
       
        try {
          let res =  await axios.post(env.API_URL+'users/forget-password',object)
          
          if(res == 'Please check mail to reset password'){
            toast.success(res.data.message)
          }
          else{
            toast.error(res.data.message)
          }
        } catch (error) {
          alert("error occured please contact the developer")
          console.log(error)
          
        } 
      }

  return (
    <div>
       
<div className='container d-flex justify-content-center' style={{width:"400px"}}>
  
    <div className='row'>
    <img src='https://cdn.dribbble.com/users/102974/screenshots/1976442/3dprinter_1.gif' class="img-fluid" alt="Responsive image" style={{height:"300px", padding:'0px'}}/>

    <h4 className='text-center contactTitle'>Sign In</h4> 
     <form onSubmit={formik.handleSubmit} name="loginform">
            <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Email ID:</label>
            <input id="email" name="email" type="email"
                  className="form-control" placeholder='Enter Email'
                  onChange={formik.handleChange}
                  value={formik.values.email}/>
        {formik.touched.email && formik.errors.email?(<div style={{color:"red"}}>{formik.errors.email}</div>):null}

            </div>
            <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Password:</label>
            <input id="password" name="password" type="text"
                  className="form-control" placeholder='Enter password'
                  onChange={formik.handleChange}
                  value={formik.values.password}/>
        {formik.touched.password && formik.errors.password?(<div style={{color:"red"}}>{formik.errors.password}</div>):null}
            </div>
            
            
            
            <a href='#' data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="text-decoration-none">
                Forget password
                </a>

            
            <div className="modal-footer"> </div>
            <div className="d-flex justify-content-evenly">

            
            <button type="sumbit" className="btn btn-primary">Login</button>
            <Link to="/Sign-up">                      
                 <button className="btn btn-secondary">Sign Up</button>
            </Link>
            </div>
            <br/> 
            <br/> 
        </form>

        <div>
                

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Forget Password</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
    <form onSubmit={forms.handleSubmit} name="loginform">
    <div className="modal-body ">
        <div className='d-flex justify-content-center'>
        <img src='http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2018/03/16/VpSrwGLX9OChNxj7qKY16tFP/reset_password/images/icon_lock.gif'/>
        </div>

        <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">Email ID:</label>
        <input id="email" name="email" type="email"
            className="form-control" placeholder='Enter Email'
            onChange={forms.handleChange}
            value={forms.values.email}/>
            {forms.touched.email && forms.errors.email?(<div style={{color:"red"}}>{forms.errors.email}</div>):null}
            
        </div>
        
    </div>
                    <div className="modal-footer">
                       
                     <button type="sumbit" className="btn btn-primary" >Check</button> 
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                    </div>
                    </form>
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>
     
        
    </div>
  )
}

export default Signin