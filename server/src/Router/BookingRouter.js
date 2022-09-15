import express from "express";
import { bookingCar } from "../Modal/bookingModel.js";
import { updateBookingSlot } from "../Modal/RentalModal.js";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";

const stripe = new Stripe(process.env.StripeKey);
const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    // unique key to get differnt id
    const uniqueKey = uuidv4();

    // token
    const { token } = req.body;

    // const email = token.email;
    // const source = token.card;
    // console.log(source);
    // const customer = await stripeCreate({ email, source });
    const customer = await stripe.customer.create({
      email: token.email,
      source: token.id,
    });

    // const details =
    //   ({
    //     amount: req.body.totalAmount * 100,
    //     currency: "AUD",
    //     customer: customer.id,
    //     receipt_email: token.email,
    //   },
    //   {
    //     idempotencyKey: uniqueKey,
    //   });

    // const payment = await paymentDetailsCreate(details);
    // console.log(payment);
    const payment = await stripe.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "AUD",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uniqueKey,
      }
    );

    if (payment) {
      // here source is customer
      req.body.transactionId = payment.source.id;
      const newBooking = await bookingCar(req.body);
      const { car, bookedTimeSlots, ...rest } = req.body;

      // const { car } = req.body;
      // const { bookedTimeSlots } = req.body;
      // console.log(bookedTimeSlots);
      const updateTimeSlotsOfRentingCar = await updateBookingSlot(
        car,
        bookedTimeSlots
      );
      console.log(updateTimeSlotsOfRentingCar);
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
