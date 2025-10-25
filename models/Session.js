import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    educatorId: { type: String },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    categoryId: { type: String, required: true },
    studentId: { type: String },
    status: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Session", sessionSchema);
