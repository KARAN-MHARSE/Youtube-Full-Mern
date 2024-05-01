const {AsyncHandler} = require('../utils/AsyncHandler')
const {ApiError} = require('../utils/ApiError')
const User = require('../models/user.model')


const ChannelInfo = AsyncHandler(async(req,res)=>{
    const {userId} = req.params;

    if(!userId){
        throw new ApiError(400,'userId is missing')
    }

    const channelData = await User.aggregate([
        {
            $match:{
                _id:userId
            }
        },
        // {
        //     $lookup:{
        //         from:'subscriptions',
        //         localField:"_id",
        //         foreignField:'channel',
        //         as:'subscribers'
        //     }
        // },
        // {
        //     $lookup:{
        //         from:'subscriptions',
        //         localField:"_id",
        //         foreignField:'subscriber',
        //         as:'subscribedTo'
        //     }
        // },
        // {
        //     $addFields:{
        //         subscribersCound:{
        //             $size:"$subscribers"
        //         },
        //         channelSubscribedToCount:{
        //             $size: "$subscribedTo"
        //         },
        //     }
        // },
        {
            $project:{
                userName:1,
                email:1,
                profile:1,
                // subscribersCound:1,
                // channelSubscribedToCount:1
            }
        }
    ])

    // console.log(channelData)

    if(!channelData?.length){
        throw new ApiError(404,"the channel doesnt exist")
    }

    
    res
    .status(200)
    .json({
        success:true,
        channelData:channelData[0],
        error:false
    })
})

module.exports = {ChannelInfo}