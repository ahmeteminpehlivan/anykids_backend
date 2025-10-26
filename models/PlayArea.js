import mongoose from "mongoose";

const playAreaSchema = new mongoose.Schema({
  fullname: { type: String },
  date: { type: String },
  startTime: { type: String },
  endTime: { type: String },
  durationMinutes: { type: Number },
  status: { type: Number },
  cost: { type: Number },
}, { timestamps: true });

export default mongoose.model("PlayArea", playAreaSchema);
