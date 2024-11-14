import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='w-full h-screen bg-green-200'>
        <Outlet />
    </div>
  )
}

export default Layout