import bookingCarSchema from "./bookingSchema.js";

export const bookingCar = (obj) => {
  return bookingCarSchema(obj).save();
};

export const fetchAllBookingData = () => {
  return bookingCarSchema.find().populate("car");
};
