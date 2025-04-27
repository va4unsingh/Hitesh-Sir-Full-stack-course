import express from "express";
import {
  login,
  registerUser,
  verifyUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:chai", verifyUser);
router.get("/login", login);

export default router;
