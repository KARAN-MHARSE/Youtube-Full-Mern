const express = require('express')
const router = express.Router()
const {uploadVideo,getAllVideos,getVideoById} = require('../controllers/video.controller')
const {upload} = require('../middlewares/multer')

router.route('/upload').post(
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
router.route('/getVideoByID/:videoId').get(getVideoById)
module.exports = router