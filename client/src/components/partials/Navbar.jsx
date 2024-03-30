import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='backdrop-blur-xl py-6 flex justify-between px-10 w-full '>
      <div className='text-white text-2xl font-bold'>Logo</div>  
      <div className='flex gap-5'>
        
        <Link to="/login" className='bg-blue-400 py-2 px-3 rounded-lg'>Login</Link>
        <Link to="/signup" className='bg-blue-400 py-2 px-3 rounded-lg'>Signup</Link>
      </div>
    </div>
  )
}

export default Navbar