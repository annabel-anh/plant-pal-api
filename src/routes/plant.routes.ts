import { Router } from "express"

const router = Router()

router.route("/plants")
    .get()
    .post()

router.route("/plants/:id")
    .get()
    .put()
    .delete()

export default router
