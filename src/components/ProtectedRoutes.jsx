import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { jwtClientAuth } from '../../utilities/jwtClientAuth';

const ProtectedRoutes = () => {
    const isValidUser = jwtClientAuth(); // Check if user is logged in by checking token in local storage
  return (
    <>
    {isValidUser ? <Outlet /> : <Navigate to='/welcome' />}
    </>
  )
}

export default ProtectedRoutes