const fs = require('fs')
const v2 = require('cloudinary')

          
v2.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const getFileType = async(filePath) => {
    // Implement a function to get the file type (image or video)
    // You can use a library like mime-types to determine the file type
    const mime = require('mime-types');
    const fileType = mime.lookup(filePath);
    if(fileType.startsWith('image/')) {
        return 'image';
    } else if(fileType.startsWith('video/')) {
        return 'video';
    } else {
        return 'unknown';
    }
}

const uploadOnCloudinary = async(filePath) =>{
    try {
        if(!filePath) return null;

        const fileType = await getFileType(filePath);

        let resourceType;
        if(fileType === 'image') {
            resourceType = 'image';
        } else if(fileType === 'video') {
            resourceType = 'video';
        } else {
            throw new Error('Unsupported file type');
        }

        const res = await v2.uploader.upload(filePath,{
            resource_type: resourceType,
        });
        
        fs.unlinkSync(filePath)
        // console.log(res)
        return res
        
    } catch (error) {
        // console.log(error)

        fs.unlinkSync(filePath)
        return null
    }
}

module.exports = {uploadOnCloudinary}