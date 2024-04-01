import React from 'react'
import SearchInput from './SearchInput'
SearchInput
import { TiMessages } from "react-icons/ti";
import Conversations from './Conversations'
import LogoutButton from './Logout'
import { useAuthContext } from '../../context/authcontext'
import { useConversation } from '../../zustand-store/useConversation'
const Sidebar = () => {

   const {selectedConversation}=useConversation();
   
   const isSelected=selectedConversation?"hidden md:block":""

  return (
      <div className={`border-slate-500  md:w-1/3 p-2 md:p-6 flex flex-col mb-0 ${isSelected}`}>

      {!selectedConversation && <div className='my-3'><NoChatSelected/></div>}
       
      <SearchInput/>
        <div className=' px-3'>
        <p className="font-semibold text-white  text-2xl m-2">Your Chats</p>
        </div>
        <Conversations/>
        <div className='mt-6'>
        <LogoutButton/>
        </div>
        

      </div>
  )
}


const NoChatSelected = () => {
  // const { authUser } = useAuthContext();
  const {authUser}=useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full  md:hidden">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.username} ❄</p>
        <p>Select a chat to start messaging</p>
        <span className='text-white sm:text-sm md:text-lg text-center'>Search the users and send them request to chat ,You can chat with them when they will add you back!!</span>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default Sidebar