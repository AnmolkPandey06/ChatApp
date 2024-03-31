
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import PendingConversation from "./Pendingconversation";
import { useEffect } from "react";
import { useConversationStarter } from "../../zustand-store/useConversationStarter";
const Conversations = () => {
    const pending=true;
	const {loading}=useGetConversations();
	const {conversations,pendingconversations}=useConversationStarter();

	useEffect(()=>{
		console.log(pendingconversations)
	},[pendingconversations])
	console.log(conversations)
	return (
		<div className="py-2 flex flex-col h-full  max-h-[400px]">
            <div className="h-2/3 overflow-auto">
               {conversations.map((conversation,idx)=>(
				<Conversation
				conversation={conversation} 
				key={conversation._id}
				lastIdx={idx===conversations.length-1}/>
			))}
			</div>
			<div className="h-1/3 overflow-auto">
				<p className="text-2xl font-semibold text-white mx-2">Pending Requests</p>
               
			   {pendingconversations.length==0 && <div className="text-1xl font-semibold text-white mx-2 "> No Request </div>}
			   
			   {pendingconversations.map((conversation,idx)=>(
				<PendingConversation
				conversation={conversation} 
				key={conversation._id}
				pending={pending}
				lastIdx={idx===conversations.length-1}/>
			))}
			</div>  
               {loading?<span className='loading text-white loading-spinner mx-auto'></span>:null}
		</div>
	
			
			
			
			
		
	);
};
export default Conversations;