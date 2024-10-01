import express, { Request, Response } from "express"
import logger from "morgan"
import cors from "cors"
import authRoutes from "./routes/auth.routes"
import apiRoutes from "./routes/api.routes"
import dotenv from "dotenv"

dotenv.config()
console.log("JWT Secret:", process.env.JWT_SECRET)

const app = express()
const PORT = 3000

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.status(200)
    res.send("Welcome to Plant Pal API!")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

app.use("/", authRoutes)
app.use("/api/v1", apiRoutes)

export default app
