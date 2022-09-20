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

export const editBookingCar = (_id, editData) => {
  return rentalCarSchema.findByIdAndUpdate(_id, {
    name: editData.name,
    image: editData.image,
    fuelType: editData.fuelType,
    rentPerHour: editData.rentPerHour,
    capacity: editData.capacity,
  });
};

export const deleteCar = (_id) => {
  return rentalCarSchema.findByIdAndDelete(_id);
};
