import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { fullname, email, password } = req.body;
    user.fullname = fullname;
    user.email = email;
    user.password = password;
    await user.save(); // pre('save') tetiklenir
    if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    res.json({ message: "Kullanıcı güncellendi ✅", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Kullanıcı güncellenemedi ❌", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    res.json({ message: "Kullanıcı silindi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
