import { Router } from "express"
import {
    createPlant,
    getPlants,
    getOnePlant,
    editPlant,
    deletePlant,
} from "../controllers/plant.controllers"

const router = Router()

router.route("/").get(getPlants).post(createPlant)

router.route("/:id").get(getOnePlant).put(editPlant).delete(deletePlant)

export default router
