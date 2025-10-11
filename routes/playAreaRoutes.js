import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createPlayArea, getPlayAreas, getPlayAreaById, updatePlayArea, deletePlayArea } from "../controllers/playAreaController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: PlayAreas
 *   description: Oyun alanı CRUD işlemleri (Token gerekli)
 */

/**
 * @swagger
 * /api/playareas:
 *   post:
 *     summary: Yeni oyun alanı oluştur
 *     tags: [PlayAreas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               date: { type: string }
 *               startTime: { type: string }
 *               endTime: { type: string }
 *               duration: { type: number }
 *               status: { type: string }
 *     responses:
 *       201: { description: Oyun alanı başarıyla eklendi }
 *       401: { description: Token geçersiz veya eksik }
 */

/**
 * @swagger
 * /api/playareas:
 *   get:
 *     summary: Tüm oyun alanlarını getir
 *     tags: [PlayAreas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200: { description: Oyun alanı listesi }
 *       401: { description: Token geçersiz veya eksik }
 */

/**
 * @swagger
 * /api/playareas/{id}:
 *   get:
 *     summary: ID’ye göre oyun alanı getir
 *     tags: [PlayAreas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Oyun alanı bilgisi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Oyun alanı bulunamadı }
 */

/**
 * @swagger
 * /api/playareas/{id}:
 *   put:
 *     summary: Oyun alanı güncelle
 *     tags: [PlayAreas]
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
 *       200: { description: Oyun alanı güncellendi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Oyun alanı bulunamadı }
 */

/**
 * @swagger
 * /api/playareas/{id}:
 *   delete:
 *     summary: Oyun alanı sil
 *     tags: [PlayAreas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Oyun alanı silindi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Oyun alanı bulunamadı }
 */

router.post("/", protect, createPlayArea);
router.get("/", protect, getPlayAreas);
router.get("/:id", protect, getPlayAreaById);
router.put("/:id", protect, updatePlayArea);
router.delete("/:id", protect, deletePlayArea);

export default router;
