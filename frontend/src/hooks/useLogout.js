import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext.jsx';
import { useConversation } from '../zustand-store/useConversation.js';
import { useSearchResults } from '../zustand-store/useSearchResult.js';
export const useLogout = () => {
  
  const [loading,setLoading]=useState((false));
  const {authUser,setAuthUser}=useAuthContext();
  const {SearchResult,setSearchResult}=useSearchResults();

  const {selectedConversation,setSelectedConversation} =useConversation();
  
  const logout=async()=>{
       setLoading(true)
       console.log("dsf.");
       try {
          const result=await fetch("/api/auth/logout",{
            method:"GET",
            headers:{"Content-Tpe":"application/json"}
          })
          const data=await result.json()
          if(data.error){
            throw new Error(data.error)
          }
          localStorage.removeItem("chat-user");
          setAuthUser(null);
          setSelectedConversation(null);
          setSearchResult([]);
          
       } catch (error) {
        toast.error(error.message)
       } 
       finally{
          setLoading(false);
       }
       
  }
   return{loading,logout};
      
}
