import React from 'react'
import { useAuthContext } from '../../context/authcontext'
import { useConversation } from '../../zustand-store/useConversation';
import { extractTime } from '../../utils/extracttime';
const Message = ({message}) => {

  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();

  const fromMe=message.senderId===authUser._id;
  const pfp=fromMe? authUser.pfp: selectedConversation.pfp;
  const time=extractTime(message.createdAt);
  const chatClassName=fromMe?'chat chat-end':'chat-start chat';

  const bgbubble=fromMe?'bg-sky-500':"";

  return (
    <div className={chatClassName }>
         <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
               <img src={pfp} alt="CSS Avatar" /> 
            </div>
         </div>
         <div className={`chat-bubble text-white ${bgbubble}`}>{message.message}</div>
         <div className='chat-footer opacity-50 text-sm flex gap-1 items-center'>
          {time}
         </div>
    </div>
  )
}

export default Message