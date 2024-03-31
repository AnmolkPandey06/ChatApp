import { create } from "zustand";

export const useConversationStarter = create((set) => ({
    conversations:[],
    setConversations:(conversations)=>set({conversations}),
    pendingconversations:[],
    setPendingConversations:(pendingconversations)=>set({pendingconversations}),
}));
