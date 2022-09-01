import UserSchema from "./UserSchema.js";

export const createUserDetails = (obj) => {
  return UserSchema(obj).save();
};

export const loginDetails = (filter) => {
  return AdminSchema.findOne(filter);
};
