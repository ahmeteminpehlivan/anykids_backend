import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createCafeSale, getCafeSales, getCafeSaleById, updateCafeSale, deleteCafeSale } from "../controllers/cafeSaleController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CafeSales
 *   description: Cafe satış CRUD işlemleri (Token gerekli)
 */

/**
 * @swagger
 * /api/cafesales:
 *   post:
 *     summary: Yeni cafe satış kaydı oluştur
 *     tags: [CafeSales]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date: { type: string }
 *               productId: { type: string }
 *               quantity: { type: number }
 *     responses:
 *       201: { description: Satış başarıyla eklendi }
 *       401: { description: Token geçersiz veya eksik }
 */

router.post("/", protect, createCafeSale);

/**
 * @swagger
 * /api/cafesales:
 *   get:
 *     summary: Tüm cafe satışlarını getir
 *     tags: [CafeSales]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200: { description: Cafe satış listesi }
 *       401: { description: Token geçersiz veya eksik }
 */

router.get("/", protect, getCafeSales);

/**
 * @swagger
 * /api/cafesales/{id}:
 *   get:
 *     summary: ID’ye göre satış getir
 *     tags: [CafeSales]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Satış bilgisi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Satış bulunamadı }
 */

router.get("/:id", protect, getCafeSaleById);

/**
 * @swagger
 * /api/cafesales/{id}:
 *   put:
 *     summary: Satışı güncelle
 *     tags: [CafeSales]
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
 *       200: { description: Satış güncellendi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Satış bulunamadı }
 */

router.put("/:id", protect, updateCafeSale);

/**
 * @swagger
 * /api/cafesales/{id}:
 *   delete:
 *     summary: Satışı sil
 *     tags: [CafeSales]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Satış silindi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Satış bulunamadı }
 */

router.delete("/:id", protect, deleteCafeSale);

export default router;
