import 'dotenv/config';
import express from 'express'
import {createServer} from "node:http";
import mongoose from 'mongoose';
import cors from 'cors';
import {connectToSocket} from './controllers/socketManager.js';
import userRoutes from "./routes/users.routes.js";
import httpStatus from 'http-status'


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);

const start = async () =>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(console.log("Database Was Connected!"))
    .catch((e)=>console.log(e))

    server.listen(app.get("port"),()=>{
        console.log(`Server Started`)
    })
}
start();