import userRoutes from "./user.routes"
import plantRoutes from "./plant.routes"
import locationRoutes from "./location.routes"
import eventRoutes from "./event.routes"
import eventIntervalRoutes from "./eventInterval.routes"
import { Router } from "express"
import { auth } from "../middlewares/auth.middlewares"

const router = Router()

router.use(auth)
router.use("/users", userRoutes)
router.use("/plants", plantRoutes)
router.use("/locations", locationRoutes)
router.use("/events", eventRoutes)
router.use("/event-intervals", eventIntervalRoutes)

export default router
