import mongoose from "mongoose";

const connect = async () => {
  try {
    // if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected");
  } catch (error) {
    throw new Error(error.message);
  }
};

export default connect;
