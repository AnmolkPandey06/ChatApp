import jwt from "jsonwebtoken"
import { User } from "../models/usermodel.js";

export const protectRoute=async (req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        if(!token){
            res.status(401).json({error:"Unauthorised. No token Provided"});
        }
        else{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);

            if(!decoded){
                res.status(401).json({error:"Unauthorised. False Token"});
            }
            const user=await User.findById(decoded.userId).select("-password");
            if(!user){
                res.status(404).json({error:"Unauthorised. User not found"});
            }

            req.user=user;
            next();
        }
    }
    catch(error){
        console.log("Error in protectRoute Middleware",error);
        res.status(500).json({error:"Internal Server Error"});

    }
}