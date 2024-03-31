import express from "express";
import dotenv from 'dotenv';
import authroutes from './routes/authroutes.js'
import { connectToDB } from "./db/connnectMongoose.js";
import messageroutes from './routes/messageroues.js'
import userroutes from './routes/userroutes.js'
import cookieParser from "cookie-parser";
import { app ,server} from "./socket.io/socket.js";
import cors from 'cors';
// const app=express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());



//routes

app.use("/api/auth",authroutes);
app.use("/api/messages",messageroutes);
app.use("/api/user",userroutes);


const PORT=process.env.PORT||5000;
server.listen(PORT,()=>{
    connectToDB(); 
    console.log(`server runing in ${PORT}`)});