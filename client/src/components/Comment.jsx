import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

function comment({likeSendData}) {
  const {currentUser} = useSelector((state)=>state)
  const [comment,setComment] = useState('')
  const [commentList,setCommentList] = useState([])

  useEffect(()=>{
    const start = async()=>{
      const res = await fetch(`http://localhost:6060/api/v1/user/video/getVideoByID/getComment/${likeSendData.videoId}`)
      const data = await res.json()
      setCommentList(data.comments)
    }
    start()
  },[])

  const doComment = async(e)=>{
    e.preventDefault()

    const formData = {
      commentBy:currentUser._id,
      comment:comment
    }

    const res = await fetch(`http://localhost:6060/api/v1/user/video/getVideoByID/doComment/${likeSendData.videoId}`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const data = await res.json()

    if(data.success){
      setComment("")
      setCommentList(data.video.comments)
    }
    }

  // console.log(likeSendData)
  return (
    <div
    className='w-full  cursor-pointer p-3 my-4  bg-cardBg rounded-lg '
    >
        <h1 className='font-semibold mb-2'>Comments</h1>
        <div className='w-full mb-3'>
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
                    value={comment}
                    type="text" placeholder='Enter the comment' />
                </form>
                ):(
                  <p className='text-[#ffffff80]'>You are not authorized to do comment. please login first</p>
                )
              }
          </div>
        </div>
        {/* comment list */}
        {
          commentList && (
            <div className='pl-4 max-h-[200px] lg:max-h-full overflow-y-auto '>
              {
                commentList.map((comment)=>(
                  <div className='flex items-center gap-3 mb-3 '>
                  {/* user logo */}
                    <div className='bg-blue-500 flex items-center justify-center size-[35px] rounded-full'>
                      <p>R</p>
                    </div>
                    {/* username and comment */}
                    <div>
                      <p className='text-[13px] text-[#ffffff80]'>@karanmharse05</p>
                      <p className='text-[14px]'>{comment.comment}</p>
                    </div>
                  </div>
                ))
              }
          </div>
          )
        }
        
    </div>
  )
}

export default comment