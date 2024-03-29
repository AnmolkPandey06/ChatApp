import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import { useConversation } from "../../zustand-store/useConversation";
import toast from "react-hot-toast";
import { useState } from "react";
const SearchInput = () => {
	const [search,setSearch]=useState("");
    const {setSelectedConversation}=useConversation();
	const {conversations}=useGetConversations()

	const handleSubmit=(e)=>{
		e.preventDefault();
		if(!search) return;
		if(search.length<3){
			return toast.error('Search term must be greater than 3');

		}
		const searchResult=conversations.find((c)=>c.username.toLowerCase().includes(search.toLowerCase()));

		if(searchResult){
			setSelectedConversation(searchResult);
			setSearch('');
		}
		else{
			 toast.error('No user found');
		}

	}
	
	
	return (
		<form className='flex items-center gap-2' onSubmit={handleSubmit}>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full'
			value={search}
			onChange={(e)=>setSearch(e.target.value)} />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;