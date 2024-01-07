import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

export default function RegisterPage() {
  return <div>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image h-screen ' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5 relative'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-3' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-3' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-3' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-3' label='Repeat your password' size='lg' id='form4' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          <div className="text-center -mt-3">
            <div className='border border-slate-500'></div>
            <p className="  ">Or</p>
            <NavLink  to="/Login"><MDBBtn className='mb-4 w-100 ' size='lg'>Login</MDBBtn></NavLink>
          </div>
          
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
</div>;
}
