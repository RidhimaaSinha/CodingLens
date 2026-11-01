import express from "express";
import { getReview } from "../controllers/ai.controller.js";

const router = express.Router();
router.post("/get-response", getReview);

export default router;