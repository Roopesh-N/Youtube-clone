import React from 'react'

const Button = ({name}) => {
  return (
    <button className='bg-gray-100 px-3 py-1 rounded-2xl hover:bg-gray-200 text-black' >{name}</button>
  )
}

export default Button