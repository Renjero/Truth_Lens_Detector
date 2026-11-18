import express from "express"
import authService from "../controllers/authController.js"
import protect from "../middleware/authMiddleware.js";
// import Upload from "../middleware/fileUploadMiddleWare.js";

const router = express.Router()


router.post("/register", authService.RegisterUser)
router.post("/login", authService.loginUser)
router.get("/me", protect.forUser, authService.getMyProfile)
router.put("/me", protect.forUser, authService.updateProfile )

export default router
