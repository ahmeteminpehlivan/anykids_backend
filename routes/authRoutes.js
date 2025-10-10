import express from "express";
import { register, login, changePassword } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Kullanıcı kimlik doğrulama işlemleri
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Yeni kullanıcı kaydı oluşturur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               fullname:
 *                 type: string
 *                 example: Deneme Test
 *               email:
 *                 type: string
 *                 example: test@test.com
 *               password:
 *                 type: string
 *                 example: 12345
 *     responses:
 *       201:
 *         description: Kayıt başarılı
 *       400:
 *         description: Kullanıcı adı zaten kayıtlı
 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Kullanıcı girişi yapar ve JWT token döner
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: ahmet
 *               password:
 *                 type: string
 *                 example: 12345
 *     responses:
 *       200:
 *         description: Giriş başarılı
 *       401:
 *         description: Kullanıcı adı veya şifre hatalı
 */
router.post("/login", login);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Geçerli token ile kullanıcı bilgilerini döner
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token geçerli, kullanıcı bilgisi döner
 *       401:
 *         description: Token eksik veya geçersiz
 */
router.get("/me", protect, (req, res) => {
  res.json({ message: "Token geçerli ✅", user: req.user });
});

/**
 * @swagger
 * /api/auth/change-password:
 *   post:
 *     summary: Giriş yapmış kullanıcının şifresini değiştirir
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - currentPassword
 *               - newPassword
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 example: 12345
 *               newPassword:
 *                 type: string
 *                 example: 67890
 *     responses:
 *       200:
 *         description: Şifre başarıyla değiştirildi
 *       400:
 *         description: Mevcut şifre yanlış
 *       401:
 *         description: Token geçersiz veya eksik
 */
router.post("/change-password", protect, changePassword);

export default router;
