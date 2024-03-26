import { User } from "../models/usermodel.js";

export const getUserSidebar=async(req,res)=>{
    try {
        const loggedInuser=req.user._id;
        const allUsers=await User.find({_id:{$ne:loggedInuser}}).select("-password");
        return res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in getting users",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}