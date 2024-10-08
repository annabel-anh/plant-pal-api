import { Router } from "express";

const router = Router()

router.route("/")
    .get()
    .post()

router.route("/:id")
    .get()
    .put()
    .delete()

router.route("/:id/plants")
    .get()

export default router
