import express from 'express'
import mongoose from 'mongoose'

export const connectToDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("successfully connected to mongoDB")


    }
    catch(error){
        console.log(error);
    }
}