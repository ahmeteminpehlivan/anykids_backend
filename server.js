import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import userRoutes from "./routes/userRoutes.js";
// import studentRoutes from "./routes/studentRoutes.js";
// import educatorRoutes from "./routes/educatorRoutes.js";
// import playgroundRoutes from "./routes/playgroundRoutes.js";

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

// Eğer Render'daysa BASE_URL kullan, değilse localhost
const BASE_URL =
  process.env.BASE_URL ||
  `http://localhost:${PORT}`;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AnyKids API",
      version: "1.0.0",
      description:
        "User, Student, Educator ve Playground CRUD işlemleri için API dokümantasyonu",
    },
    servers: [
      {
        url: BASE_URL,
        description: "Aktif Sunucu",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 🔹 Route kayıtları
app.use("/api/users", userRoutes);
// app.use("/api/students", studentRoutes);
// app.use("/api/educators", educatorRoutes);
// app.use("/api/playgrounds", playgroundRoutes);

// 🔹 Ana route
app.get("/", (req, res) => {
  res.send(`API çalışıyor ✅ Swagger: <a href="/api-docs">/api-docs</a>`);
});

// 🔹 Server başlat
app.listen(PORT, () =>
  console.log(`🚀 Server çalışıyor: ${BASE_URL} (Port: ${PORT})`)
);
