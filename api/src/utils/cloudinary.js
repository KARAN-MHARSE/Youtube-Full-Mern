const fs = require('fs')
const v2 = require('cloudinary')

          
v2.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});



const uploadOnCloudinary = async(filePath) =>{
    try {
        if(!filePath) return null;

        const res = await v2.uploader.upload(filePath,{
            resource_type: 'auto',
        });
        console.log('done')
        
        fs.unlinkSync(filePath)
        return res
        
    } catch (error) {
        console.log(error)

        fs.unlinkSync(filePath)
        return null
    }
}

module.exports = {uploadOnCloudinary}