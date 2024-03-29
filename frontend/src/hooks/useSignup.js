import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext.jsx';
export const useSignup = () => {
  
  const [loading,setLoading]=useState((false));

  const {authUser,setAuthUser}=useAuthContext();
  const signup=async({username,email,gender,password})=>{
     console.log("helloooo")
      const success=handleInputErrors({username,email,gender,password})
      if (!success) return;
      setLoading(true)
      try {
        console.log("sajdb"); 
        const res=await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username,password,gender,email
            })
        })


        const data=await res.json();
        console.log(data);
        if(data.error){
            throw new Error(data.error);
        }


        //localstorage
        //context
        localStorage.setItem("chat-user",JSON.stringify(data));
        setAuthUser(data);

      } catch (error) {
           toast.error(error.message)
      }
      finally{
        setLoading(false)
      }

  }
  return {loading,signup}; 
}


function handleInputErrors({username,email,gender,password}){
    if(!username|| !password ||!gender || !email){
        toast.error('Please fill in all the fields');
        return false;
    }
    if(password.length<5){
        toast.error('Password must be more than 6 digit');
        return false;
    }
    return true;
}







