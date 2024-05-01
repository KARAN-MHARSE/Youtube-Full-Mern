const express = require('express')
const router = express.Router()
const {doSubscribed} = require('../controllers/subscription.controller')

router.route('/doSubcribed').post(doSubscribed)

module.exports = router