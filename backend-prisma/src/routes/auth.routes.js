import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getMe,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", registerUser);

authRouter.post("/login", loginUser);

authRouter.get("/logout", logoutUser);

authRouter.get("/me", getMe);

export default authRouter;
