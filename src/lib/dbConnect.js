import mongoose from "mongoose";

const connection = {
  isConnected: 0,
};

const dbConnect = async () => {
  // Check if already connected
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");

    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process on failure
  }
};

export default dbConnect;
