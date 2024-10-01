import { Router } from "express"
import { createUser, signIn } from "../controllers/auth.controllers"

const router = Router()

router.route("/singup").post(createUser)
router.route("/signin").post(signIn)

export default router
