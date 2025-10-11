import mongoose from "mongoose";

const cafeMenuSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model("CafeMenu", cafeMenuSchema);
