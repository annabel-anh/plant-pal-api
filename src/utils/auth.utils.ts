import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import logger from "./logger"

export const hashPassword = async (password) => {
    try {
        const salt = 4
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    } catch (error) {
        throw new Error("Error hashing password")
    }
}

export const comparePasswords = async (plainPassword, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(plainPassword, hashedPassword)
        return isMatch
    } catch (error) {
        throw new Error("Error comparing passwords")
    }
}

export const createJWT = (user) => {
    const secret = process.env.JWT_SECRET
    if (!secret) {
        logger.error("No JWT secret found in .env file.")
        return
    }
    const token = jwt.sign({ id: user.id, email: user.email }, secret)
    return token
}
