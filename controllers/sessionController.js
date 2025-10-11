import Session from "../models/Session.js";

// 🔹 Yeni seans oluştur
export const createSession = async (req, res) => {
  try {
    const session = new Session(req.body);
    await session.save();
    res.status(201).json({ message: "Seans başarıyla oluşturuldu ✅", session });
  } catch (error) {
    console.error("Session ekleme hatası:", error);
    res.status(500).json({ message: "Seans eklenemedi ❌", error: error.message });
  }
};

// 🔹 Tüm seansları getir
export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate("studentsArray.studentId").populate("educatorId");
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Seanslar getirilemedi ❌", error: error.message });
  }
};

// 🔹 ID'ye göre seans getir
export const getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id).populate("studentsArray.studentId").populate("educatorId");
    if (!session) return res.status(404).json({ message: "Seans bulunamadı" });
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: "Seans getirilemedi ❌", error: error.message });
  }
};

// 🔹 Seans güncelle
export const updateSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate("studentsArray.studentId")
      .populate("educatorId");

    if (!session) return res.status(404).json({ message: "Seans bulunamadı" });
    res.json({ message: "Seans başarıyla güncellendi ✅", session });
  } catch (error) {
    res.status(500).json({ message: "Seans güncellenemedi ❌", error: error.message });
  }
};

// 🔹 Seans sil
export const deleteSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) return res.status(404).json({ message: "Seans bulunamadı" });
    res.json({ message: "Seans başarıyla silindi ✅" });
  } catch (error) {
    res.status(500).json({ message: "Seans silinemedi ❌", error: error.message });
  }
};