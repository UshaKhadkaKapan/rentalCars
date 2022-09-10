import express from "express";
import { createUserDetails, loginDetails } from "../Modal/userModel.js";
const route = express.Router();

route.post("/", async (req, res, next) => {
  try {
    const user = await createUserDetails(req.body);

    if (user) {
      return res.json({
        status: "success",
        message: "User Details has been added",
        user,
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
    console.log(username, password);
    const user = await loginDetails({ username, password });

    if (user) {
      return res.json({
        status: "success",
        message: "Login Successful",
        user,
      });
    } else {
      return res.json({
        status: "error",
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    next(error);
  }
});

export default route;
