import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import educatorRoutes from "./routes/educatorRoutes.js";
import playAreaRoutes from "./routes/playAreaRoutes.js";
import cafeMenuRoutes from "./routes/cafeMenuRoutes.js";
import cafeSaleRoutes from "./routes/cafeSaleRoutes.js";
import playGroupRoutes from "./routes/playGroupRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 MongoDB bağlantısı
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB bağlantısı başarılı"))
  .catch((err) => console.error("❌ MongoDB bağlantı hatası:", err));

// 🔹 Swagger ayarları
const PORT = process.env.PORT || 5000;

const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AnyKids API",
      version: "1.0.0",
      description: "AnyKids Servisleri",
    },
    servers: [
      {
        url: BASE_URL,
        description: "Aktif Sunucu",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 🔹 Route kayıtları
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/educators", educatorRoutes);
app.use("/api/playareas", playAreaRoutes);
app.use("/api/cafeMenus", cafeMenuRoutes);
app.use("/api/cafeSales", cafeSaleRoutes);
app.use("/api/playGroups", playGroupRoutes);

// 🔹 Ana route
app.get("/", (req, res) => {
  res.send(`API çalışıyor ✅ Swagger: <a href="/api-docs">/api-docs</a>`);
});

// 🔹 “Isınma” endpoint (Frontend’in Render’ı uyandırması için)
app.get("/api/ping", (req, res) => {
  res.status(200).json({ message: "pong", timestamp: new Date() });
});

// 🔹 Server başlat
app.listen(PORT, () =>
  console.log(`🚀 Server çalışıyor: ${BASE_URL} (Port: ${PORT})`)
);
