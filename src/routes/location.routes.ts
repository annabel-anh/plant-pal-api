import { Router } from "express";

const router = Router()

router.route("/locations")
    .get()
    .post()

router.route("/locations/:id")
    .get()
    .put()
    .delete()

router.route("/locations/:id/plants")
    .get()

export default router
