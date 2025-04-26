import express from "express";
import { registerUser, verifyUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:chai", verifyUser);

export default router;
