import mongoose from "mongoose";

const modelSchema = mongoose.Schema(
  {
    MoviE: { type: String, required: true },
    SlOT: { type: String, required: true },
    A1: { type: Number, default: 0 },
    A2: { type: Number, default: 0 },
    A3: { type: Number, default: 0 },
    A4: { type: Number, default: 0 },
    D1: { type: Number, default: 0 },
    D2: { type: Number, default: 0 },
  },
  { timestamp: true },
);
export default mongoose.model("Movies", modelSchema);
