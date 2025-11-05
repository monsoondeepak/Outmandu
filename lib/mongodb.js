import mongoose from "mongoose";

let isConnected = false;

export default async function connectDB() {
  if (isConnected) return;

  const conn = await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;

  console.log("MongoDB connected");
}
