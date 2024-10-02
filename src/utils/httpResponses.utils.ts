const httpResponses = {
    sendError: function (res, statusCode, message) {
        return res.status(statusCode).json({ error: `${message}` })
    },

    sendSuccess: function (res, statusCode, data) {
        if (statusCode === 204) return res.status(statusCode).send()
        return res.status(statusCode).send(data)
    },

    authorizationRequired: function (res, message = "Authorization required") {
        const statusCode = 401
        return this.sendError(res, statusCode, `${statusCode} ${message}`)
    },

    interalServerError: function (res, message = "Internal server error") {
        const statusCode = 500
        return this.sendError(res, statusCode, `${statusCode} ${message}`)
    },

    notFound: function (res, message = "Not found") {
        const statusCode = 404
        return this.sendError(res, statusCode, `${statusCode} ${message}`)
    },

    badRequest: function (res, message = "Bad request") {
        const statusCode = 400
        return this.sendError(res, statusCode, `${statusCode} ${message}`)
    },

    created: function (res, data) {
        return this.sendSuccess(res, 201, data)
    },

    deleted: function (res) {
        return this.sendSuccess(res, 204)
    },

    updated: function (res, data) {
        return this.sendSuccess(res, 200, data)
    },
}

export default httpResponses
