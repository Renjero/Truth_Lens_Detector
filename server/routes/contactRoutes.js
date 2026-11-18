
import express from "express";

import {
  createContact,
  getContactHistory,
} from "../controllers/contactController.js";

import protect from "../middleware/authMiddleware.js";
import optionalAuth from "../middleware/optionalAuth.js";

const router = express.Router();

router.post("/", optionalAuth, createContact);
router.get("/history", protect.forUser, getContactHistory);
// Get logged-in user's contact history


export default router;
