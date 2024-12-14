import mongoose from "mongoose";
import { MONGODB_URL } from "./serverConfig.js";

export default async function connectDB() {
  try {
       await mongoose.connect(MONGODB_URL);
       console.log("connected to mongoDB");
  } catch (error) {
  
    console.log("Failed to connect mongoDB");
    console.log(error);
  }
}