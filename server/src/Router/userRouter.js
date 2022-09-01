import express from "express";
import { createUserDetails, loginDetails } from "../Modal/userModel.js";
const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    const result = await createUserDetails(req.body);
    res.json({
      status: "success",
      message: "User Details data has been added",
    });
  } catch (error) {
    next(error);
  }
});

route.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await loginDetails(username, password);

    if (user) {
      return res.json({
        status: "success",
        message: "Cars data has been added",
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
