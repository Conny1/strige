import mongoose from "mongoose";

export const connectToDb = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URL);

  console.log("cONNECTED TO MONGODB");
};
