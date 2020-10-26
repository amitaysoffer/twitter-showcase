import React from 'react'
import { NavLink } from 'react-router-dom'
var FontAwesome = require('react-fontawesome')

function Navbar() {
  return (
    <nav className="" id="navbar-container">
      <NavLink exact to='/'>
        <h1 className="logo">
          <FontAwesome className="fab fa-twitter" name="twitter" size="2x" />
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