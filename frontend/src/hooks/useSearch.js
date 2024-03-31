import React from 'react'
import { useConversation } from '../zustand-store/useConversation';
import { useSearchResults } from '../zustand-store/useSearchResult';
import toast from 'react-hot-toast';
import { useState } from 'react';
export const  useSearch = () => {
    const [loading,setLoading]=useState(false);
    const {SearchResult, setSearchResult}=useSearchResults();
    
    const Search=async(searchInput)=>{
        console.log(searchInput);
        setLoading(true);
        try {
            const res=await fetch(`/api/user/search`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    searchInput
                })
            })
            
            const data=await res.json()


            if(data.error){
                throw new Error(data.error);
            }
            
            console.log(data);
            
            if(data.length==0){
                return toast.error('No user found');
            }
            setSearchResult(data);
            // console.log(SearchResult);

            


       } catch (error) {
        toast.error(error.message)
       }
       finally{
        setLoading(false);
       }

       
    }
    return {loading,Search}

}

