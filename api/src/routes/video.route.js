const express = require('express')
const router = express.Router()
const {uploadVideo,getAllVideos,getVideoById,doComment} = require('../controllers/video.controller')
const {upload} = require('../middlewares/multer')
const {verifyJwt} = require('../middlewares/auth.middleware')

router.route('/upload').post(verifyJwt,
    upload.fields([
        {
            name:"videoUrl",
            maxCount:1
        },
        {
            name:"thumbnailUrl",
            maxCount:1
        }
    ]),
    // upload.single('thumbnailUrl'),
    uploadVideo
);

router.route('/getAllVideos').get(getAllVideos)
router.route('/getVideoByID/:videoId').get(getVideoById).post(doComment)
router.route('/getVideoByID/doComment/:videoId').post(doComment)

// router.route('/getVideo/:videoId').get(karan)

module.exports = router