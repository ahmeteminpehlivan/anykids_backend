import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createEducator, getEducators, getEducatorById, updateEducator, deleteEducator } from "../controllers/educatorController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Educators
 *   description: Eğitmen CRUD işlemleri (Token gerekli)
 */

/**
 * @swagger
 * /api/educators:
 *   post:
 *     summary: Yeni eğitmen oluştur
 *     tags: [Educators]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname: { type: string } 
 *               email: { type: string }
 *               phone: { type: string }
 *               expertise: 
 *                 type: array
 *                 items: { type: string }
 *     responses:
 *       201: { description: Eğitmen başarıyla eklendi }
 *       401: { description: Token geçersiz veya eksik }
 */

/**
 * @swagger
 * /api/educators:
 *   get:
 *     summary: Tüm eğitmenleri getir
 *     tags: [Educators]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200: { description: Eğitmen listesi }
 *       401: { description: Token geçersiz veya eksik }
 */

/**
 * @swagger
 * /api/educators/{id}:
 *   get:
 *     summary: ID’ye göre eğitmen getir
 *     tags: [Educators]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *         description: Eğitmenin ID'si
 *     responses:
 *       200: { description: Eğitmen bilgisi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Eğitmen bulunamadı }
 */

/**
 * @swagger
 * /api/educators/{id}:
 *   put:
 *     summary: Eğitmen güncelle
 *     tags: [Educators]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { type: object }
 *     responses:
 *       200: { description: Eğitmen güncellendi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Eğitmen bulunamadı }
 */

/**
 * @swagger
 * /api/educators/{id}:
 *   delete:
 *     summary: Eğitmen sil
 *     tags: [Educators]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Eğitmen silindi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Eğitmen bulunamadı }
 */

router.post("/", protect, createEducator);
router.get("/", protect, getEducators);
router.get("/:id", protect, getEducatorById);
router.put("/:id", protect, updateEducator);
router.delete("/:id", protect, deleteEducator);

export default router;
