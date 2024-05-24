import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closesidebar } from '../utils/sidebarSlice';
import { useSearchParams } from 'react-router-dom';
import useWatchVideo from '../utils/useWatchVideo';
import VideoInfoDisplay from './VideoInfoDisplay';
import VideoComments from './VideoComments';
import LiveChat from './LiveChat';

const WatchVideo = () => {

    const [searchParams]=useSearchParams();
    const video_key=searchParams.get("v");
    // useWatchVideo-->custom hook
    const {getVideoData}=useWatchVideo();

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closesidebar());
        getVideoData(video_key);
    })


  return (
    <div className='mt-9 grid grid-cols-12 '>
        <div className=' ml-28 col-span-8'>
            <div className='mr-0'>
                <iframe width="900" height="500" 
                src={"https://www.youtube.com/embed/"+video_key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className='rounded-lg'></iframe>
            </div>
            <div>
                <VideoInfoDisplay/>
                <VideoComments/>

            </div>
        </div>
        <div className='col-span-4 mx-3'>
            <LiveChat/>
        </div>
    </div>
  )
}

export default WatchVideo

