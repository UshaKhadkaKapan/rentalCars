import mongoose from "mongoose";

const connectMongo = () => {
  try {
    const conStr = process.env.MONGO_URL;

    const con = mongoose.connect(conStr);

    con && console.log("Mongo Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
