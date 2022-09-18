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

export const editBookingCar = (_id) => {
  return rentalCarSchema
    .findOne(
      _id,{car.name =req.body.name,
        car.image = req.body.image,
        car.fuelType = req.body.fuelType,
        car.rentPerHour = req.body.rentPerHour,
        car.capacity = req.body.capacity}
      
    )
    .save();
};
