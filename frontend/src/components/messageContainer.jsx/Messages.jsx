import Message from "./Message";
import { useGetMessages } from "../../hooks/useGetMessages";
import MessageSkeleton from "./MessageSkeleton";
import { useRef } from "react";
import { useEffect } from "react";
import { useRecentMessage } from "../../hooks/useRecentMessage";
const Messages = () => {
    


	useRecentMessage();
	const {loading,messages}= useGetMessages();
	console.log(messages);
    const lastMessageRef=useRef();
	useEffect(() => {
	    setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
		}, 100);
	},[messages])
	
	return (


		<div className='px-4 flex-1 w-full overflow-y-auto'>
			
			{loading&&<>
			<MessageSkeleton/>
			<MessageSkeleton/>
			<MessageSkeleton/>
			</> }

			{!loading && messages.length===0 && <p className="text-center text-white font-bold text-1xl">Send a message to start conversation</p>}

			{!loading && messages.length>0 && messages.map((message)=><div key={message._id} >
				
				<Message  message={message}/>
			</div>
			
			)}
			
            <div ref={lastMessageRef}></div>


			
		</div>
	);
};
export default Messages;