import React from 'react'
import { userlogo } from '../utils/constants';

const SearchedVideoCard = ({videoInfo}) => {
    const {snippet}=videoInfo
    const {channelTitle,title,thumbnails,description}=snippet;
  return (
    <div className='p-5 flex hover:bg-gray-100'>
        <div className='w-[500px]'>
            <img src={thumbnails?.high?.url} alt="video Thumbnail" className='w-full h-[300px] rounded-lg'/>
        </div>
        <div className='pl-5'>
            <h1 className='font-sans text-xl'>{title}</h1>

            <div className='flex mt-2 '>
                <img src={userlogo} alt="channel logo" className="w-6 opacity-100"/>
                <h1 className='pl-2 font-sans  text-sm'>{channelTitle}</h1>
            </div>

            <div>
                <p className='text-sm font-sans'>{description}</p>
            </div>

        </div>
    </div>
  )
}

export default SearchedVideoCard