import React from 'react'
import { useSelector } from 'react-redux'

const VideoInfoDisplay = () => {

    const videoInfo=useSelector(store=>store.nowPlaying.videoInfo);
    if(!videoInfo) return null;
    // console.log(videoInfo);
    const {channelId,channelTitle,title}=videoInfo?.items[0]?.snippet;
    const {viewCount,likeCount}=videoInfo?.items[0]?.statistics;
    let display_like_count=likeCount.slice(0,3)



  return (
    <div className='pl-1'>
        <div className='pt-3'>
            <h1 className='font-bold text-xl'>{title}</h1>
        </div>
        <div className='pt-3 pl-2 flex justify-between'>
            <div className='flex'>
                <p className='font-semibold mr-5'>{channelTitle}</p>
                <button className='text-white bg-black px-3 py-2 rounded-full'> Subscribe </button>
            </div>
            <div className='flex'>
                <button className='text-xl px-2 bg-gray-100 py-1 border border-gray rounded-l-full'>👍{display_like_count}k</button>
                <button className='text-xl mr-2 px-2 bg-gray-100 py-1 border border-gray rounded-r-full'>👎</button>
                <button className='text-xl mr-2 px-5 bg-gray-100 py-1 border border-gray rounded-full'>Share 📤</button>
                <button className='text-xl mr-2 px-5 bg-gray-100 py-1 border border-gray rounded-full'>⬇️ </button>
                <button className='text-xl px-5 bg-gray-100 py-1 border border-gray rounded-full'>...</button>
            </div>
        </div>
    </div>
  )
}

export default VideoInfoDisplay