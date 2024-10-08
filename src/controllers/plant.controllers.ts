import prisma from "../models/db"
import httpResponses from "../utils/httpResponses.utils"
import logger from "../utils/logger"

const handlePlantException = (req, res, error, action) => {
    const plantId = Number(req.params.id)
    const errorMessage = error.message

    if (error.code === "P2025") {
        logger.error(`Error ${action} plant`, {
            plantId,
            error: errorMessage,
        })
        return httpResponses.notFound(res, "Plant not found.")
    } else {
        logger.error(`Error ${action} plant`, {
            plantId,
            error: errorMessage,
        })
        return httpResponses.interalServerError(res)
    }
}

export const getPlants = async (req, res) => {
    try {
        // TODO include query to filter
        const plants = await prisma.plant.findMany({
            where: {
                user_id: req.user.id,
            },
        })
        return httpResponses.sendSuccess(res, 200, plants)
    } catch (error) {
        return handlePlantException(req, res, error, "fetching")
    }
}

export const createPlant = async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return httpResponses.badRequest(res, "Content can't be empty!")
    }

    const user_id = req.user.id
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
        return handlePlantException(req, res, error, "creating")
    }
}

export const getOnePlant = async (req, res) => {
    try {
        const plantId = Number(req.params.id)
        const plant = await prisma.plant.findUniqueOrThrow({
            where: {
                id: plantId,
            },
        })
        console.log(plant)
        return httpResponses.sendSuccess(res, 200, plant)
    } catch (error) {
        return handlePlantException(req, res, error, "finding")
    }
}

export const editPlant = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return httpResponses.badRequest(res, "Content can't be empty!")
        }

        if (!req.body.name) {
            return httpResponses.badRequest(res, "Plant name can't be empty")
        }

        const plantId = Number(req.params.id)
        const plant = await prisma.plant.update({
            where: { id: plantId },
            data: { ...req.body },
        })
        return httpResponses.updated(res, plant)
    } catch (error) {
        return handlePlantException(req, res, error, "updating")
    }
}

export const deletePlant = async (req, res) => {
    try {
        const plantId = Number(req.params.id)
        const plant = await prisma.plant.delete({
            where: { id: plantId },
        })
        return httpResponses.deleted(res)
    } catch (error) {
        return handlePlantException(req, res, error, "deleting")
    }
}
