import React, { useEffect, useState } from 'react'
import { HOMEPAGE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import {Link} from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] =useState([]);

  useEffect(()=>{
    getVideo();

  },[]);
  const getVideo=async()=>{
    const data=await fetch(HOMEPAGE_VIDEOS_API);
    const json= await data.json();
    // update videos state variable to store Home page viewing videos
    setvideos(json.items) 
  }
  
  return (

    <div className='flex flex-wrap'>
      {videos.map((video,index)=>
          <Link to={"/watch?v="+video.id} key={index}><VideoCard  info={video}/></Link>
      )}
    </div>
  )
}

export default VideoContainer