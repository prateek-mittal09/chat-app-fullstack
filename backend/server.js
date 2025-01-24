import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import path from 'path'
 
dotenv.config();
const PORT = process.env.PORT;
const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

app.use(express.static(path.join(__dirname,'/frontend/Chat-application/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","Chat-application","dist","index.html"))
})

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port: ${PORT}`);
});
