import express from "express";
import {
  getUsers,
  getUserById, 
  deleteUser,
  updateUser
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Kullanıcı yönetimi işlemleri
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Tüm kullanıcıları getirir (Token gerektirir)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Kullanıcı listesi
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.get("/", protect, getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: ID'ye göre kullanıcı getirir (Token gerektirir)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Kullanıcı ID'si
 *     responses:
 *       200:
 *         description: Kullanıcı bulundu
 *       404:
 *         description: Kullanıcı bulunamadı
 */
router.get("/:id", protect, getUserById);
 
 

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Kullanıcı siler (Token gerektirir)
 *     tags: [Users]
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
 *         description: Kullanıcı silindi
 */
router.delete("/:id", protect, deleteUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Kullanıcı güncelle
 *     tags: [Users]
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
 *       200: { description: Kullanıcı güncellendi }
 *       401: { description: Token geçersiz veya eksik }
 *       404: { description: Kullanıcı bulunamadı }
 */
router.put("/:id", protect, updateUser);

export default router;
