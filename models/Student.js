import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullname: { type: String, required: true }, 
  birthDate: { type: Date, required: true },
  parentName: { type: String, required: true },
  parentPhone: { type: String, required: true },
  status :  { type: Number }
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
