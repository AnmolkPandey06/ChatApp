import { useEffect, useState } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useConversation } from "../../zustand-store/useConversation";
import { useAuthContext } from "../../context/authcontext";
const MessageContainer = () => {
   

  const {selectedConversation,setSelectedConversation} =useConversation();

   
  const isSelected=!selectedConversation?"hidden md:block h-":""

  const handleBack=()=>{
    setSelectedConversation(null);
  }
  
  useEffect(()=>{
    //cleanup function (unmount)  if i logout to ye component chala jayga anbd selected 0 ho jayga

    // return ()=>setSelectedConversation(null);

  },[selectedConversation]);
 
  return (
    <div className={`w-2/3  flex flex-col ${isSelected}`}>

      {selectedConversation? (
        <>
          <div className="bg-slate-500 flex justify-between px-4 py-2 mb-2 w-full h-max">
            <div>
              <span className="text-white font-semibold text-1xl cursor-pointer " onClick={handleBack}> &lt; Back</span>
            </div>
            <div>
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">{selectedConversation.username}</span>
            </div>
            
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
        
      )}
    </div>
  );
};

const NoChatSelected = () => {
  // const { authUser } = useAuthContext();
  const {authUser}=useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.username} ❄</p>
        <p>Select a chat to start messaging</p>
        <span className='text-white sm:text-sm md:text-lg text-center'>Search the users and send them request to chat ,You can chat with them when they will add you back!!</span>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
