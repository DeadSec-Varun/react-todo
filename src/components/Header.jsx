import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-around items-center p-4 bg-purple-800 text-white sticky top-0 z-10 shadow-md'>
        <div>
            <span className='text-2xl font-bold'>iTask</span>
        </div>
        <div className='space-x-10 font-medium'>
            <span className=' cursor-pointer'>Home</span>
            <span className=' cursor-pointer'>Your Tasks</span>
        </div>
    </header>
  )
}

export default Header