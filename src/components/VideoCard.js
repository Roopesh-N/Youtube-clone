import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {title,thumbnails,channelTitle}=snippet;
    const thumbnail=thumbnails?.medium?.url;


    let maxLength = 75;
    let display_title = title.length >75 ? title.slice(0, maxLength - 3) + "..." : title;


  return (
    <div className='w-72 m-5 shadow-md rounded-md'>
        <img alt="Thumbnail" src={thumbnail} className='rounded-md'/>
        <h2 className='pt-2 px-2 font-semibold w-5/6'>{display_title}</h2>
        <p className='px-2 text-md w-5/6'>{channelTitle}</p>
        <p className='px-2 text-sm w-5/6'>{statistics.viewCount} views</p>
    </div>
  )
}

export default VideoCard