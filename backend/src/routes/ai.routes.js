import express from "express"
import { generateCode } from "../controllers/ai.controller.js"
const router = express.Router()

router.get("/get-response", generateCode.getResponse)

export default router 