import React from 'react'
import { useSelector } from 'react-redux'

const VideoComments = () => {
    const comments=useSelector(store=>store.nowPlaying.comments)
    if(!comments) return null;
    // console.log(comments.items)
    const comments_list=comments.items;

  return (
    <div className='mt-10'>
        <h1 className='text-xl pl-2 mb-5'>Comments</h1>
        {comments_list.map((comment,index)=>
            <div key={index} className='rounded-md my-2 hover:bg-gray-200 pl-5'>
                <p className='py-2'>{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
            </div>)
        }
    </div>
  )
}

export default VideoComments