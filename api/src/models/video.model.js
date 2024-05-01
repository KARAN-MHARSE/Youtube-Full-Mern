const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    videoUrl:{
        type:String,
        required:true
    },
    thumbnailUrl:{
        type:String,
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    comments:[
        {
            commentBy:{
                type:mongoose.Schema.Types.ObjectId,
            },
            comment:{
                type:String
            }
        }
    ],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},
{
    timestamps:true
})


module.exports = mongoose.model('Video',videoSchema)