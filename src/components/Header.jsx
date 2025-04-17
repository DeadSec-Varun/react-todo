import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [username, setUsername] = React.useState('');
  // Fetch the username when the component mounts
  React.useEffect(() => {
    fetchName();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/welcome';
  }

  async function fetchName(){
    const {data} = await axios.get('http://localhost:5000/user', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    });
    console.log("Username: "+ data);
    setUsername(data.username);
  }

  return (
    <header className='flex justify-around items-center p-4 bg-purple-800 text-white sticky top-0 z-10 shadow-md'>
        <div>
            <span className='text-2xl font-bold'>{username} iTask</span>
        </div>
        <div className='space-x-10 font-medium'>
            <NavLink to='/home' className={({isActive}) =>` cursor-pointer ${ isActive && 'text-yellow-300'}` }>Home</NavLink>
            <span onClick={logout} className ='cursor-pointer'>Logout</span>
        </div>
    </header>
  )
}

export default Header