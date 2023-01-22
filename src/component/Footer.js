import {React, useState} from 'react';
import {useFormik} from 'formik'
import *as yup from 'yup'
import './Footerstyle.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import env from "react-dotenv";

function Footer() {
  const [Loading, setLoading] = useState(`Send Mail`)

  const formik = useFormik({
    initialValues:{         
      name:'',
      mobile:'',
      email:'',
      address:'',
      message:'', 
      upload:''
    },
    validationSchema: yup.object({
      name:yup.string().required('Name is required'),
      mobile:yup.string().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/gm, "Invalid Number").required('Mobile Number is required'),
      email:yup.string().email('Invalid email address').required('Email is required'),
      message:yup.string().required('Message is required'),
      
      
    }),
    onSubmit:values=>{
      sendmail(values, null, 2)
      setLoading(<div class="spinner-border text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>)
    }
  })

  let sendmail = async(val)=>{  
    try {
      let res =  await axios.post(env.API_URL+'users/Message',val)
      toast.success('Mail sent') 
      setLoading('Send Mail')
    } catch (error) {
      toast.error('Mail not sent') 
      setLoading('Send Mail')
      console.log(error)
    } 
  }


  return <div className=' footer'>    
        <div className='container' > 
        <div className='row' id="contactUs"> 
        <h4 className='text-center contactTitle'>Contact us</h4>           
              <div className='col-12 col-md-6' id='contactForm'>

              <form onSubmit={formik.handleSubmit}>
                <label for="name">Name</label>
                <input id="name" name="name" type="text"
                  className="form-control" placeholder='Enter Name'
                  onChange={formik.handleChange}
                  value={formik.values.name}/>
                  {formik.touched.name && formik.errors.name?(<div style={{color:"red"}}>{formik.errors.name}</div>
                  ):null}

                <label for="name">Mobile</label>
                <input id="mobile" name="mobile" type="mobile"
                  className="form-control" placeholder='Enter Mobile'
                  onChange={formik.handleChange}
                  value={formik.values.mobile}/>
                  {formik.touched.mobile && formik.errors.mobile?(<div style={{color:"red"}}>{formik.errors.mobile}</div>
                  ):null}

              <label for="name">Email</label>
                <input id="email" name="email" type="email"
                  className="form-control" placeholder='Enter Email'
                  onChange={formik.handleChange}
                  value={formik.values.email}/>
                  {formik.touched.email && formik.errors.email?(<div style={{color:"red"}}>{formik.errors.email}</div>
                  ):null}
              

              <label for="address">Address</label>
                <textarea id="address" name="address" type="text"
                  className="form-control" placeholder='Enter address'
                  onChange={formik.handleChange}
                  value={formik.values.address}/>
                  
              
              <label for="message">Message</label>
                <textarea id="message" name="message" type="text"
                  className="form-control" placeholder='Enter message'
                  onChange={formik.handleChange}
                  value={formik.values.message}/>
                  {formik.touched.message && formik.errors.message?(<div style={{color:"red"}}>{formik.errors.message}</div>
                  ):null}

                  <br/>
                  <div className='mx-auto' style={{width:150}}>
                  <button type='submit' className='btn btn-primary'>
                  {Loading}
                  </button>
                  </div>
                

              </form>

              
              </div>
              
            <div className='col-12 col-md-6' id="contactDetails">
              <div className='contactinform'>
                <p>Name: Rajesh Kumar</p>
                <p>Phone Number: 87673637382</p>
                <p>Address: 123 East Street,</p>
                <p>Pelican apartment,</p>
                <p>columbia, USA</p>
                <p>29223-2922</p>
                <p>Email: rajeshkumar233@gmail.com</p>
                    
              </div>
            <div > 

           <a href='https://www.facebook.com/'><i className="fa-brands fa-facebook-square fa-2xl" id="icons"></i></a>
           <a href='https://twitter.com/'><i className="fa-brands fa-twitter fa-2xl"  id="icons"></i></a>
           <a href='https://chat.whatsapp.com/'><i className="fa-brands fa-whatsapp-square fa-2xl" id="icons"></i></a>
           <a href='https://chat.whatsapp.com/'><i className="fa-brands fa-youtube fa-2xl" id="icons"></i></a>
           <a href='https://www.instagram.com/'><i className="fa-brands fa-instagram-square fa-2xl" id="icons"></i></a>
            
            </div>
            </div>
        </div>
        </div>
        <hr></hr>
        <div className='container-fluid footerdata'>
          <p>Website designed by Rajesh Kumar</p>
        </div>
  </div>
}

export default Footer;


