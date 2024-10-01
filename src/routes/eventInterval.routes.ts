import { Router } from "express";

const router = Router()

router.route("/event-intervals")
    .get()
    .post()

router.route("/event-intervals/:id")
    .get()
    .put()
    .delete()

export default router