import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import requireSignIn from "../middlewares/requireSignIn.js";

const router = express.Router();

router.get("/:id", requireSignIn, getMessage);
router.post("/send/:id", requireSignIn, sendMessage);

export default router;