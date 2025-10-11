import Educator from "../models/Educator.js";

export const createEducator = async (req, res) => {
  try {
    const educator = new Educator(req.body);
    await educator.save();
    res.status(201).json({ message: "Eğitmen eklendi ✅", educator });
  } catch (error) {
    res.status(500).json({ message: "Eğitmen eklenemedi ❌", error: error.message });
  }
};

export const getEducators = async (req, res) => {
  try {
    const educators = await Educator.find();
    res.json(educators);
  } catch (error) {
    res.status(500).json({ message: "Eğitmenler getirilemedi ❌", error: error.message });
  }
};

export const getEducatorById = async (req, res) => {
  try {
    const educator = await Educator.findById(req.params.id);
    if (!educator) return res.status(404).json({ message: "Eğitmen bulunamadı" });
    res.json(educator);
  } catch (error) {
    res.status(500).json({ message: "Eğitmen getirilemedi ❌", error: error.message });
  }
};

export const updateEducator = async (req, res) => {
  try {
    const educator = await Educator.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!educator) return res.status(404).json({ message: "Eğitmen bulunamadı" });
    res.json({ message: "Eğitmen güncellendi ✅", educator });
  } catch (error) {
    res.status(500).json({ message: "Eğitmen güncellenemedi ❌", error: error.message });
  }
};

export const deleteEducator = async (req, res) => {
  try {
    const educator = await Educator.findByIdAndDelete(req.params.id);
    if (!educator) return res.status(404).json({ message: "Eğitmen bulunamadı" });
    res.json({ message: "Eğitmen silindi ✅" });
  } catch (error) {
    res.status(500).json({ message: "Eğitmen silinemedi ❌", error: error.message });
  }
};
