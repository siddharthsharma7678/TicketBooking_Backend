import mongoose from "mongoose";

const modelSchema = mongoose.Schema({
  MoviE: { type: String, required: true },
  SlOT: { type: String, required: true },
  A1: { type: String, required: true },
  A2: { type: String, required: true },
  A3: { type: String, required: true },
  A4: { type: String, required: true },
  D1: { type: String, required: true },
  D2: { type: String, required: true },
});
export default mongoose.model("Movies", modelSchema);
