import prisma from "../models/db"
import { comparePasswords, createJWT } from "../utils/auth.utils"

export const createUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        },
    })

    const token = createJWT(user)
    return res.json({ token })
}

export const logIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email,
        },
    })

    if (comparePasswords(req.body.password, user.password)) {
        res.status(401)
        res.json({ message: "not authorized" })
        return
    }

    const token = createJWT(user)
    return res.json({ token })
}
