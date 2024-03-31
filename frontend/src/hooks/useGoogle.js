import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext.jsx';
export const useGoogle = () => {
  
    const {authUser,setAuthUser}=useAuthContext();
  const [loading,setLoading]=useState(false);


  async function GoogleLogin({username,email,picture,password}){
     setLoading(true)
      try {
         
        const res=await fetch("/api/auth/googlelogin",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username,password,picture,email
            })
        })


        const data=await res.json();
        console.log(data);
        if(data.error){
            throw new Error(data.error);
        }


        localStorage.setItem("chat-user",JSON.stringify(data));
        setAuthUser(data);

      } catch (error) {
           toast.error(error.message)
      }
      finally{
        setLoading(false)
      }

  }
  return {loading,GoogleLogin}; 
}





