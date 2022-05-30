import React from 'react'
import Head from './Head'

function Profile() {
  return (
    <div>
      <Head/>
      <h4 className='text-center contactTitle'>Profile</h4> 
        <div className="d-flex justify-content-center">
          <div className='d-flex-column'>
        <p><b>Name:</b> {localStorage.getItem('name')}</p>
        <p><b>Email:</b> {localStorage.getItem('email')}</p>
        <p><b>Phone:</b> {localStorage.getItem('phone')}</p>
        </div>
        </div>
    </div>
  )
}

export default Profile