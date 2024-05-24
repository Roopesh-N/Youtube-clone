import React, { useEffect } from 'react'
import { YOUTUBE_SEARCH_RESULTS_API } from '../utils/constants'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
    const {searchResults}=useSelector(store=>store.searchResultsSlice);
    const [searchParams]=useSearchParams();


    
    useEffect(()=>{
        console.log(searchParams.get("search_query"))
        getsearchresults();
    },[searchResults])

    const getsearchresults=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_RESULTS_API+searchParams.get("search_query"))
        const json=await data.json()
        console.log(json)
    }

  return (
    <div>
        search results page
    </div>
  )
}

export default SearchResults