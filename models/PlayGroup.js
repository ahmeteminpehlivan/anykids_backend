import mongoose from "mongoose";

const playGroupSchema = new mongoose.Schema({
  groupId: { type: String, required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  remainingUsage: { type: Number, required: true },
}, { timestamps: true });

const PlayGroup = mongoose.model("PlayGroup", playGroupSchema);

export default PlayGroup;
