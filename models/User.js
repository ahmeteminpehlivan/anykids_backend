import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Geçerli bir e-posta adresi giriniz"]
    },
    password: {
      type: String,
      required: true,
      minlength: 4
    }
  },
  {
    timestamps: true // createdAt ve updatedAt otomatik eklenecek
  }
);

const User = mongoose.model("User", userSchema);
export default User;
