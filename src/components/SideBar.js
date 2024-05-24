import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const mainBars=["Home","Shorts","Subscriptions"]

  const showingsidebar=useSelector((store)=>store.sidebar.isMenuOpen);

  if(!showingsidebar) return null;

  return (
    <div className='w-56 shadow-lg text-md'>
      <div className='pt-3 w-full'>
      <ul className=' text-left '>
        {mainBars.map((each,index)=><Link to={"/"} key={index}><li className='py-2 px-3 hover:bg-gray-100 rounded-md'>{each}</li></Link>)}
      </ul>
      </div>

      <br></br>
      <h1 className='pl-2 text-xl font-semibold'>You ➡️</h1>

      <ul className='pt-3 pl-7'>
        <li className='py-2'>Your channel</li>
        <li className='py-2'>History</li>
        <li className='py-2'>Playlists</li>
        <li className='py-2'>Your videos</li>
        <li className='py-2'>watch Later</li>
      </ul>
      
      <br></br>
      <h1 className='pl-2 text-xl font-semibold' >Explore</h1>

      <ul className='pt-3 pl-7'>
        <li className='py-2'>Trending</li>
        <li className='py-2'>Shopping</li>
        <li className='py-2'>Music</li>
        <li className='py-2'>Gaming</li>
        <li className='py-2'>Movies</li>
        <li className='py-2'>Live</li>
        <li className='py-2'>Sports</li>
      </ul>

    </div>
  )
}

export default SideBar