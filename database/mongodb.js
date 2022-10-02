import mongoose from "mongoose";
const connectMongo = async () => {
  try {
    const { connection } = mongoose.connect(process.env.MONGODB_URI);

    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;
