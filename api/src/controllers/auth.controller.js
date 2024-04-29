const {AsyncHandler} = require('../utils/AsyncHandler')
const {ApiError} = require('../utils/ApiError')
const User = require('../models/user.model')

const register = AsyncHandler(async(req,res)=>{
    const {fullName,userName,email,password} = req.body
    const profile = userName.charAt(0).toUpperCase(); 
    if([fullName,userName,email,password].some((field)=>field?.trim() === '')){
        throw new ApiError(400,"All fields are required")
    }

    const existedUser = await User.findOne({
        $or:[{userName,email}]
    })
    if(existedUser){
        throw new ApiError(409,"User is already registered")
    }

    // Upload user image to the cloudinary

    // upload data to mongo
    const user = await User.create({
        fullName,
        userName,
        email,
        password,
        profile
    })

    res
    .status(201)
    .json({
        success:true,
        user
    })
})

const login = AsyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    // console.log(email)

    if(!email){
        throw new ApiError(400,"credentials are required")
    }

    const user = await User.findOne({email})
    if(!user){
        throw new ApiError(404,"Invalid credentials")
    }

    const isPswdCorrect = await user.isPasswordCorrect(password)
    if(!isPswdCorrect){
        throw new ApiError(401,"Invalid credentials")
    }

    const refreshToken = await user.generateRefreshToken()

    const loggedUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly:true,
        secure:true
    }

    res
    .status(200)
    .cookie('refreshToken',refreshToken)
    .json({
        success:true,
        user:loggedUser
    })


})


module.exports = {register,login}