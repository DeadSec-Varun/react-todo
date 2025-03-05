import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-around items-center p-4 bg-purple-800 text-white sticky top-0 z-10 shadow-md'>
        <div>
            <span className='text-2xl font-bold'>iTask</span>
        </div>
        <div className='space-x-10 font-medium'>
            <NavLink to='/home' className={({isActive}) =>` cursor-pointer ${ isActive && 'text-yellow-300'}` }>Home</NavLink>
            <NavLink to='/tasks' className={({isActive}) =>` cursor-pointer ${ isActive && 'text-yellow-300'}` }>Your Tasks</NavLink>
        </div>
    </header>
  )
}

export default Header