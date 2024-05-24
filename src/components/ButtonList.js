import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const btnlist=["All","Music","Sports","News","Fottball","Cricket","Pop Music","Games","Politics","Comedy","Horror","Web series"]
  return (
    <div className='flex justify-between mt-5 ml-5 mr-5'>
      {btnlist.map((btn,index)=><Button key={index} name={btn}/>)}


    </div>
  )
}

export default ButtonList