
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/dbConfig.js";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import groqRoutes from "./routes/groqRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Environment
const isProduction = process.env.NODE_ENV === "production";

console.log("NODE_ENV:", process.env.NODE_ENV);

// File paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// React frontend build folder
const frontendPath = path.resolve(__dirname, "../client/dist");
const frontendIndex = path.join(frontendPath, "index.html");

// CORS configuration
app.use(
  cors({
    origin: isProduction
      ? process.env.CLIENT_URL || true
      : process.env.CLIENT_URL || "http://localhost:5173",
      
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
  }),
);

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.status(200).send("Backend is working!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/groq", groqRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/contact", contactRoutes);

// Unknown API routes
app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

// Development / Production
if (isProduction) {
  console.log(
    "Project is Running in Production Environment.".bgGreen,
  );

  // Check React build
  if (fs.existsSync(frontendIndex)) {
    console.log("React frontend build found.".bgGreen);

    // Serve React static files
    app.use(express.static(frontendPath));

    // React Router fallback (Express 5 compatible)
    app.get("/{*path}", (req, res) => {
      res.sendFile(frontendIndex);
    });
  } else {
    console.error(
      `React build not found at: ${frontendIndex}`.bgRed,
    );

    app.get("/{*path}", (req, res) => {
      res.status(500).send("React frontend build not found.");
    });
  }
} else {
  console.log(
    "Project is Running in Dev Environment. Frontend Go To PORT: 5173".bgMagenta,
  );

  app.get("/{*path}", (req, res) => {
    res.send("Backend is running in Development Mode");
  });
}

// Database connection
connectDB().catch((error) => {
  console.error("Database connection failed:", error.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is Running at PORT: ${PORT}`.bgBlue);
});
