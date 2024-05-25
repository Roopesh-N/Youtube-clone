import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom';
import SearchedVideoCard from './SearchedVideoCard';

const SearchResults = () => {
    const {searchResults}=useSelector(store=>store.searchResultsSlice);
    const [searchParams]=useSearchParams();
    const [videos,setvideo]=useState(null);


    
    useEffect(()=>{
        // console.log(searchParams.get("search_query"))
        getsearchresults();
    },[searchResults])

    const getsearchresults=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_RESULTS_API+searchParams.get("search_query"))
        const json=await data.json()
        setvideo(json.items);
        // console.log(json.items);
    }

    if(videos===null)return null;
  return (
    <div className='mt-5 ml-5 w-full mr-2'>
      {videos.map((video)=><Link to={"/watch?v="+video.id.videoId} key={video.id.videoId}><SearchedVideoCard videoInfo={video}/></Link>)}

    </div>
  )
}

export default SearchResults