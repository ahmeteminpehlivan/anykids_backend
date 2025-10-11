import mongoose from "mongoose";

const cafeSaleSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "CafeMenu", required: true },
  quantity: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model("CafeSale", cafeSaleSchema);
