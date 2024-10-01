import {Router} from "express"

const router = Router()

router.route("/users/me")
    .get()
    .put()
    .delete()

export default router