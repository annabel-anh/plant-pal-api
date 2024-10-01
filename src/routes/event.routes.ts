import { Router } from "express";

const router = Router()

router.route("/events")
    .get()
    .post()

router.route("/events/:id")
    .get()
    .put()
    .delete()

export default router