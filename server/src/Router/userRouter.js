import express from "express";
import { createUserDetails, loginDetails } from "../Modal/userModel.js";
const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    const result = await createUserDetails(req.body);
    console.log(result);
    if (result?._id) {
      return res.json({
        status: "success",
        message: "User Details has been added",
        result,
      });
    } else {
      return res.json({
        status: "error",
        message: "User Details fails to added",
      });
    }
  } catch (error) {
    next(error);
  }
});

route.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await loginDetails(username, password);

    if (result) {
      return res.json({
        status: "success",
        message: "Cars data has been added",
        result,
      });
    } else {
      return res.json({
        status: "error",
        message: "Your account is not valid",
      });
    }
  } catch (error) {
    next(error);
  }
});

export default route;
