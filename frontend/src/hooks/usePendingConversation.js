import React, { useState } from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext';
const usePendingConversations = () => {
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext();
    // const [conversations,setConversations]=useState([]);
    // const [pendingconversations,setPendingConversations]=useState([]);

    const acceptRequest=async(id)=>{
        setLoading(true);
        try {
            const res= await fetch(`/api/user/acceptreq/${id}`);
            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            toast.success('Request Accepted')
            // setConversations(data.friends);
            // setPendingConversations(data.pending);
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
        finally{
            setLoading(false);
        }
       }
       
    

    return {loading,acceptRequest}
}

export default usePendingConversations