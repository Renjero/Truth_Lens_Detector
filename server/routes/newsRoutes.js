

import express from "express";

import {
  analyzeNewsController,
} from "../controllers/newsController.js";

const router = express.Router();

// POST: Analyze news using Gemini AI
router.post("/analyze", analyzeNewsController);

export default router;
