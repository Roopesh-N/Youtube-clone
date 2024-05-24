import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
    const dispatch=useDispatch();
    const messages=useSelector(store=>store.chat.messages)
    var userMessage=useRef(null);
    // var count=0;
    useEffect(()=>{
        const interval=setInterval(()=>{
            // count++;
            
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomMessage(),
                
            }))

        },1000);
        return ()=>clearInterval(interval);
    },[]);

    const sendMessage=()=>{
        
        dispatch(addMessage({
            name:"User",
            message:userMessage?.current.value
        }))
        userMessage.current.value=null;
    }

  return (
    <>
    <div>
        <h1 className='border border-black p-2 font-semibold rounded-t-lg'>LiveChat</h1>
    </div>
    <div className='border border-black h-[460px] bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
            {messages.map((c,index)=><ChatMessage  key={index} name={c.name} message={c.message}/>)}
    </div>
    <div className='border border-black rounded-b-lg w-full grid grid-cols-6'>
        <input className="rounded-bl-lg p-2 col-span-5 text-lg" placeholder='chat...' ref={userMessage}></input>
        <button className='bg-gray-200 col-span-1 rounded-br-lg' onClick={sendMessage}>Send</button>
    </div>
    </>
  )
}

export default LiveChat