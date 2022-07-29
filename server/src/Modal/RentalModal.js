import RentalCarSchema from "./RentalCarSchema.js";

export const createRentalCarUserDetails = () => {
  return RentalCarSchema(obj).save();
};
