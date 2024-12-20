import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import Search from '../pages/Search'
import AssemblySeats from '../pages/AssemblySeats'

function AppRouting() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Search' element={<Search />} />
            <Route path='/Search/:search' element={<AssemblySeats />} />
        </Route>
    </Routes>
  )
}

export default AppRouting