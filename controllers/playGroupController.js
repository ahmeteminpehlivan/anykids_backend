import PlayGroup from "../models/PlayGroup.js";

export const createPlayGroup = async (req, res) => {
  try {
    const playgroup = new PlayGroup(req.body);
    await playgroup.save();
    res.status(201).json({ message: "Oyun Grubu eklendi ✅", playgroup });
  } catch (error) {
    res.status(500).json({ message: "Oyun Grubu eklenemedi ❌", error: error.message });
  }
};

export const getPlayGroups = async (req, res) => {
  try {
    const playgroups = await PlayGroup.find();
    res.json(playgroups);
  } catch (error) {
    res.status(500).json({ message: "Oyun Grubuler getirilemedi ❌", error: error.message });
  }
};

export const getPlayGroupById = async (req, res) => {
  try {
    const playgroup = await PlayGroup.findById(req.params.id);
    if (!playgroup) return res.status(404).json({ message: "Oyun Grubu bulunamadı" });
    res.json(playgroup);
  } catch (error) {
    res.status(500).json({ message: "Oyun Grubu getirilemedi ❌", error: error.message });
  }
};

export const updatePlayGroup = async (req, res) => {
  try {
    const playgroup = await PlayGroup.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!playgroup) return res.status(404).json({ message: "Oyun Grubu bulunamadı" });
    res.json({ message: "Oyun Grubu güncellendi ✅", playgroup });
  } catch (error) {
    res.status(500).json({ message: "Oyun Grubu güncellenemedi ❌", error: error.message });
  }
};

export const deletePlayGroup = async (req, res) => {
  try {
    const playgroup = await PlayGroup.findByIdAndDelete(req.params.id);
    if (!playgroup) return res.status(404).json({ message: "Oyun Grubu bulunamadı" });
    res.json({ message: "Oyun Grubu silindi ✅" });
  } catch (error) {
    res.status(500).json({ message: "Oyun Grubu silinemedi ❌", error: error.message });
  }
};
