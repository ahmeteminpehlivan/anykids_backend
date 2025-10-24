import mongoose from "mongoose";

const educatorSchema = new mongoose.Schema({
  fullname: { type: String, required: true }, 
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  specialties: [{ type: Number }], // uzmanlık alanları
  status :  { type: Number }
}, { timestamps: true });

export default mongoose.model("Educator", educatorSchema);
