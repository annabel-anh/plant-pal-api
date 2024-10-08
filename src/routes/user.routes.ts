import { Router } from "express"
import {
    getProfile,
    editProfile,
    deleteProfile,
} from "../controllers/user.controllers"

const router = Router()

router.route("/me").get(getProfile).put(editProfile).delete(deleteProfile)

export default router
