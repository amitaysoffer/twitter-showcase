import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiTwitter } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className="" id="navbar-container">
      <NavLink exact to='/'>
        <h1 className="logo">
          <FiTwitter size="2em"/>
        </h1>
      </NavLink>
      <ul className="nav-links">
        <NavLink exact to='/' activeClassName="current">
          <li>Home</li>
        </NavLink>
        <NavLink to='/search' activeClassName="current">
          <li>Search</li>
        </NavLink>
        <NavLink to='/random' activeClassName="current">
          <li>Random</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navbar