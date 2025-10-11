import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullname: { type: String, required: true }, 
  birthdate: { type: Date, required: true },
  parentname: { type: String, required: true },
  parentphone: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
