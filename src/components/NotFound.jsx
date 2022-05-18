import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex items-center justify-center flex-col'>
        <h1 className='text-[64px] font-bold'>
            404 Not Found
        </h1>
        <h3 className='text-[32px]'>Seems like you've entered Area 51! Here, Use this button to go back!</h3>
        <button className='bg-indigo-500 px-9 py-2 my-3 rounded-full text-white animate-bounce'><Link to="/">Home</Link></button>
    </div>
  )
}

export default NotFound