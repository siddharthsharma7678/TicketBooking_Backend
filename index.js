import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
const app = express();

config();
try {
  mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => console.log("Mongodb connected successfully"))
    .catch((e) => {
      console.error(e);
    });
} catch (e) {
  console.log(e.message);
}

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(8080, () => {
  console.log("server is running");
});
