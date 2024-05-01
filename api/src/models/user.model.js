const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        type:String,
        // required:true,
        lowercase:true,
        trim:true,
        index:true
    },
    profile:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    }    
},{
    timestamps:true
})

userSchema.plugin(aggregatePaginate)

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateRefreshToken = async function(){
    return await jwt.sign(
        {
            _id:this._id,
            email:this.email,
            userName:this.userName
        },
        process.env.REFRESH_TOKEN_SECRET_KEY,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


module.exports = mongoose.model('User',userSchema)