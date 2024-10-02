import { Router } from "express"
import { createPlant, getPlants } from "../controllers/plant.controllers"

const router = Router()

router.route("/").get(getPlants).post(createPlant)

router.route("/:id").get().put().delete()

export default router
