// import {useStore} from 'zustand';

// export const useConversation=useStore({
//     selectedConvo:null,
//     setSelectedConversation:(selectedConvo)=>set({selectedConvo}),
//     messages:[],
//     setMessages:(messages)=>set({messages}),

// })


import { create } from "zustand";

export const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

