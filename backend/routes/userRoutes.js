import express from "express";
import requireSignIn from "../middlewares/requireSignIn.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", requireSignIn, getUsersForSidebar);

export default router;