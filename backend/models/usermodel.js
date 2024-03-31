import mongoose
 from "mongoose";

  const userSchema=new mongoose.Schema({
   
     friends:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:[]   
     }],

     pendingfriends:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      default:[]   
   }],
   
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