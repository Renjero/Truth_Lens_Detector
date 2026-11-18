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

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

import cors from "cors";
var corsOptions = {
  origin: "http://localhost:5173",
  method: "PUT,POST,GET,PUT,DELETE,HEAD",
  Credential: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors(corsOptions));

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.send("Backend is working!");
});

// Auth Routes
app.use("/api/auth", authRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);

// AI Routes

app.use("/api/news", newsRoutes);

app.use("/api/groq", groqRoutes);

// history
app.use("/api/history", historyRoutes);

// Contact API
app.use("/api/contact", contactRoutes);

// DB connection
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`Server is Running at: ${PORT}`.bgBlue);
});

// // Test middleware
// app.use((req, res, next) => {
//     console.log("Content-Type:", req.headers["content-type"]);
//     console.log("Body:", req.body);
//     next();
// });

// app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     console.log("Content-Type:", req.headers["content-type"]);
//     console.log("Body:", req.body);
//     next();
// });

// app.use("/api/auth", authRoutes);
