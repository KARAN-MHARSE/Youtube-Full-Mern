const express = require('express')
const router = express.Router()
const {ChannelInfo} = require('../controllers/channel.controller')

router.route('/:userId').get(ChannelInfo)

module.exports = router