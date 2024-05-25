import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_SUGGESTIONS_API, hamburger, userlogo, youtubeLogo } from '../utils/constants'
import { useDispatch, useSelector } from "react-redux";
import { togglesidebar } from '../utils/sidebarSlice';
import { addSuggestions, deleteSuggestion } from '../utils/useSuggestionsSlice';
import SearchSuggestions from './SearchSuggestions';
import { useNavigate } from 'react-router-dom';
import { updateSearchResults } from '../utils/searchResultsSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [searchText,setsearchText]=useState("");
  const [suggestions,setsuggestions]=useState([]);
  const [showsuggestions,setshowsuggestions]=useState(false);
  const [showresults,setshowresults]=useState(false); 

  const cachedSuggestions=useSelector(store=>store.SuggestionsSlice)

  useEffect(()=>{
    // console.log(searchText);
    // make an api call after every key press
    // but if the difference between 2 api calls is <200ms
    // decline the api call
    const timer=setTimeout(()=>getSearchSuggestions(),500);
    return ()=>{
      clearTimeout(timer);
    }
  },[searchText]);

/**
 * De Bouncing- programming technique that allows time consuming operations not to trigger too frequently to improve performance
 * 
 * key- pressed("i")
 *    -re-renders component
 *    --useeffect()
 *    -start Timer()=>make api call after 200 ms
 * 
 * key press("p" before 200 ms completes)
 *    - destroy the component(useeffect return method clears timeout);
 *    - re-renders component
 *    -useeffect()
 *    -start timer()=>make api call after 200 ms was set again
 * 
 * 
 * */ 
const LRUcache=()=>{
  const firstkey=Object.keys(cachedSuggestions)[0]
  dispatch(deleteSuggestion(firstkey));
  return ;

}

  const getSearchSuggestions=async ()=>{
    
    // write if search text in cached suggestions logic....
    if(cachedSuggestions[searchText]){
      setsuggestions(cachedSuggestions[searchText])
      
      // LRU CACHE
      var result=cachedSuggestions[searchText];
      // console.log("delete performed")
      dispatch(deleteSuggestion(searchText))
      // console.log("adding again to end")
      dispatch(addSuggestions({
        [searchText]:result,
      }))
    }

    // if search text suggestions not in cache, call api and save them in cache
    else{
      // console.log("api call for :"+searchText)
      const suggestionsdata=await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API+searchText);
      const jsondata= await suggestionsdata.json();
      setsuggestions(jsondata[1]);
      dispatch(addSuggestions({
        [searchText]:jsondata[1]
      } ))
    }
    // if cache size exceeded remove the least recently used
    var size=Object.keys(cachedSuggestions).length;
    if (size>20){
      LRUcache();
    }
  
  }

  const getSearchResults=()=>{
    if (suggestions.length===0){  
      setshowresults(false);
    }
    else{
      setshowresults(true);
      dispatch(updateSearchResults(cachedSuggestions[searchText]));
      navigate("/results?search_query="+searchText)
    }

  }

  const handlesidebar=()=>{
    dispatch(togglesidebar());
  }
  return (
    <div className='sticky top-0 bg-white grid grid-cols-12 shadow-lg z-50'>
      <div className='flex hover:cursor-pointer col-span-1'>
        <img alt="menu_hamburger" className='size-16' src={hamburger} onClick={handlesidebar}/>
        <img alt="utubelogo" className="size-18" src={youtubeLogo}/>
      </div>
      <div className="pt-2 col-span-10 px-60">
        <div className="flex">
            <input type="text" placeholder="Search here in Youtube..." className="w-2/3 py-2 pl-3 border border-gray-300 rounded-l-full" 
                value={searchText} 
                onChange={(e) => setsearchText(e.target.value)} 
                onFocus={(e)=>setshowsuggestions(true)}
                onBlur={(e)=>setshowsuggestions(false)}
                />
            <button className="bg-red-600 px-3 py-2 rounded-r-full hover:opacity-90 text-white border border-red-600" onClick={getSearchResults}>🔍Search</button>
        </div>
        {(showsuggestions) &&
        <div className="relative w-2/3 mt-2">
            <div className="absolute bg-white w-full border border-gray-300 rounded-lg shadow-lg">
                <ul>
                  {suggestions?.map((suggestion,index)=><SearchSuggestions key={index} searchSuggestion={suggestion}/>)}
                </ul>
            </div>
        </div>}
    </div>
      <div className='hover:cursor-pointer col-span-1'>
        <img alt="userLogo" className="w-16" src={userlogo}/>
      </div>

    </div>
  )
}

export default Header