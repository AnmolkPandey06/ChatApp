import { Conversation } from "../models/conversationModel.js";
import { User } from "../models/usermodel.js";

export const getUserSidebar=async(req,res)=>{
    try {
        const loggedInuser=req.user._id;
        
        const data=await User.findOne({
            _id:loggedInuser
        }).populate("friends").populate('pendingfriends');
         
      //  console.log(data); 
        // for (let conversat of conversation) {
        //     console.log(conversat.participants[0]._id," ",loggedInuser)
        //     if(conversat.participants[0]._id.equals(loggedInuser)){
        //         console.log(conversat.participants[1])
        //         result.push(conversat.participants[1]);
        //     }
        //     if(conversat.participants[1]._id.equals(loggedInuser)){
        //         console.log(conversat.participants[0])
        //         result.push(conversat.participants[0]);
        //     }
        //     //console.log(conversat.participants[0]); 

       //}
        
        
        //const allUsers=await User.find({_id:{$ne:loggedInuser},}).select("-password");
        return res.status(200).json({friends:data.friends,pending:data.pendingfriends});
    } catch (error) {
        console.log("Error in getting users",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}



export const searchUser=async(req,res)=>{
    try {
        const loggedInuser=req.user._id;
        const { searchInput } = req.body; // Assuming you have access to the search term and the logged-in user's ID
         console.log(searchInput);
        // Construct regular expression for search term
        const regex = new RegExp(searchInput, 'i'); // 'i' flag for case-insensitive search
        
        // Query the User model
        const foundUsers = await User.find({
          $and: [
            { $or: [
              { email: { $regex: regex } }, // Search by email
              { username: { $regex: regex } } // Search by username
            ]},
            { _id: { $ne: loggedInuser } } // Exclude the logged-in user
          ]
        }).select("-password");
        
        if (foundUsers.length > 0) {
            return res.status(200).json(foundUsers);    
        } else {
            return res.status(200).json(foundUsers);
        }
        
        
        //const allUsers=await User.find({_id:{$ne:loggedInuser},}).select("-password");
       
    } catch (error) {
        console.log("Error in getting users",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}



export const includetoChats=async(req,res)=>{
    try {
        const loggedInuser=req.user._id;
        const includedUser=req.params.id;
        
        if(req.user.friends.includes(includedUser)){
            return res.status(400).json({error:"User Alrerady friends"});
       }
        

        const author=await User.updateOne({_id:loggedInuser},{$push:{friends:includedUser}});
        const author2=await User.updateOne({_id:includedUser},{$push:{friends:loggedInuser}});

        
        await User.updateOne({_id:loggedInuser},{$pull:{pendingfriends:includedUser}});
        
        
        
        
        
        //const allUsers=await User.find({_id:{$ne:loggedInuser},}).select("-password");
        return res.status(200).json({success:"Yes"});
    } catch (error) {
        console.log("Error in getting users",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}



export const includetoChatspending=async(req,res)=>{
    try {
        const loggedInuser=req.user._id;
        const includedUser=req.params.id;
        
        if(req.user.friends.includes(includedUser)){
             return res.status(400).json({error:"User Alrerady friends"});
        }
        
        const FindingUser=await User.findById(includedUser);
        console.log(FindingUser);
        
        if(!FindingUser){
            return res.status(404).json({error:'User Not Found'});
        }

        if(FindingUser.pendingfriends.length>0 && FindingUser.pendingfriends.includes(loggedInuser)){
            console.log("anmol");
            return res.status(400).json({error:"Request Already Sent"});
        }

    //    await User.updateOne({_id:loggedInuser},{$push:{pendingfriends:includedUser}});
        await User.updateOne({_id:includedUser},{$push:{pendingfriends:loggedInuser}});
        
        
        
        //const allUsers=await User.find({_id:{$ne:loggedInuser},}).select("-password");
        return res.status(200).json({success:"Yes"});
    } catch (error) {
        console.log("Error in getting users",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}