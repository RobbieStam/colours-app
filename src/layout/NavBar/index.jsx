import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const NavBar = () => {

  let activeStyle = {
    textDecoration: "underline",
    color: "blue"
  }

  const navA = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" style={navA} >Home</NavLink></li>
          <li><NavLink to="/colours" style={navA}>Colours</NavLink></li>
          <li><NavLink to="/new" style={navA}>Add Colour</NavLink></li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar
