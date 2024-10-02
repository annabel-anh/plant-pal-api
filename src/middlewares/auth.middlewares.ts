import jwt from "jsonwebtoken"
import httpResponses from "../utils/httpResponses.utils"
import logger from "../utils/logger"

export const auth = (req, res, next) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        return httpResponses.authorizationRequired(res)
    }

    const token = bearer.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            logger.error(err.message)
            return httpResponses.authorizationRequired(res)
        }
        req.user = decoded
        next()
    })
}
