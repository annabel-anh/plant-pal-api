import prisma from "../models/db"

export const getPlants = async (req, res) => {
    if (!req.user) {
        res.status(404)
        res.json({ message: "no user provided" })
    }
    console.log(req.user.id)
    const plants = await prisma.plant.findMany({
        where: {
            user_id: req.user.id,
        },
    })

    return res.json({ data: plants })
}
