import bookingCarSchema from "./bookingSchema.js";

export const bookingCar = (obj) => {
  return bookingCarSchema(obj).save();
};

// export const loginDetails = (filter) => {
//   return bookingCarSchema.findOne(filter);
// };