import rentalCarSchema from "./RentalCarSchema.js";

export const createRentalCarUserDetails = (obj) => {
  return rentalCarSchema(obj).save();
};

export const fetchAllCarDetails = () => {
  return rentalCarSchema.find();
};
