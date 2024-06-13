import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center'>
        <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
    </div>
  )
}

export default Loading