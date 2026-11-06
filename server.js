import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

dotenv.config();
// App Config
const app = express();
const port = process.env.PORT || 3000 ;
// If there is port available in the environment variable, use it. Otherwise, use 3000 as the default port.

connectDB(); // Connect to MongoDB
connectCloudinary(); // Connect to Cloudinary

// Middlewares

app.use(express.json());
app.use(cors());
// In cors you access the backend from any IP.

// API Endpoints

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log(`Server is running on port ${port}`));