import mongoose from "mongoose";
const mongoClient = async () => {
  const conn = await mongoose.connect(process.env.MONGO_CLIENT);
  if (conn) {
    console.log("connected");
  }
};
export default mongoClient;
