import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {useSelector} from 'react-redux'

function Upload() {
  const formData = new FormData();
  const [loading,setLoading] = useState(false)
  const [thumbnail,setThumbnail] = useState()
  const [videopath,setVideoPath] = useState()
  const [videoData,setVideoData] = useState() 
  
  const currentUser = useSelector(state=>state.currentUser)
  // console.log(currentUser)

  const handleChange = (e)=>{
    e.preventDefault()

    // console.log(e.target.type)
    if(e.target.type == 'textarea' || e.target.type == 'text'){
      setVideoData({...videoData,[e.target.id]:e.target.value})
    }  

    if(e.target.id == 'thumbnailUrl'){
      setThumbnail(e.target.files[0])
    }

    if(e.target.id == 'videoUrl'){
      setVideoPath(e.target.files[0]);
    }
  }

  const handleSubmit = async(e) =>{
    setLoading(true)
    formData.append('thumbnailUrl',thumbnail)
    formData.append('videoUrl',videopath)
    formData.append('owner',currentUser._id)
    
    for(const key in videoData){
      formData.append(key,videoData[key])
    }



    const res = await fetch('http://localhost:6060/api/v1/user/video/upload',{
      method:"POST",
      body:formData
    })
    const data = await res.json();
    // console.log(data)
    setLoading(false)
  }

  

  return (
    
    <div className="p-5 text-lightText w-full">
      {
      currentUser ? (
        <div>
          <h1 className="text-2xl font-semibold text-white ">Upload Video</h1>
      <h2 className="text-[15px]">Upload video you want to share</h2>
      <div  className='flex flex-col sm:flex-row  mt-5 gap-9'>
        <div id='left' className="w-[50%] h-[430px] flex flex-col items-center justify-center gap-5 border border-lightText border-dashed">
          <AiOutlineCloudUpload size='100'/>
          <p>Select the image by clicking the below button</p>
          <input 
          className='hidden'
          onChange={handleChange}
          id='videoUrl' 
          type="file" />
          <button
            className="bg-red-600 px-9 text-white font-bold py-1 rounded-lg"
            onClick={()=>document.getElementById('videoUrl').click()}
          >SELECT VIDEO</button>
        </div>
        <div id='right' className="w-[50%]">
            <h1 className='text-white text-xl font-semibold mb-2'>Add Details</h1>
            <div className="w-full border border-lightText p-3 my-5">
                <p>Upload the thumbnail</p>
                <input
                 onChange={handleChange}
                 type="file"
                 id="thumbnailUrl" />
            </div>
            <div className="w-full border border-lightText p-3 my-5">
                <p>Title:</p>
                <input 
                onChange={handleChange}
                    className="w-[100%] px-2 py-1 bg-transparent border border-lightText rounded-lg"
                    placeholder="Enter the title of the project"
                    type="text" 
                    name="" 
                    id="title" />
            </div>
            <div className="w-full border border-lightText p-3 my-5">
                <p>Description:</p>
                <textarea 
                onChange={handleChange}
                className="w-[100%] h-[60px] px-2 py-1 bg-transparent border border-lightText rounded-lg"
                placeholder="Enter the description about the project"
                name="" 
                id="description" 
                cols="30" 
                rows="10"></textarea>
            </div>
            <div className="w-full flex justify-center">
                <button
                onClick={handleSubmit}
                className=" bg-red-600 px-9 text-white font-bold py-1 rounded-lg"
                >Upload Video</button>
            </div>
        </div>
      </div>
      <div className={`flex flex-col gap-2 absolute left-[50%] top-[50%] ${!loading&&'hidden'}`}>
            <div className='w-16 h-16 border-4 border-t-9 border-t-black border-gray-200 rounded-full animate-spin'></div>
            <h1>Uploading</h1>
      </div>
        </div>
      ):(
        <div className="w-full h-[80vh] flex items-center justify-center">
          <h1>you can't access this page</h1>
        </div>
      )
    }
      
      {/* lOading */}
      <div className={`flex flex-col gap-2 absolute left-[50%] top-[50%] ${!loading&&'hidden'}`}>
            <div className='w-16 h-16 border-4 border-t-9 border-t-black border-gray-200 rounded-full animate-spin'></div>
            <h1>Uploading</h1>
      </div>
    </div>
  )
}

export default Upload