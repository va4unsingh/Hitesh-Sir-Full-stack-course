import express from "express";
import {
  getMe,
  login,
  logoutUser,
  registerUser,
  verifyUser,
} from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.get("/profile", isLoggedIn, getMe);
router.get("/logout", isLoggedIn, logoutUser);

export default router;
