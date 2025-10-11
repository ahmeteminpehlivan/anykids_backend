import mongoose from "mongoose";

const playAreaSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  status: { type: String, required : true }, 
}, { timestamps: true });

export default mongoose.model("PlayArea", playAreaSchema);
