import rentalCarSchema from "./RentalCarSchema.js";

export const createRentalCarUserDetails = (obj) => {
  return rentalCarSchema(obj).save();
};

export const fetchAllCarDetails = () => {
  return rentalCarSchema.find();
};

export const updateBookingSlot = (_id, obj) => {
  return rentalCarSchema.findByIdAndUpdate(
    _id,
    {
      $push: {
        bookedTimeSlots: obj,
      },
    },
    { new: true }
  );
};
