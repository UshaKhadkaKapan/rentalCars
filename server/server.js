import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;
import connectMongo from "./src/dbConfig/dbConfig.js";
connectMongo();

app.get("/", (req, res) => {
  res.json({
    message: "you reach a e-commerce api",
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${8000}`);
});
