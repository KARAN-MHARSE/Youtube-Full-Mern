import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { IoDownloadOutline } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { BiMoneyWithdraw } from 'react-icons/bi';
import { useParams } from 'react-router-dom';



function WatchVideo() {
    const {id} = useParams()
    const [videoData,setVideoData] = useState(null)
    
    useEffect(()=>{
        const start = async()=>{
            const res = await fetch(`http://localhost:6060/api/v1/user/video//getVideoByID/${id}`)
            const data = await res.json()
            setVideoData(data)
        }
        start()
    },[id])

    
   
  return (
    <div className='text-white w-full'>
        <div className='flex lg:flex-row flex-col gap-7'>
            {/* Left Side */}
            {
                videoData && (
                    <div className='lg:basis-[70%]'>
                <video
                className='size-full rounded-lg max-h-[450px] object-contain bg-cardBg'
                src={videoData.video.videoUrl} alt="" />
                <h2 className='my-3 font-semibold'>{videoData.video.title}</h2>
                {/* VideoInfo */}
                <div className='videoInfo flex justify-between '>
                    <div className='flex items-center gap-3'>
                        <img 
                        className='size-[37px] rounded-full'
                        src="https://tse4.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&P=0&h=180" alt="" />
                        <div>
                            <h1 className='text-[15px] font-semibold'>BHARATI TV</h1>
                            <p className='text-[12px] text-[#ffffff80]'>2.85M Subscribers</p>
                        </div>
                        <button
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
                        <div className='flex gap-2 bg-cardBg px-3  items-center hidden sm:flex rounded-[50px]'>
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
                    className='max-w-[280px] rounded-lg object-contain'
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