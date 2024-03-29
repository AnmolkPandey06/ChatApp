import { User } from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/jwt.js";

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body; 
         const user=await User.findOne({email:email});
         
         const isPasswordCorrect=await bcryptjs.compare(password,user?.password||"");

         if(!user||!isPasswordCorrect){
           return res.status(400).json({error:"Invalid Credentials"}); 
         }
         
        generateToken(user._id,res);
        ;
        return res.status(200).json({
            _id:user._id,
            username:user.username,
            pfp:user.pfp,
            email:user.email,
            gender:user.gender,
            createdAt:user.createdAt,
            updatedAt:user.updatedAt
        })

        
    } catch (error) {
        console.log("Error in login",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const signup= async(req,res)=>{
    try {
       const {email,username,password,gender}=req.body; 
       console.log(req.body);
       const user =await User.findOne({email:email}); 
      // console.log(user);
        if(user){
           return res.status(400).json({error:"Email Already exists"});
        }

        //hashing of the password
        const salt=await bcryptjs.genSalt(10);
        const hash=await bcryptjs.hash(password,salt);



        //https://avatar.iran.liara.run/public/boy?username=Scott
        //https://avatar.iran.liara.run/public/girl?username=Maria

        const BoyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`;

        const Girlpic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser=new  User( {
            username:username,
            email:email,
            password:hash,
            pfp:(gender==="Male")?BoyProfilePic:Girlpic
            ,gender:gender
        })
        
        if(newUser){
        generateToken(newUser._id,res);
        await newUser.save();
        return res.status(201).json({
            _id:newUser._id,
            username:newUser.username,
            pfp:newUser.pfp,
            email:newUser.email,
            gender:newUser.gender,
            createdAt:newUser.createdAt,
            updatedAt:newUser.updatedAt
        })
        }
        else{
           return res.status(400).json({error:"Not signed in yet"});
        }

    } catch (error) {
        console.log("Error in signup",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const logout=(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Successfully logout"})
    } catch (error) {
        console.log("Error in logout",error);
        res.status(500).json({error:"Internal Server Error"});
    }
}