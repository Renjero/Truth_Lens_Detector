import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // options can be added if needed
    });
    console.log(`DB CONNECTED: ${conn.connection.host}`);
  } catch (error) {
    console.error(`DB CONNECTION ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;

