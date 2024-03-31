import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import { useConversation } from "../../zustand-store/useConversation";
import toast from "react-hot-toast";
import { useState } from "react";
import SearchResults from "./SearchResults";
import { useSearch } from "../../hooks/useSearch";
import { useSearchResults } from "../../zustand-store/useSearchResult";
const SearchInput = () => {
	const [search,setSearch]=useState("");
    const {setSelectedConversation}=useConversation();

    const {loading,Search}=useSearch()
	const {SearchResult,setSearchResult}=useSearchResults();
    // if(search==""){
    //     setSearchResult([]);
	// }

	const handleChange=(e)=>{
		setSearch(e.target.value);
		if(search==""){
			setSearchResult();
			console.log(SearchResult);
		}
	}

	const handleSubmit=(e)=>{
		e.preventDefault();
		if(!search) return;


		 
		if(search.length<3){
			return toast.error('Search term must be greater than 3');

		}
		Search(search);

		// const searchResult=conversations.find((c)=>c.username.toLowerCase().includes(search.toLowerCase()));

		// if(searchResult){
		// 	setSelectedConversation(searchResult);
		// 	setSearch('');
		// }
		// else{
		// 	 toast.error('No user found');
		// }

	}
	
	
	return (
		<>
		<form className=' flex  items-center gap-2  ' onSubmit={handleSubmit}>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full w-full'
			value={search}
			onChange={handleChange} />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
		{SearchResult?.length>0 && <div className="">
              <SearchResults/>
		</div>}
		</>
	);
};
export default SearchInput;