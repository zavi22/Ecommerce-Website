import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected successfully");
        // when mongodb gets connected it will print this message in the console
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
};

export default connectDB;