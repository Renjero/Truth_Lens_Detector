import express from "express";

import adminService from "../controllers/admine/admineController.js";

import protect from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/users", protect.forAdmin, adminService.getAllUsers);



export default router;