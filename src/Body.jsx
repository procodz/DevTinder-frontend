import React from 'react'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <NavBar />
        <Outlet/>
    </div>
  )
}

export default Body