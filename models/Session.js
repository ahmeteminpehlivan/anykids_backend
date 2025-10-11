import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  educatorId: { type: mongoose.Schema.Types.ObjectId, ref: "Educator", required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  category: { type: String, required: true },
  state: { type: Number, required: true },
  studentsArray: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" }
    },
  ],
});

export default mongoose.model("Session", sessionSchema);
