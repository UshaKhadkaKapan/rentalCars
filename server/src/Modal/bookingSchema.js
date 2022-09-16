import mongoose from "mongoose";

const bookingCarSchema = new mongoose.Schema(
  {
    car: { type: mongoose.Schema.Types.ObjectID, ref: "Rental-Cars-User" },
    user: { type: mongoose.Schema.Types.ObjectID, ref: "User-details" },
    bookedTimeSlots: {
      from: { type: String },
      to: { type: String },
    },
    totalHours: { type: Number },
    totalAmount: { type: Number },
    transactionId: { type: String },
    driverRequired: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("booking-car", bookingCarSchema);
