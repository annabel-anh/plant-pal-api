const logger = {
    error: (message, context = {}) => {
        const contextStr = Object.entries(context).reduce(
            (accumulator, [key, value]) => {
                return (accumulator += `${key}=${value}`)
            },
            ""
        )
        console.log(`ERROR: ${message} ${contextStr}`)
    },
}

export default logger
