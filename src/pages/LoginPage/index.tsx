import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
}
from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
  <div className=' w-full h-screen  absolute' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
        <MDBContainer className="p-3 my-5 d-flex flex-column  w-25 h-4/6 top-16  bg-slate-400 px-5 relative rounded-lg ">
          <h2 className="text-uppercase text-center mb-5">Login</h2>
          <MDBInput wrapperClass='mb-3' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-3' label='Password' id='form2' type='password'/>

          <div className=" flex  mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a className='ml-2 no-underline' href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4">Sign in</MDBBtn>

          <div className="text-center">
            <p>Not a member? <NavLink className="no-underline" to="/register">Register</NavLink></p>
            <p>or sign up with:</p>
            <div className='flex text-center '>
              <a className='ml-16' href="https://www.facebook.com/"><img className='w-6 h-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="" /></a>
              <a className='ml-8' href="https://www.google.com.vn/?hl=vi"><img className='w-6 h-6' src="https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_960_720.png" alt="" /></a>
              <a className='ml-8' href="https://twitter.com/?lang=vi"><img className='w-6 h-6' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" /></a>
            </div>
          </div>
        </MDBContainer>
    </div>
    );
}