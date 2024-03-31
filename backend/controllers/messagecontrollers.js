import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messagemodel.js";
import { getRecieverSocketId } from "../socket.io/socket.js";
import { io } from "../socket.io/socket.js";

export const sendMessage=async (req,res)=>{
   
      try {
        const recieverId=req.params.id;
        const message=req.body.message;
        const senderId=req.user._id;
    
        let conversation=await Conversation.findOne({
            participants:{
                $all:[senderId,recieverId]
            }
        })
        if(!conversation){
            
            conversation=await Conversation.create({
             participants:[senderId,recieverId],
             messages:[]
            }) 
        }
    
    
        const newMessage=new Message({
            senderId,recieverId,message
        })

        await newMessage.save()
    
        if(newMessage){
            conversation.messages.push(newMessage);
        }
        
        // await newMessage.save();
         await conversation.save();
        // this will run in series 

        // this will run parallely


        // socket io funbctionnnnn
        const recieversocketId=getRecieverSocketId(recieverId);

        if(recieverId){

            //io .to socket used to send events to specific client
            io.to(recieversocketId).emit("newMessage",newMessage);
        }
        

        // await Promise.all(conversation.save());
         
        res.status(201).json(newMessage);
      } catch (error) {
        console.log("Error in sending message",error);
        res.status(500).json({error:"Internal Server Error"});
      }
   
   

}

export const getMessage=async(req,res)=>{
    try{
        const userttoChat=req.params.id;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{
                $all:[senderId,userttoChat]
            } 
        }).populate("messages").populate("participants");

        



        console.log(conversation);
        if(!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages);

    }
    catch(error){
        console.log("Error in getting conversation",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}