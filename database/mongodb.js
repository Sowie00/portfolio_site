import mongoose from "mongoose";
const connectMongo = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;
