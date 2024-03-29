
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
   
	const {loading,conversations}=useGetConversations()
	console.log(conversations)
	return (
		<div className='py-2 flex flex-col overflow-auto max-h-[400px]'>
			{conversations.map((conversation,idx)=>(
				<Conversation
				conversation={conversation} 
				key={conversation._id}
				lastIdx={idx===conversations.length-1}/>
			))}
			
			
			
			{loading?<span className='loading loading-spinner mx-auto'></span>:null}
		</div>
	);
};
export default Conversations;