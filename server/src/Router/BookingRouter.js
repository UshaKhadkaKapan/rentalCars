import express from "express";
import mongoose from "mongoose";
import { bookingCar } from "../Modal/bookingModel.js";
import { updateBookingSlot } from "../Modal/RentalModal.js";
const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const newBooking = await bookingCar(req.body);
    const { car, bookedTimeSlots, ...rest } = req.body;
    console.log(rest);
    // const { car } = req.body;
    // const { bookedTimeSlots } = req.body;
    // console.log(bookedTimeSlots);
    const updateTimeSlotsOfRentingCar = await updateBookingSlot(
      car,
      bookedTimeSlots
    );
    // console.log(updateTimeSlotsOfRentingCar);
    if (newBooking) {
      return res.json({
        status: "success",
        message: "Booking Car is successful",
        newBooking,
      });
    } else {
      return res.json({
        status: "error",
        message: "Booking car is failed",
      });
    }
  } catch (error) {
    next(error);
  }
});

export default route;
