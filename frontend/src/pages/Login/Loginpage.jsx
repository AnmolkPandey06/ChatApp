import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin';
import { useState } from 'react';
import Heading from '../../components/Heading';
import google from '../../assets/google.png'

import { jwtDecode } from "jwt-decode";
import toast from 'react-hot-toast';
import {use} from 'react'
import { useGoogle } from '../../hooks/useGoogle';


const Loginpage = () => {

  const [loadinggoogle,setLoadinggoogle]=useState((false));
  const {loading,login}=useLogin();`0`
  const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
  const [googleRes,setGoogleRes]=useState(null);
  
  const handleSubmit=async()=>{
    
	  await login(inputs);
	}
  
 
  
  const googler=async(response)=>{
    console.log('in googler')
    if(response){
      const string=response.credential
      const decodedinfo=jwtDecode(string);
      console.log('inside 2')
      await GoogleLogin({email:decodedinfo.email,password:decodedinfo.sub,picture:decodedinfo.picture,username:decodedinfo.given_name}); 
       
      
      // console.log(decodedinfo.email,decodedinfo.given_name,decodedinfo.family_name,decodedinfo.picture,decodedinfo.sub);
      
    }
  }
  
  // if(googleRes!=null){
  //   setLoadinggoogle(true)
  // }


  // useEffect(() => {
    
  //    googler();
     
  // }, [googleRes,GoogleLogin])
  





  return (
    <div>

      <Heading/>
           <div className='flex flex-col items center justify-center  mx-auto'>
      <div className='w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login
            <span className='text-blue-500'> Rapid Chatter</span>
          </h1>
          <form  >
        <div>
          <label className='label p-2'>
            <span className='text-base label-text text-lg font-semibold text-white'>Email</span>
          </label>
          <input type="email" placeholder='Enter email' className="w-full input input-bordered h-10"
          onChange={(e)=>setInputs({...inputs,email:e.target.value})}/>
        </div>
        <div>
        <label className='label p-2'>
            <span className=' label-text text-lg font-semibold text-white'>Password</span>
          </label>
          <input type="password" placeholder='Enter password' className="w-full input input-bordered h-10"
          onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
        </div>
        
        <Link to="/signup" className='text-l hover:underline hover:text-blue-400 mt-2 text-gray-200 font-semibold inline-block'>
        {"Don't"} have an account?
        </Link>

        <div>
        <button onClick={handleSubmit} className='btn btn-block btn-sm mt-2 border bg-sky-500 hover:bg-blue-600 font-semibold text-white text-xl border-slate-700'
						disabled={loading}>
						
						{loading?<span className="loading loading-spinner"></span>:"Login"}
						
						</button>
        </div>
      </form>
      <div>

        </div>
      
      
      
					</div>
      </div>
      

    
    </div>
   
  )
}

export default Loginpage




// <div className='flex items-center justify-center  mt-2  border-slate-600  w-full'>
// <GoogleLogin 
// onSuccess={credentialResponse => {
//   console.log(credentialResponse);
//   if(!credentialResponse){return ;}

//   // setGoogleRes(()=>{return credentialResponse});
//   // const string=credentialResponse.credential
//   // const decodedinfo=jwtDecode(string);
  
//  // googler(credentialResponse);
  
  
// }}
// onError={() => {
// toast.error("Google auth failed");
// }}
// />