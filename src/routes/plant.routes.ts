import { Router } from "express"
import { getPlants } from "../controllers/plant.controllers"

const router = Router()

router.route("/")
    .get(getPlants)
    .post()

router.route("/:id")
    .get()
    .put()
    .delete()

export default router
