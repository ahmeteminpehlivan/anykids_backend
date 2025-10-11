import CafeMenu from "../models/CafeMenu.js";

export const createCafeMenu = async (req, res) => {
  try {
    const menu = new CafeMenu(req.body);
    await menu.save();
    res.status(201).json({ message: "Ürün eklendi ✅", menu });
  } catch (error) {
    res.status(500).json({ message: "Ürün eklenemedi ❌", error: error.message });
  }
};

export const getCafeMenus = async (req, res) => {
  try {
    const menus = await CafeMenu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: "Ürünler getirilemedi ❌", error: error.message });
  }
};

export const getCafeMenuById = async (req, res) => {
  try {
    const menu = await CafeMenu.findById(req.params.id);
    if (!menu) return res.status(404).json({ message: "Ürün bulunamadı" });
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: "Ürün getirilemedi ❌", error: error.message });
  }
};

export const updateCafeMenu = async (req, res) => {
  try {
    const menu = await CafeMenu.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!menu) return res.status(404).json({ message: "Ürün bulunamadı" });
    res.json({ message: "Ürün güncellendi ✅", menu });
  } catch (error) {
    res.status(500).json({ message: "Ürün güncellenemedi ❌", error: error.message });
  }
};

export const deleteCafeMenu = async (req, res) => {
  try {
    const menu = await CafeMenu.findByIdAndDelete(req.params.id);
    if (!menu) return res.status(404).json({ message: "Ürün bulunamadı" });
    res.json({ message: "Ürün silindi ✅" });
  } catch (error) {
    res.status(500).json({ message: "Ürün silinemedi ❌", error: error.message });
  }
};
