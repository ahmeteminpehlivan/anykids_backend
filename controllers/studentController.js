import Student from "../models/Student.js";

// 🔹 Yeni öğrenci ekle
export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Öğrenci eklendi ✅", student });
  } catch (error) {
    res.status(500).json({ message: "Öğrenci eklenemedi ❌", error: error.message });
  }
};

// 🔹 Tüm öğrencileri getir
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Öğrenciler getirilemedi ❌", error: error.message });
  }
};

// 🔹 Tek öğrenci getir
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Öğrenci bulunamadı" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Öğrenci getirilemedi ❌", error: error.message });
  }
};

// 🔹 Öğrenci güncelle
export const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) return res.status(404).json({ message: "Öğrenci bulunamadı" });
    res.json({ message: "Öğrenci güncellendi ✅", student });
  } catch (error) {
    res.status(500).json({ message: "Öğrenci güncellenemedi ❌", error: error.message });
  }
};

// 🔹 Öğrenci sil
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Öğrenci bulunamadı" });
    res.json({ message: "Öğrenci silindi ✅" });
  } catch (error) {
    res.status(500).json({ message: "Öğrenci silinemedi ❌", error: error.message });
  }
};
