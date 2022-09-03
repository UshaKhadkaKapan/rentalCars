import UserSchema from "./UserSchema.js";

export const createUserDetails = (obj) => {
  return UserSchema(obj).save();
};

export const loginDetails = (filter) => {
  return UserSchema.findOne(filter);
};

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
// });

// export default mongoose.model("users", userSchema);
