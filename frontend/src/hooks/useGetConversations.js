import React, { useState } from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext';
import { useConversationStarter } from '../zustand-store/useConversationStarter';
const useGetConversations = () => {
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext();
    const{pendingconversations,setPendingConversations,conversations,setConversations}=useConversationStarter();
    // const [conversations,setConversations]=useState([]);
    // const [pendingconversations,setPendingConversations]=useState([]);
    
    const getConversation=async()=>{
        setLoading(true);
        try {
            console.log("inside dfndslfdnsfln")
            const res= await fetch(`/api/user/`);
            const data=await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setConversations(data.friends);
            setPendingConversations(data.pending);
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
       }

    useEffect(()=>{
       getConversation();
    },[]);

    return {loading,getConversation}
}

export default useGetConversations