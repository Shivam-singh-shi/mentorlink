import mongoose from "mongoose";
import dns from "dns";

const connectDB = async () => {
  try {
    try {
      dns.setServers(["8.8.8.8", "8.8.4.4"]);
    } catch (e) {
      // Ignore if setServers is restricted
    }
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};

export default connectDB;
