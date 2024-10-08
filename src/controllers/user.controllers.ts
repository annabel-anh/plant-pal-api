import { hash } from "crypto"
import prisma from "../models/db"
import { hashPassword } from "../utils/auth.utils"
import httpResponses from "../utils/httpResponses.utils"
import logger from "../utils/logger"

const handleUserException = (req, res, error, action) => {
    const email = req.user.email
    const errorMessage = error.message

    if (error.code === "P2025") {
        logger.error(`Error ${action} profile`, {
            email,
            error: errorMessage,
        })
        return httpResponses.notFound(
            res,
            "Profile not found. Check your information and try again."
        )
    } else {
        logger.error(`Error ${action} profile`, {
            email,
            error: errorMessage,
        })
        return httpResponses.interalServerError(res)
    }
}

export const getProfile = async (req, res) => {
    try {
        const email = req.user.email
        const profile = await prisma.user.findUniqueOrThrow({
            where: { email: email },
            select: { first_name: true, last_name: true, email: true },
        })
        console.log(profile)
        return httpResponses.sendSuccess(res, 200, profile)
    } catch (error) {
        return handleUserException(req, res, error, "fetching")
    }
}

export const editProfile = async (req, res) => {
    const userId = req.user.id
    const { firstName, lastName, email, password } = req.body

    type UpdatedProfile = {
        firstName?: string
        lastName?: string
        email?: string
        password?: string
    }

    let updatedData: UpdatedProfile = {
        firstName,
        lastName,
        email,
    }

    if (password) {
        const hashedPassword = await hashPassword(password)
        updatedData.password = hashedPassword
    }

    try {
        const updatedProfile = await prisma.user.update({
            where: { id: userId },
            data: updatedData,
            select: { first_name: true, last_name: true, email: true },
        })
        return httpResponses.updated(res, updatedProfile)
    } catch (error) {
        handleUserException(req, res, error, "updating")
    }
}

export const deleteProfile = async (req, res) => {
    const userId = req.user.id
    try {
        const deletedProfile = await prisma.user.delete({
            where: { id: userId },
        })
        return httpResponses.deleted(res)
    } catch (error) {
        return handleUserException(req, res, error, "deleteing")
    }
}
