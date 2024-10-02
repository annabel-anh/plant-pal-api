const httpResponses = {
    sendError: (res, statusCode, message) => {
        return res.status(statusCode).json({ error: `${message}` })
    },

    sendSuccess: (res, statusCode, message) => {
        return res.status(statusCode).json({ message: `${message}` })
    },

    authorizationRequired: (res) => {
        const statusCode = 401
        return httpResponses.sendError(
            res,
            statusCode,
            `${statusCode} Authorization required`
        )
    },

    interalServerError: (res) => {
        const statusCode = 500
        return httpResponses.sendError(
            res,
            statusCode,
            `${statusCode} Internal server error`
        )
    },

    notFound: (res) => {
        const statusCode = 404
        return httpResponses.sendError(
            res,
            statusCode,
            `${statusCode} Not found`
        )
    },
}

export default httpResponses
