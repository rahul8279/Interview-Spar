import express from "express"
import dotenv from "dotenv"
dotenv.config()
import  cookieParser from "cookie-parser"
import cors from "cors"
import connecDB from "./config/db.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true
    }
))

const PORT = process.env.PORT || 3000;

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/session',sessionRoutes)
app.use('/api/v1/question',questionRoutes)

app.use('/api/v1/generate-questions',generateInterviewQuestions)
app.use('/api/v1/generate-explanations',generateConceptExplanations)

app.listen(PORT, () => {
    connecDB()
    console.log(`Server is running on port ${PORT}`)
})