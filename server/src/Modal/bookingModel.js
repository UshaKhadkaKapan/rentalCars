import bookingCarSchema from "./bookingSchema.js";

export const bookingCar = (obj) => {
  return bookingCarSchema(obj).save();
};

// export const stripeCreate = (obj) => {
//   return Stripe.create;
// };

// export const paymentDetailsCreate = (obj) => {
//   return bookingCarSchema(obj).save();
// };
