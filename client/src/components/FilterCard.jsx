import React from 'react'

function FilterCard({data}) {
  return (
    <div className='text-white  px-3 py-1  bg-lightText rounded-lg'>
      <h3 className='whitespace-nowrap'>{data}</h3>  
    </div>
  )
}

export default FilterCard