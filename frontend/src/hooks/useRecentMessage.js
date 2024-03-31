import React from 'react'
import { useSocketContext } from '../context/socketcontext'
import { useConversation } from '../zustand-store/useConversation';
import { useEffect } from 'react';
import ping from "../assets/sounds/ping.mp3"
export const useRecentMessage = () => {
  const {socket}=useSocketContext();
  const {messages,setMessages}=useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        const sound=new Audio(ping);
        sound.play();
        setMessages([...messages,newMessage]);   
    })
   ///very important to unmountttt
    return ()=> socket?.off("newMessage")
  },[socket,setMessages,messages])

}
