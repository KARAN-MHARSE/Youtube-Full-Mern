const express = require('express')
const router = express.Router()
const {upload} = require('../middlewares/multer')
const {register,login} = require('../controllers/auth.controller')


router.route('/register').post(upload.single('avatar'),register)
router.route('/login').post(login)


module.exports = router