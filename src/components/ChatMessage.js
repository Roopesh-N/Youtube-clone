import React from 'react'
import { userlogo } from '../utils/constants'

const ChatMessage = ({name, message}) => {

  return (
    <div className='flex items-center shadow-sm p-2'>
        <img alt="userLogo" className="w-6 opacity-60" src={userlogo}/>
        <span className='px-2 font-semibold'>{name}</span>
        <span className=''>{message}</span>
    </div>
  )
}

export default ChatMessage