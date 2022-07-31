import express from "express";
const route = express.Router();

// route.get("/", (req, res, next) => {
//   try {
//     res.json({
//       status: "success",
//       message: "todo get method",
//     });
//   } catch (error) {
//     next(error);
//   }
// });

route.post("/", (req, res, next) => {
  console.log(req.body);
  try {
    res.json({
      status: "success",
      message: "Cars data has been added",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
