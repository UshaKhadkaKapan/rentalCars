import express from "express";
import {
  createRentalCarUserDetails,
  fetchAllCarDetails,
} from "../Modal/RentalModal.js";
const route = express.Router();

route.get("/", async (req, res, next) => {
  try {
    const result = await fetchAllCarDetails();
    console.log(result);
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
    });
  } catch (error) {
    next(error);
  }
});

route.post("/editcar", async (req, res, next) => {
  try {
    const _id=req.body._id;
    const editData={
      car.name =req.body.name,
        car.image = req.body.image,
        car.fuelType = req.body.fuelType,
        car.rentPerHour = req.body.rentPerHour,
        car.capacity = req.body.capacity
    }
    
    const result = await createRentalCarUserDetails(_id,);
    res.json({
      status: "success",
      message: "Cars data has been added",
      result
    });
  } catch (error) {
    next(error);
  }
});

export default route;
