import express from "express";
import dotenv from 'dotenv';
import authroutes from './routes/authroutes.js'
import { connectToDB } from "./db/connnectMongoose.js";
import messageroutes from './routes/messageroues.js'
import userroutes from './routes/userroutes.js'
import cookieParser from "cookie-parser";
import { app ,server} from "./socket.io/socket.js";
import cors from 'cors';
import path from "path";
// const app=express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const __dirname=path.resolve();




//routes

app.use("/api/auth",authroutes);
app.use("/api/messages",messageroutes);
app.use("/api/user",userroutes);


app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

const PORT=process.env.PORT||5000;
server.listen(PORT,()=>{
    connectToDB(); 
    console.log(`server runing in ${PORT}`)});