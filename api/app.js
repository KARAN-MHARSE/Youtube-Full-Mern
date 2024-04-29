const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const {connect} = require('./src/DB/connection')

// Middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())


// Routes
const authRoute = require('./src/routes/auth.route')
const videoRoute = require('./src/routes/video.route')
// Initialise the router
app.use('/api/v1/user/auth',authRoute)
app.use('/api/v1/user/video',videoRoute)


// Erro handling middleware
app.use((err,req,res,next)=>{
    res
    .status(400)
    .json({
        success:false,
        message:err.message
    })
})



const port = process.env.PORT || 5000
const start = async()=>{
    await connect().then(app.listen(port,console.log(`The server is listening on port ${port}`)))
}
start()
