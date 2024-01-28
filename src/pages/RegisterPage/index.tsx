import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { postUser } from '../../services/apiService';
import { useNavigate } from "react-router-dom";
import Notification from '../../components/Notification';


export default function RegisterPage() {
  const navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  const [mess,setMess] = useState("")
  const [isShowHide, setIsShowHide] = useState(false);

  
  
  
    
      const validateEmail = () => {
        const regEx =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(regEx.test(email)){
          setMess("Email is valid")
        }else if(!regEx.test(email)&& email!=""){
          setMess("Email is not valid")
        }else{
          setMess("")
        }
      };

      
      const handleOnSubmit = async(e:any)=>{
        e.preventDefault()
        try {
          const res= await postUser(username,email,password)
          console.log("check res",res);
          
          if(res){
            setIsShowHide(true)
            // navigate('/login')

          }
        } catch (error) {
          console.log(error);
        }
      }
    

  return (
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 z-0 ">
    <div className="mt-14  sm:mx-auto w-1/3  bg-slate-300 shadow-2xl rounded-lg ">
      <div className='sm:mx-auto sm:max-w-80 my-6'>
        <form className="space-y-6" method="POST">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-12 w-auto"
              src="/vite.svg"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
            </h2>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
            </div>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {mess}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="  "
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={(e)=>{handleOnSubmit(e)}}
              className="flex w-full mt-8 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{' '}
          <NavLink to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  </div>
);
}
