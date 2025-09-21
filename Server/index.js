import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from './config/db.js';
import taskRoutes from "./routes/task.route.js"
const PORT = process.env.PORT || 5000 ;
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())
app.use("/api/v1/task" , taskRoutes)
app.listen(PORT , ()=>{
    console.log(`server running on the port ${PORT}`);
    connectDB();
})


