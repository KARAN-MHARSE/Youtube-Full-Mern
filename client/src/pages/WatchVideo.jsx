import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { IoDownloadOutline } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { BiMoneyWithdraw } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'
import DesciptionBox from '../components/DesciptionBox';
import Comment from '../components/Comment'
import '../pages/Home.css'


function WatchVideo() {
    const {id} = useParams()
    const {currentUser} = useSelector((state)=>state)
    const [videoData,setVideoData] = useState(null)
    const [videoList,setVideoList] = useState()
    const [comment,setComment] = useState()
    
    useEffect(()=>{
        const start = async()=>{
            const res = await fetch(`http://localhost:6060/api/v1/user/video//getVideoByID/${id}`)
            const data = await res.json()
            setVideoData(data)

            const res2 = await fetch('http://localhost:6060/api/v1/user/video/getAllVideos')
            const data2 = await res2.json()
            setVideoList(data2)
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

    
    const likeSendData = {
        commentBy:currentUser._id,
        videoId:id
    }
    


    // const doLike = async()=>{
    //     const likeSendData = {
    //         commentBy:currentUser._id,
    //         comment:
    //     }
    //     const res3 = await fetch(`http://localhost:6060/api/v1/user/video//getVideoByID/${id}`,{
    //         method:"POST",
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:
    //     }) 
    // }

    
   
  return (
    <div className='text-white w-full h-full'>
        <div className='flex lg:flex-row flex-col gap-7'>
            {/* Left Side */}
            {
                videoData && (
                    <div className='lg:basis-[70%] '>
                <img
                className='size-full rounded-lg max-h-[450px] object-contain bg-cardBg'
                src={videoData.video.thumbnailUrl} alt="" />
                <h2 className='my-3 font-semibold'>{videoData.video.title}</h2>
                {/* VideoInfo */}
                <div className='videoInfo flex justify-between gap-3'>
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
                        <div 
                        className='flex gap-2 bg-cardBg px-3  items-center rounded-[50px]'>
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
                <DesciptionBox desc = {videoData.video.description}/>
                <Comment likeSendData={likeSendData}/>
            </div>
                )
            }
            
            {/* Right Side */}  
            {
                videoList && (

                    <div className='lg:basis:[25%] lg:max-w-[70vh] overflow-y-auto hideScrollbar '>
                    {/* card */}
                    {
                        videoList.video.map((video)=>(
                            <div>
                        <div className='flex gap-3 mb-3'>
                            <img
                            className='max-w-[280px] rounded-lg'
                            src={video.thumbnailUrl} alt="" />
                            <div>
                                <h1 className='line-clamp-2 font-semibold'>{video.title}</h1>
                                <p className='text-[13px] text-[#ffffff80] mt-2'>Karan Mharse</p>
                                <div className='text-[13px] flex gap-2 text-[#ffffff80]'>
                                    <p>134k views .</p>
                                    <p>19 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))
                    }                    
                    
                    </div>
                )
            }

        </div>
        
    </div>
  )
}

export default WatchVideo