import Session from "../models/Session.js";

export const createSession = async (req, res) => {
  try {
    const session = new Session(req.body);
    await session.save();
    res.status(201).json({ message: "Seans eklendi ✅", session });
  } catch (error) {
    res.status(500).json({ message: "Seans eklenemedi ❌", error: error.message });
  }
};

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Seansler getirilemedi ❌", error: error.message });
  }
};

export const getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ message: "Seans bulunamadı" });
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: "Seans getirilemedi ❌", error: error.message });
  }
};

export const updateSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!session) return res.status(404).json({ message: "Seans bulunamadı" });
    res.json({ message: "Seans güncellendi ✅", session });
  } catch (error) {
    res.status(500).json({ message: "Seans güncellenemedi ❌", error: error.message });
  }
};

export const deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) return res.status(404).json({ message: "Seans bulunamadı" });
    res.json({ message: "Seans silindi ✅" });
  } catch (error) {
    res.status(500).json({ message: "Seans silinemedi ❌", error: error.message });
  }
};
