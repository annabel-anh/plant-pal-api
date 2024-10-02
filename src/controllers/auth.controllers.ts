import prisma from "../models/db"
import { comparePasswords, createJWT, hashPassword } from "../utils/auth.utils"
import logger from "../utils/logger"
import httpResponses from "../utils/httpResponses.utils"
import { Request } from "express"

export const createUser = async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                password: await hashPassword(req.body.password),
            },
        })
        const token = createJWT(user)
        return res.json({ token })
    } catch (error) {
        logger.error(`Error creating new user`, {
            email: req.body.email,
            error: error.message,
        })
        return httpResponses.interalServerError(res)
    }
}

export const signIn = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        })

        const isPasswordValid = await comparePasswords(
            req.body.password,
            user.password
        )

        if (!user || !isPasswordValid) {
            return httpResponses.authorizationRequired(
                res,
                "Invalid email or password."
            )
        }

        const token = createJWT(user)
        return res.json({ token })
    } catch (error) {
        logger.error("Error signing in.")
        return httpResponses.interalServerError(res)
    }
}
