import express from "express";
import { config } from "dotenv";
const app = express();
import ModelRoutes from "./Routes/ModelRoutes.js";
import cors from "cors";
import mongoconnect from "./Connection/connection.js";

const PORT = process.env.PORT || 8080;
config();
app.use(cors());
app.use(express.json());
mongoconnect();

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/api/booking", ModelRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
