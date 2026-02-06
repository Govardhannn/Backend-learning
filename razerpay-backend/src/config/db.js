import mongoose from "mongoose";

const connDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RAZOR-PAY-app",
    });

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log("❌ Database connection failed:", error);
    process.exit(1);
  }
};

export default connDB;
