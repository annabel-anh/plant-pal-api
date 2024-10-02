import prisma from "../models/db"
import { comparePasswords, createJWT, hashPassword } from "../utils/auth.utils"

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
        console.log(`Error creating new user ${req.body.email}: ${error}`)
        return res.status(500).json({ error: "Internal server error" })
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
            res.status(401)
            res.json({ message: "Invalid email or password." })
            return
        }

        const token = createJWT(user)
        return res.json({ token })
    } catch (error) {
        console.log(`Error signing in.`)
        return res.status(500).json({ error: "Internal server error" })
    }
}
