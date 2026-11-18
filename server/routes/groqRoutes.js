
import express from "express";
import { verifyNews } from "../controllers/groqController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/verify",protect.forUser, verifyNews);

export default router;

