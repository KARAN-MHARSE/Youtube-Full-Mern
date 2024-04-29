const {AsyncHandler} = require('../utils/AsyncHandler')
const {ApiError} = require('../utils/ApiError')
const {uploadOnCloudinary} = require('../utils/cloudinary')
const Video = require('../models/video.model')


const uploadVideo = AsyncHandler(async(req,res)=>{
    const {title,description,owner} = req.body;

    if([title,description].some((field)=>field.trim() == "")){
        throw new ApiError(404,"All fields are required")
    }

    const videoLocalPath = req.files?.videoUrl[0].path;
    const thumbnailLocalPath = req.files?.thumbnailUrl[0].path;

    if(!videoLocalPath && !thumbnailLocalPath){
        throw new ApiError(404,"Thumbnail and video files are required")
    }

    const videoUrl1 = await uploadOnCloudinary(videoLocalPath)
    const thumbnailUrl1 = await uploadOnCloudinary(thumbnailLocalPath)

    videoUrl = videoUrl1.url;
    thumbnailUrl = thumbnailUrl1.url;
    // console.log(videoUrl)
    // console.log(thumbnailUrl)

    const video = await Video.create({
        title,
        description,
        videoUrl,
        thumbnailUrl,
        owner
    })

    if(!video){
        throw new ApiError(500,'Something went wrong')
    }
    res.status(201).json({
        success:true,
        video,
        error:false
    })
})

const getAllVideos  = AsyncHandler(async(req,res)=>{
    const video = await Video.find({})

    res.status(200).json({
        success:true,
        video,
        error:false
    })
})

const getVideoById = AsyncHandler(async(req,res)=>{
    const {videoId} = req.params;

    const video = await Video.findById(videoId);
    res
    .status(200)
    .json({
        success:true,
        video,
        error:false
    })
})

module.exports = {uploadVideo,getAllVideos,getVideoById}