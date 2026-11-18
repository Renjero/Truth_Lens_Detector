import express from "express";
import { getNewsHistory } from "../controllers/historyController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect.forUser, getNewsHistory);

export default router;