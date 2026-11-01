import express from 'express'
import aiRoutes from './routes/ai.routes.js'
const app= express()

//middleware for request body
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello from server")
})

app.use("/ai", aiRoutes)
export default app