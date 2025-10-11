import PlayArea from "../models/PlayArea.js";

export const createPlayArea = async (req, res) => {
  try {
    const area = new PlayArea(req.body);
    await area.save();
    res.status(201).json({ message: "Oyun alanı eklendi ✅", area });
  } catch (error) {
    res.status(500).json({ message: "Oyun alanı eklenemedi ❌", error: error.message });
  }
};

export const getPlayAreas = async (req, res) => {
  try {
    const areas = await PlayArea.find();
    res.json(areas);
  } catch (error) {
    res.status(500).json({ message: "Oyun alanları getirilemedi ❌", error: error.message });
  }
};

export const getPlayAreaById = async (req, res) => {
  try {
    const area = await PlayArea.findById(req.params.id);
    if (!area) return res.status(404).json({ message: "Oyun alanı bulunamadı" });
    res.json(area);
  } catch (error) {
    res.status(500).json({ message: "Oyun alanı getirilemedi ❌", error: error.message });
  }
};

export const updatePlayArea = async (req, res) => {
  try {
    const area = await PlayArea.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!area) return res.status(404).json({ message: "Oyun alanı bulunamadı" });
    res.json({ message: "Oyun alanı güncellendi ✅", area });
  } catch (error) {
    res.status(500).json({ message: "Oyun alanı güncellenemedi ❌", error: error.message });
  }
};

export const deletePlayArea = async (req, res) => {
  try {
    const area = await PlayArea.findByIdAndDelete(req.params.id);
    if (!area) return res.status(404).json({ message: "Oyun alanı bulunamadı" });
    res.json({ message: "Oyun alanı silindi ✅" });
  } catch (error) {
    res.status(500).json({ message: "Oyun alanı silinemedi ❌", error: error.message });
  }
};
