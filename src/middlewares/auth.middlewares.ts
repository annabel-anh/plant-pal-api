import jwt from "jsonwebtoken"

export const auth = (req, res, next) => {
    const bearer = req.headers.authorization

    if (!bearer) {
        res.status(401)
        res.json({ message: "not authorized" })
        return
    }

    const token = bearer.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401)
            res.json({ message: "invalid token" })
            console.log(err)
            return
        }
        req.user = decoded
        next()
    })
}
