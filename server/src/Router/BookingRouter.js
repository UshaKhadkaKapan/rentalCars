import express from "express";
import { bookingCar } from "../Modal/bookingModel.js";
const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    const newBooking = await bookingCar(req.body);

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
