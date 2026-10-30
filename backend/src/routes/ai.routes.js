import express from "express"

const router = express.Router()

router.get("/get-response", (req,res)=>{
    const prompt = req.query.prompt
    
})

export default router 