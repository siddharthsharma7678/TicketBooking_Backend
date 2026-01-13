import express from "express";
import { addTicket, getlatesTicket } from "../Controller/ModelController.js";
const router = express.Router();

router.post("/", addTicket);
router.get("/", getlatesTicket);

export default router;
