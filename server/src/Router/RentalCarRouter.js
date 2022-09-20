import express from "express";
import {
  createRentalCarUserDetails,
  editBookingCar,
  fetchAllCarDetails,
} from "../Modal/RentalModal.js";
const route = express.Router();

route.get("/", async (req, res, next) => {
  try {
    const result = await fetchAllCarDetails();
    res.json({
      status: "success",
      message: "we are able to fetch the data",
      result,
    });
  } catch (error) {
    next(error);
  }
});

route.post("/", async (req, res, next) => {
  try {
    const result = await createRentalCarUserDetails(req.body);
    res.json({
      status: "success",
      message: "Cars data has been added",
      result,
    });
  } catch (error) {
    next(error);
  }
});

route.post("/addcar", async (req, res, next) => {
  try {
    const newCar = await createRentalCarUserDetails(req.body);

    res.json({
      status: "success",
      message: "Cars data has been added",
      newCar,
    });
  } catch (error) {
    next(error);
  }
});

route.post("/editcar", async (req, res, next) => {
  try {
    const _id = req.body._id;
    const editData = {
      name: req.body.name,
      image: req.body.image,
      fuelType: req.body.fuelType,
      rentPerHour: req.body.rentPerHour,
      capacity: req.body.capacity,
    };
    console.log(editData);

    const result = await editBookingCar(_id, editData);
    res.json({
      status: "success",
      message: "Cars data has been edit",
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default route;
