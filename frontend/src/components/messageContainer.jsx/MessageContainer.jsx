import { useEffect, useState } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useConversation } from "../../zustand-store/useConversation";
const MessageContainer = () => {
   
  const {selectedConversation,setSelectedConversation} =useConversation();
  
  useEffect(()=>{
    //cleanup function (unmount)  if i logout to ye component chala jayga anbd selected 0 ho jayga

    // return ()=>setSelectedConversation(null);

  },[selectedConversation]);
 
  return (
    <div className="md:min-w-[450px] flex flex-col">

      {selectedConversation? (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 ">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">{selectedConversation.username}</span>
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
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John Doe ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;