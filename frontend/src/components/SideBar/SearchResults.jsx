import React from 'react'
import Result from './Result'
import { useSearchResults } from '../../zustand-store/useSearchResult'
import { useSearch } from '../../hooks/useSearch'
import { IoMdClose } from "react-icons/io";
const SearchResults = () => {
  const {loading}=useSearch();
  const {SearchResult,setSearchResult}=useSearchResults();

  const handleClose=()=>{ 
    setSearchResult();
  }
  return (
    <div className='bg-sky-800  flex justify-between w-full m-2 rounded-lg z-10 '>
      <div className='flex p-2' >
        {!loading && SearchResult.length>0 && SearchResult.map((res)=><Result key={res._id} res={res}/>)} 
        {loading?<span className='loading text-white loading-spinner mx-auto'></span>:null}
        
    </div>
      <div> {!loading && <span className='m-2 text-white text-lg font-semibold cursor-pointer' onClick={handleClose}>Close</span>}</div>
      
    
    </div>
    
  )
}

export default SearchResults