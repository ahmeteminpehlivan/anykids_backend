import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createCafeMenu, getCafeMenus, getCafeMenuById, updateCafeMenu, deleteCafeMenu } from "../controllers/cafeMenuController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CafeMenus
 *   description: Cafe ürünleri CRUD işlemleri (Token gerekli)
 */

/**
 * @swagger
 * /api/cafemenus:
 *   post:
 *     summary: Yeni cafe ürünü oluştur
 *     tags: [CafeMenus]
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
 *               price: { type: number }
 *     responses:
 *       201: { description: Ürün başarıyla eklendi }
 *       401: { description: Token geçersiz veya eksik }
 */

router.post("/", protect, createCafeMenu);

/**
 * @swagger
 * /api/cafemenus:
 *   get:
 *     summary: Tüm cafe ürünlerini getir
 *     tags: [CafeMenus]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200: { description: Cafe ürün listesi }
 *       401: { description: Token geçersiz veya eksik }
 */

router.get("/", protect, getCafeMenus);

/**
 * @swagger
 * /api/cafemenus/{id}:
 *   get:
 *     summary: ID’ye göre cafe ürünü getir
 *     tags: [CafeMenus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Ürün bilgisi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Ürün bulunamadı }
 */

router.get("/:id", protect, getCafeMenuById);

/**
 * @swagger
 * /api/cafemenus/{id}:
 *   put:
 *     summary: Cafe ürününü güncelle
 *     tags: [CafeMenus]
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
 *       200: { description: Ürün güncellendi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Ürün bulunamadı }
 */

router.put("/:id", protect, updateCafeMenu);

/**
 * @swagger
 * /api/cafemenus/{id}:
 *   delete:
 *     summary: Cafe ürününü sil
 *     tags: [CafeMenus]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Ürün silindi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Ürün bulunamadı }
 */

router.delete("/:id", protect, deleteCafeMenu);

export default router;
