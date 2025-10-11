import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createPlayGroup, getPlayGroups, getPlayGroupById, updatePlayGroup, deletePlayGroup } from "../controllers/playGroupController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: PlayGroups
 *   description: PlayGroup CRUD işlemleri (Token gerekli)
 */

/**
 * @swagger
 * /api/playgroups:
 *   post:
 *     summary: Yeni playGroup oluştur
 *     tags: [PlayGroups]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               groupId: { type: string }
 *               studentId: { type: string }
 *               startDate: { type: string, format: date }
 *               endDate: { type: string, format: date }
 *               remainingUsage: { type: number }
 *     responses:
 *       201: { description: PlayGroup başarıyla eklendi }
 *       401: { description: Token geçersiz veya eksik }
 */
router.post("/", protect, createPlayGroup);

/**
 * @swagger
 * /api/playgroups:
 *   get:
 *     summary: Tüm playGrupları getir
 *     tags: [PlayGroups]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200: { description: PlayGroup listesi }
 *       401: { description: Token geçersiz veya eksik }
 */
router.get("/", protect, getPlayGroups);

/**
 * @swagger
 * /api/playgroups/{id}:
 *   get:
 *     summary: ID’ye göre playGroup getir
 *     tags: [PlayGroups]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: PlayGroup bilgisi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: PlayGroup bulunamadı }
 */
router.get("/:id", protect, getPlayGroupById);

/**
 * @swagger
 * /api/playgroups/{id}:
 *   put:
 *     summary: PlayGroup güncelle
 *     tags: [PlayGroups]
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
 *       200: { description: PlayGroup güncellendi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: PlayGroup bulunamadı }
 */
router.put("/:id", protect, updatePlayGroup);

/**
 * @swagger
 * /api/playgroups/{id}:
 *   delete:
 *     summary: PlayGroup sil
 *     tags: [PlayGroups]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: PlayGroup silindi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: PlayGroup bulunamadı }
 */
router.delete("/:id", protect, deletePlayGroup);

export default router;
