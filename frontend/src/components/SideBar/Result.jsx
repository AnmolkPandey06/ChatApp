import React from 'react'
import useRequestChat from '../../hooks/useRequestChat'
import useGetConversations from '../../hooks/useGetConversations'
import { useConversationStarter } from '../../zustand-store/useConversationStarter'

const Result = ({res}) => {
  
  const {RequestChat, loading}=useRequestChat()
  const {getConversation}=useGetConversations();
  const {setPendingConversations,pendingconversations}=useConversationStarter();

  const handlepending= async()=>{
      getConversation();
      RequestChat(res._id);
      // setPendingConversations([...pendingconversations,res])
      console.log(pendingconversations)
      console.log(loading)
  }
  
  
  return (
    <div onClick={handlepending} className='flex m-3 flex-col items-center hover:bg-sky-400 rounded-md p-2 cursor-pointer'>
        <img src={res.pfp} alt="" className='rounded-full h-12 w-12'  />
        <p className='text-white text-lg font-semibold'>{res.username}</p>
    </div>
  )
}

export default Result