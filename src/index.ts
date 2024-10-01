import express, { Request, Response } from "express"
import logger from "morgan"
import cors from "cors"

const app = express()
const PORT = 3000

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req: Request, res: Response) => {
    res.status(200)
    res.send("Welcome to Plant Pal API!")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

export default app
