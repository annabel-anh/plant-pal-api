import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const hashPassword = (password) => {
    try {
        const salt = 4
        const hashedPassword = bcrypt.hash(password, salt)
        return hashedPassword
    } catch (error) {
        throw new Error("Error hashing password")
    }
}

export const comparePasswords = (plainPassword, hashedPassword) => {
    try {
        const isMatch = bcrypt.compare(plainPassword, hashedPassword)
        return isMatch
    } catch (error) {
        throw new Error("Error comparing passwords")
    }
}

export const createJWT = (user) => {
    const secret = process.env.JWT_SECRET
    if (!secret) {
        console.log("No JWT secret found in .env file")
        return
    }
    const token = jwt.sign({ id: user.id, email: user.email }, secret)
    return token
}
