import React, { useState } from 'react'

function DesciptionBox({desc}) {
    const [expand,setExpand] = useState(false)

  return (
    <div
    className='cursor-pointer p-3 my-4  bg-cardBg rounded-lg'
    onClick={()=>setExpand(!expand)}
    >
        <h1 className='font-semibold mb-2'>Description</h1>
        <p className={` ${!expand && 'line-clamp-3'} text-[13px]`}>{desc}</p>
    </div>
  )
}

export default DesciptionBox