import React from 'react'
import HomeNavBar from './HomeNavBar'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div className=' px-20 py-5'>
            <HomeNavBar />
            <Outlet />
        </div>
    )
}

export default Home
