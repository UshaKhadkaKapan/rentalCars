import express from "express";
import { bookingCar } from "../Modal/bookingModel.js";
import { updateBookingSlot } from "../Modal/RentalModal.js";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";

const stripe = new Stripe(process.env.StripeKey);
const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    // unique key to get differnt id
    const uniqueKey = uuidv4();

    // token
    const { token } = req.body;
    const customer = await stripe.customer({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "$",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uniqueKey,
      }
    );

    if (payment) {
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
