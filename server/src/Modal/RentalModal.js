import RentalCarSchema from "./RentalCarSchema.js";

export const createRentalCarUserDetails = (obj) => {
  return RentalCarSchema(obj).save();
};
