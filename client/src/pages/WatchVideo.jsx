import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { IoDownloadOutline } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { BiMoneyWithdraw } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'


function WatchVideo() {
    const {id} = useParams()
    const {currentUser} = useSelector((state)=>state)
    // console.log(currentUser._id)
    const [videoData,setVideoData] = useState(null)
    console.log(videoData)
    
    useEffect(()=>{
        const start = async()=>{
            const res = await fetch(`http://localhost:6060/api/v1/user/video//getVideoByID/${id}`)
            const data = await res.json()
            setVideoData(data)
        }
        start()
    },[id])

    const checkAndSubscribe = async(e)=>{
        e.preventDefault()
        const subScriptionData = {
            ownerId:videoData.video.ownerID,
            currentUserId:currentUser._id 
        }
        const res = await fetch('http://localhost:6060/api/v1/channel/subcription/doSubcribed',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json', // Specify JSON content type
              },
            body:JSON.stringify(subScriptionData)
        })
        const data = await res.json()
        console.log(data)
    }

    const handleDownload = (videoLink)=>{
        console.log(videoLink)
        const link = document.createElement('a')
        link.href = videoLink
        link.download = 'video.jpg'

        document.body.appendChild(link)
        link.click()

        document.body.removeChild(link)
    }

    
   
  return (
    <div className='text-white w-full'>
        <div className='flex lg:flex-row flex-col gap-7'>
            {/* Left Side */}
            {
                videoData && (
                    <div className='lg:basis-[70%]'>
                <img
                className='size-full rounded-lg max-h-[450px] object-contain bg-cardBg'
                src={videoData.video.thumbnailUrl} alt="" />
                <h2 className='my-3 font-semibold'>{videoData.video.title}</h2>
                {/* VideoInfo */}
                <div className='videoInfo flex justify-between '>
                    <div className='flex items-center gap-3'>
                        <div className="text-white font-semibold bg-blue-500 size-[30px] flex items-center justify-center rounded-full">
                            <p>{videoData.video.userName.charAt(0).toUpperCase()}</p>
                        </div>
                        <div>
                            <h1 className='text-[15px] font-semibold'>{videoData.video.userName}</h1>
                            <p className=' text-[12px] text-[#ffffff80] whitespace-nowrap'>{videoData.video.totalSubscribers} Subscribers</p>
                        </div>
                        <button
                        onClick={checkAndSubscribe}
                        className='bg-cardBg text-sm font-semibold px-3 py-2 rounded-3xl'
                        >Subscribed</button>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex gap-2 bg-cardBg px-3  items-center rounded-[50px]'>
                            <AiOutlineLike/>
                            <p>14k</p>
                        </div>
                        <div className='flex gap-2 bg-cardBg px-3  items-center rounded-[50px]'>
                            <RiShareForwardLine/>
                            <p>Share</p>
                        </div>
                        <div 
                        onClick={()=>handleDownload(videoData.video.videoUrl)}
                        className='flex gap-2 bg-cardBg px-3  items-center hidden sm:flex rounded-[50px] cursor-pointer'>
                            <IoDownloadOutline/>
                            <p>Download</p>
                        </div>
                        {/* <div className='flex gap-2 bg-cardBg px-3  items-center hidden sm:flex rounded-[50px]'>
                            <BiMoneyWithdraw/>
                            <p>Thanks</p>
                        </div> */}
                        <div className='flex gap-2 bg-cardBg px-3  items-center rounded-[50px]'>
                            <BsThreeDots/>
                        </div>
                    </div>
                </div>
            </div>
                )
            }
            
            {/* Right Side */}  
            <div className='lg:basis:[25%]'>
                {/* card */}
                <div className='flex gap-3 mb-3'>
                    <img
                    className='max-w-[280px] rounded-lg'
                    src="https://tse4.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&P=0&h=180" alt="" />
                    <div>
                        <h1 className='line-clamp-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis veniam nulla!</h1>
                        <p className='text-[13px] text-[#ffffff80] mt-2'>Karan Mharse</p>
                        <div className='text-[13px] flex gap-2 text-[#ffffff80]'>
                            <p>134k views .</p>
                            <p>19 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 mb-3'>
                    <img
                    className='max-w-[280px] max-h-[200px] rounded-lg object-contain'
                    src="https://tse4.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&P=0&h=180" alt="" />
                    <div>
                        <h1 className='line-clamp-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis veniam nulla!</h1>
                        <p className='text-[13px] text-[#ffffff80] mt-2'>Karan Mharse</p>
                        <div className='text-[13px] flex gap-2 text-[#ffffff80]'>
                            <p>134k views .</p>
                            <p>19 hours ago</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 mb-3'>
                    <img
                    className='max-w-[280px] rounded-lg'
                    src="https://tse4.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&P=0&h=180" alt="" />
                    <div>
                        <h1 className='line-clamp-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis veniam nulla!</h1>
                        <p className='text-[13px] text-[#ffffff80] mt-2'>Karan Mharse</p>
                        <div className='text-[13px] flex gap-2 text-[#ffffff80]'>
                            <p>134k views .</p>
                            <p>19 hours ago</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default WatchVideo