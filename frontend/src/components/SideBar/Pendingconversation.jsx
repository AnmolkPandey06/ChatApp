
import { useSocketContext } from "../../context/socketcontext";
import usePendingConversations from "../../hooks/usePendingConversation";
import { useConversation } from "../../zustand-store/useConversation";

import useGetConversations from '../../hooks/useGetConversations'
import { useConversationStarter } from '../../zustand-store/useConversationStarter'

const PendingConversation = ({conversation,lastIdx,pending}) => {
   

   const {loading,acceptRequest}=usePendingConversations();
   const {getConversation}=useGetConversations();
   const {setPendingConversations,pendingconversations,conversations,setConversations}=useConversationStarter();
    
    const handleClick=()=>{
          acceptRequest(conversation._id);
		  getConversation();
		  const newArray=pendingconversations.filter(items=>items!=conversation);
		  setPendingConversations(newArray);
		  setConversations([...conversations,conversation])
    }
    
	


	return (
		<>
	<div className={`flex gap-2 items-center hover:bg-sky-800 rounded p-2 py-1 cursor-pointer`}
	onClick={handleClick}>
				<div className={`avatar`}>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.pfp}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.username}</p>
						
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default PendingConversation;