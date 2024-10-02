import prisma from "../models/db"

export const getPlants = async (req, res) => {
    if (!req.user)
        return res.status(401).json({ error: "Authentication required." })

    try {
        const plants = await prisma.plant.findMany({
            where: {
                user_id: req.user.id,
            },
        })
        return res.json({ data: plants })
    } catch (error) {
        console.log(`Error fetching plants for user ${req.user.id}: ${error}`)
        return res.status(500).json({ error: "Internal server error" })
    }
}
