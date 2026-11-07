import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from "./routes/auth.js";
import { protect } from "./middleware/authMiddleware.js";
import User from "./models/userModel.js";

dotenv.config({ path: new URL('.env', import.meta.url).pathname });
console.log('ENV MONGO_URI:', process.env.MONGO_URI);


/* Serve the built frontend UI */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the built client UI
app.use(express.static(path.join(__dirname, "client", "dist")));

// API routes
app.use("/api/auth", authRoutes);

// Example protected route
app.get("/api/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Fallback for SPA routing – serve index.html for any unmatched route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

