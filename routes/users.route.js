import express from "express";

import {
  getMyProfile,
  login,
  logout,
  registerNewUser,
} from "../controllers/users.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/me", isAuthenticated, getMyProfile);

router.post("/new", registerNewUser);

router.post("/login", login);

router.get("/logout", logout);

export default router;
