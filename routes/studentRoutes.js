import express from "express";
import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Öğrenci CRUD işlemleri (Token gerekli)
 */

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Yeni öğrenci oluştur
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string 
 *               birthDate:
 *                 type: string
 *               parentName:
 *                 type: string
 *               parentPhone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Öğrenci eklendi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.post("/", protect, createStudent);

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Tüm öğrencileri getir
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Öğrenci listesi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.get("/", protect, getStudents);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: ID’ye göre öğrenci getir
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Öğrenci bilgisi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.get("/:id", protect, getStudentById);

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Öğrenci güncelle
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Öğrenci güncellendi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.put("/:id", protect, updateStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Öğrenci sil
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Öğrenci silindi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.delete("/:id", protect, deleteStudent);

export default router;
