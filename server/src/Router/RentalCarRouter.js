import express from "express";
import { createRentalCarUserDetails } from "../Modal/RentalModal.js";
const route = express.Router();

route.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const result = await createRentalCarUserDetails(req.body);
    res.json({
      status: "success",
      message: "Cars data has been added",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
