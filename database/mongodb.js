import mongoose from "mongoose";
const connectMongo = async () => {
  try {
    const { connection } = mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;
