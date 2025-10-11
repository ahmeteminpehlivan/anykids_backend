import express from "express";
import {
  createSession,
  getSessions,
  getSessionById,
  updateSession,
  deleteSession,
} from "../controllers/sessionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Sessions
 *   description: Seans CRUD işlemleri (Token gerektirir)
 */

/**
 * @swagger
 * securitySchemes:
 *   bearerAuth:
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT
 *
 * security:
 *   - bearerAuth: []
 */

/**
 * @swagger
 * /api/sessions:
 *   post:
 *     summary: Yeni seans oluştur (Token gerekli)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               educatorId:
 *                 type: string
 *               date:
 *                 type: string
 *               startTime:
 *                 type: string
 *               endTime:
 *                 type: string
 *               category:
 *                 type: string
 *               state:
 *                 type: number
 *               studentsArray:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     studentId:
 *                       type: string
 *     responses:
 *       201:
 *         description: Seans başarıyla oluşturuldu
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.post("/", protect, createSession);

/**
 * @swagger
 * /api/sessions:
 *   get:
 *     summary: Tüm seansları getir (Token gerekli)
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Seans listesi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.get("/", protect, getSessions);

/**
 * @swagger
 * /api/sessions/{id}:
 *   get:
 *     summary: ID’ye göre seans getir (Token gerekli)
 *     tags: [Sessions]
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
 *         description: Seans bilgisi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.get("/:id", protect, getSessionById);

/**
 * @swagger
 * /api/sessions/{id}:
 *   put:
 *     summary: Seansı güncelle (Token gerekli)
 *     tags: [Sessions]
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
 *         description: Seans güncellendi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.put("/:id", protect, updateSession);

/**
 * @swagger
 * /api/sessions/{id}:
 *   delete:
 *     summary: Seansı sil (Token gerekli)
 *     tags: [Sessions]
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
 *         description: Seans başarıyla silindi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.delete("/:id", protect, deleteSession);

export default router;
