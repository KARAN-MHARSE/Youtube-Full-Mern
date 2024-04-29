import FilterCard from '../components/FilterCard'
import VideoCard from '../components/VideoCard'
import {contectType} from '../constant'
import {Link} from 'react-router-dom'

import './Home.css'
import { useEffect, useState } from 'react'

function Home() {
  let [videos,setVideos] = useState()
  // console.log(videos)
  useEffect(()=>{
    const getAllVideos = async()=>{
      const res = await fetch('http://localhost:6060/api/v1/user/video/getAllVideos')
       const data = await res.json()
       setVideos(data.video)
      // console.log(data.video)
    }
    getAllVideos()
  },[])


  return (
    <div className='w-full '>
      <div className='flex gap-3 overflow-x-auto hideScrollbar flex-shrink-0 mb-5'>
        {
          contectType.map((data,index)=>(
            <Link to={`/#${data}`}>
              <FilterCard data={data} key={index}/>
            </Link>
          ))
        }
      </div>
      <div className=' grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-y-6 place-items-center mr-5'>
        {
          videos?.map((v)=>(
            // console.log(v)
            <VideoCard video={v}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home