import mongoose
 from "mongoose";

  const userSchema=new mongoose.Schema({
     username:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
        type:String,
        required:true,
        minlength:5
     },
     gender:{
        type:String,
        enum:["Male","Female"],
     },
     pfp:{
        type:String,
     }
 },{timestamps:true})

 export const User=mongoose.model("User",userSchema);