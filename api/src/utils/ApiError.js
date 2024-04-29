class ApiError extends Error{
    constructor(
        statusCode,
        message='something went wrong'){
            super(message)
            this.statusCode = statusCode
            this.message = message

            Error.captureStackTrace(this,this.constructor)
    }
}

module.exports = {ApiError}