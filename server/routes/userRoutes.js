import express from "express";
import { getProfile } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Protected route for auth check
router.get("/protected", protect, (req, res) => {
  res.json({ user: req.user });
});

router.get("/profile", protect, getProfile);

export default router;
