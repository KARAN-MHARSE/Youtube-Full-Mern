const mongoose = require('mongoose')

const connect = async()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
}

module.exports = {connect}