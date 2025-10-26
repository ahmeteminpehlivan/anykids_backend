import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Token oluşturucu yardımcı fonksiyon
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Şifre değiştir
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Token'dan gelen kullanıcı bilgisi
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Mevcut şifre yanlış" });
    }

    user.password = newPassword; // Şifreyi modeldeki pre('save') hashleyecek
    await user.save();

    res.json({ message: "Şifre başarıyla güncellendi ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Kayıt ol
export const register = async (req, res) => {
  try {
    const { fullname,email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Kullanıcı adı zaten kayıtlı" });

    const user = await User.create({ fullname,email, password });
    const token = generateToken(user._id);
    res.status(201).json({
      message: "Kayıt başarılı ✅",
      token,
      user: { fullname: user.fullname,email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Giriş yap
export const login = async (req, res) => {
  try {
    console.log("req:" + req);
    const { email, password } = req.body;
    console.log("email:" + email);
    
    const user = await User.findOne({ email });
    console.log("User:" + user);
    

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Kullanıcı adı veya şifre hatalı" });
    }

    const token = generateToken(user._id);
    res.json({
      message: "Giriş başarılı ✅",
      token,
      user: { email: user.email, fullname: user.fullname },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
