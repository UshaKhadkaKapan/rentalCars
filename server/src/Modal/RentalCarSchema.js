import mongoose from "mongoose";

const rentalUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 50,
    },
    image: {
      type: String,
      required: true,
    },
    capacity: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
    bookSlots: [
      {
        from: { type: String, required: true },
        to: { type: String, required: true },
      },
    ],

    rentPerHour: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Rental-Cars-User", rentalUserSchema);
