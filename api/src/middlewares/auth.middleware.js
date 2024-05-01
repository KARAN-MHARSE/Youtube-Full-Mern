const {ApiError} = require('../utils/ApiError')
const {AsyncHandler} = require('../utils/AsyncHandler')
const User = require('../models/user.model')

const verifyJwt = AsyncHandler(async(req,res,next)=>{
    try {
        const refreshToken = req.cookie?.token
        console.log(refreshToken)
        next()
    } catch (error) {
        
    }
})

module.exports = {verifyJwt}