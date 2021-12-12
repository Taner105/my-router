import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';
import "../pages/Layout.css"

const Layout = () => {
    return (
        <div>
            <nav>
                <ul >
                    <li><NavLink id='navbar' style={({isActive}) =>({color: isActive ? "red" : "blue"})} to="/home">Home</NavLink></li>
                    <li><NavLink  id='navbar' style={({isActive}) =>({color: isActive ? "red" : "blue"})} to="/about">About</NavLink></li>
                    <li><NavLink  id='navbar' style={({isActive}) =>({color: isActive ? "red" : "blue"})} to="/blog">Blog</NavLink></li>
                </ul>
            </nav>
            <Outlet />
            
        </div>
    )
}

export default Layout;
