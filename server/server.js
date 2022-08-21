import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
import connectMongo from "./src/dbConfig/dbConfig.js";
connectMongo();

import RentalCarRouter from "./src/Router/RentalCarRouter.js";
app.use(express.json());
app.use("/api/v1/rentalcarrouter", RentalCarRouter);

app.get("/", (req, res) => {
  res.json("server is running");
});

app.use((error, req, res) => {
  res.status = error.status || 404;
  res.json({
    status: error,
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${8000}`);
});
