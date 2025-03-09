import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function Body() {
    return (
        <div>
            <Nav />
            <Outlet />

        </div>
    )
}

export default Body
