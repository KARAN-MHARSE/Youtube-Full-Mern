const express = require('express')
const router = express.Router()
const {upload} = require('../middlewares/multer')
const {register,login,getUserDetail} = require('../controllers/auth.controller')



router.route('/register').post(upload.single('avatar'),register)
router.route('/login').post(login)
router.route('/getUserDetail/:userId').get(getUserDetail)


module.exports = router