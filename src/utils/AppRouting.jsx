import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../components/Home'

function AppRouting() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home />} />
        </Route>
    </Routes>
  )
}

export default AppRouting