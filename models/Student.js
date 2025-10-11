import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullname: { type: String, required: true }, 
  birthDate: { type: Date, required: true },
  parentName: { type: String, required: true },
  parentPhone: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
