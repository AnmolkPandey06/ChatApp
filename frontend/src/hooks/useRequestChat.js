import React, { useState } from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authcontext';
const useRequestChat = () => {
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext();
    // const [conversations,setConversations]=useState([]);
    // const [pendingconversations,setPendingConversations]=useState([]);

    const RequestChat=async(id)=>{
        setLoading(true);
        try {
            console.log("asdkjdksafjbdskjfbdskjfbdskjfbdskjfbdskjfbdsk");
            const res= await fetch(`/api/user/pendingreq/${id}`);
            const data=await res.json();
            console.log(data);
            console.log("asdkjdksafjbdskjfbdskjfbdskjfbdskjfbdskjfbdsk");
            if(data.error){
                console.log('error here 2')
                throw new Error(data.error);
            }
            toast.success('Request Sent to User for chat')
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
       
    

    return {loading,RequestChat}
}

export default useRequestChat