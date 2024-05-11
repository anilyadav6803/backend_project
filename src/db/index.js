import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // Ensure dotenv is properly configured to load environment variables

const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI;

    await mongoose.connect(uri, {
      // Remove the useNewUrlParser and useUnifiedTopology options
      // These options are deprecated and have no effect in Node.js Driver version 4.0.0 and above
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDb;
