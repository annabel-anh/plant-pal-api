import { Router } from "express"
import { createUser, logIn } from "../controllers/auth.controllers"

const router = Router()

router.route("/singup").post(createUser)
router.route("/login").post(logIn)

export default router
