import React, { useState } from 'react'
import {useSelector} from 'react-redux'

function comment({likeSendData}) {
  const {currentUser} = useSelector((state)=>state)
  const [comment,setComment] = useState('')



  const doComment = async(e)=>{
    e.preventDefault()

    const formData =new FormData()

    formData.append('commentBy',currentUser._id)
    formData.append('comment',comment)

    const res = await fetch(`http://localhost:6060/api/v1/user/video/getVideoByID/doComment/${likeSendData.videoId}`,{
      method:"POST",
      headers: {
        // Set content type to multipart/form-data
        'Content-Type': 'multipart/form-data',
      },
      body:formData
    })
    const data = await res.json()
    // console.log(data)
    }

  // console.log(likeSendData)
  return (
    <div
    className='w-full  cursor-pointer p-3 my-4  bg-cardBg rounded-lg '
    >
        <h1 className='font-semibold mb-2'>Comments</h1>
        <div className='w-full'>
          <div className='flex items-center gap-3  '>
              {/* profile logo */}
              <div className='bg-blue-500 size-[35px] rounded-full flex items-center justify-center font-bold'>
                  <p>{currentUser? currentUser.userName.charAt(0).toUpperCase() : 'X'}</p>
              </div>
              {
                currentUser ? (
                  <form onSubmit={doComment}>
                    <input
                    onChange={(e)=>setComment(e.target.value)}
                    className='bg-transparent  outline-none w-full'
                    name='comment' 
                    type="text" placeholder='Enter the comment' />
                </form>
                ):(
                  <p className='text-[#ffffff80]'>You are not authorized to do comment. please login first</p>
                )
              }
          </div>
        </div>
        
    </div>
  )
}

export default comment