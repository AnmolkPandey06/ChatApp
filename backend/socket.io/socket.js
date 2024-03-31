


import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"]
    }
});

const userSocketMap={}// {userId,socketId}

export const getRecieverSocketId =(recieverId)=>{
    return userSocketMap[recieverId];       
}

try {








    // Listen for connections
    io.on('connection', (socket) => {
        console.log("User connected:", socket.id);

        const userId=socket.handshake.query.userId;
        if(userId!="undefinded") userSocketMap[userId]=socket.id;
        

        //telling every connected user that this person came
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
        
        // Listen for disconnect event
        socket.on("disconnect", () => {
            
                   
            console.log("User disconnected:", socket.id);
            delete userSocketMap[userId];
            io.emit("getOnlineUsers",Object.keys(userSocketMap));
            
     

        });
    });

    
} catch (error) {
    console.error("Error:", error);
}

export { app, io, server };
