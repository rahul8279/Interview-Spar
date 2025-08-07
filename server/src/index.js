import dotenv from "dotenv"
dotenv.config()
import express from "express"
import  cookieParser from "cookie-parser"
import cors from "cors"
import connecDB from "./config/db.js"
import userRoutes from "./routes/user.route.js"
import sessionRoutes from "./routes/session.route.js"
import questionRoutes from "./routes/question.route.js"
import {generateConceptExplanations,  generateInterviewQuestions } from "./controllers/ai.controller.js"
import protectRoute from "./middlewares/protected.js"
import path from "path"

const app = express()
const __dirname = path.resolve();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true
    }
))

const PORT = process.env.PORT

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/session',sessionRoutes)
app.use('/api/v1/question',questionRoutes)

app.use('/api/v1/ai/generate-questions',protectRoute,generateInterviewQuestions)
app.use('/api/v1/ai/generate-explanations',protectRoute,generateConceptExplanations)

app.use(express.static(path.join(__dirname,"/client/dist")))
app.get(/(.*)/,(req, res) => {
  res.sendFile(path.resolve(__dirname,"client","dist","index.html"));
})

app.listen(PORT, () => { 
    connecDB()
    console.log(`Server is running on port ${PORT}`)
})