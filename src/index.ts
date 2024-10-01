import express, { Request, Response } from "express"
import logger from "morgan"
import cors from "cors"
import userRoutes from "./routes/user.routes";
import plantRoutes from "./routes/plant.routes";
import locationRoutes from "./routes/location.routes";
import eventRoutes from "./routes/event.routes";
import eventIntervalRoutes from "./routes/eventInterval.routes";

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


app.use("/users", userRoutes)
app.use("/plants", plantRoutes)
app.use("/locations", locationRoutes)
app.use("/events", eventRoutes)
app.use("/event-intervals", eventIntervalRoutes)
export default app
