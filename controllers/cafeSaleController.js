import CafeSale from "../models/CafeSale.js";

export const createCafeSale = async (req, res) => {
  try {
    const sale = new CafeSale(req.body);
    await sale.save();
    res.status(201).json({ message: "Satış eklendi ✅", sale });
  } catch (error) {
    res.status(500).json({ message: "Satış eklenemedi ❌", error: error.message });
  }
};

export const getCafeSales = async (req, res) => {
  try {
    const sales = await CafeSale.find().populate("productId");
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: "Satışlar getirilemedi ❌", error: error.message });
  }
};

export const getCafeSaleById = async (req, res) => {
  try {
    const sale = await CafeSale.findById(req.params.id).populate("productId");
    if (!sale) return res.status(404).json({ message: "Satış bulunamadı" });
    res.json(sale);
  } catch (error) {
    res.status(500).json({ message: "Satış getirilemedi ❌", error: error.message });
  }
};

export const updateCafeSale = async (req, res) => {
  try {
    const sale = await CafeSale.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!sale) return res.status(404).json({ message: "Satış bulunamadı" });
    res.json({ message: "Satış güncellendi ✅", sale });
  } catch (error) {
    res.status(500).json({ message: "Satış güncellenemedi ❌", error: error.message });
  }
};

export const deleteCafeSale = async (req, res) => {
  try {
    const sale = await CafeSale.findByIdAndDelete(req.params.id);
    if (!sale) return res.status(404).json({ message: "Satış bulunamadı" });
    res.json({ message: "Satış silindi ✅" });
  } catch (error) {
    res.status(500).json({ message: "Satış silinemedi ❌", error: error.message });
  }
};
