import prisma from "../models/db"
import httpResponses from "../utils/httpResponses.utils"
import logger from "../utils/logger"

export const getPlants = async (req, res) => {
    if (!req.user) {
        return httpResponses.authorizationRequired(res)
    }

    try {
        const plants = await prisma.plant.findMany({
            where: {
                user_id: req.user.id,
            },
        })
        return httpResponses.sendSuccess(res, 200, plants)
    } catch (error) {
        logger.error(`Error fetching plants`, {
            user_id: req.user.id,
            error: error.message,
        })
        return httpResponses.interalServerError(res)
    }
}

export const createPlant = async (req, res) => {
    if (!req.user) {
        return httpResponses.authorizationRequired(res)
    }

    if (!req.body || Object.keys(req.body).length === 0) {
        return httpResponses.badRequest(res, "Content can't be empty!")
    }

    const user_id = req.user.id
    console.log(req.body)
    const { name, ...rest } = req.body

    if (!name) {
        return httpResponses.badRequest(res, "Plant name is required.")
    }

    try {
        const newPlant = await prisma.plant.create({
            data: {
                ...req.body,
                user_id,
            },
        })
        return httpResponses.created(res, newPlant)
    } catch (error) {
        logger.error("Error creating plant", { error: error.message })
    }
}
