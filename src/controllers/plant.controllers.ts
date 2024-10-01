import { Request, Response } from "express"
import prisma from "../models/db"

// interface RequestWithUser extends Request {
//     user: { id: number}
// }

export const getPlants = async (req, res) => {
    const plants = await prisma.plant.findMany({
        where: {
            user_id: req.user.id,
        },
    })

    return res.json({ data: plants })
}
