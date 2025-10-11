import PlayGroup from "../models/PlayGroup.js";

// Yeni playGroup ekle
export const createPlayGroup = async (req, res) => {
  try {
    const { groupId, studentId, startDate, endDate, remainingUsage } = req.body;
    const playGroup = await PlayGroup.create({ groupId, studentId, startDate, endDate, remainingUsage });
    res.status(201).json(playGroup);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tüm playGrupları getir
export const getPlayGroups = async (req, res) => {
  try {
    const playGroups = await PlayGroup.find().populate("studentId", "firstName lastName");
    res.json(playGroups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ID’ye göre getir
export const getPlayGroupById = async (req, res) => {
  try {
    const playGroup = await PlayGroup.findById(req.params.id).populate("studentId", "firstName lastName");
    if (!playGroup) return res.status(404).json({ message: "PlayGroup bulunamadı" });
    res.json(playGroup);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Güncelle
export const updatePlayGroup = async (req, res) => {
  try {
    const playGroup = await PlayGroup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!playGroup) return res.status(404).json({ message: "PlayGroup bulunamadı" });
    res.json(playGroup);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Sil
export const deletePlayGroup = async (req, res) => {
  try {
    const playGroup = await PlayGroup.findByIdAndDelete(req.params.id);
    if (!playGroup) return res.status(404).json({ message: "PlayGroup bulunamadı" });
    res.json({ message: "PlayGroup silindi" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
