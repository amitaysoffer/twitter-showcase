import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="" id="navbar-container">
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/search'>
          <li>Search</li>
        </Link>
        <Link to='/random'>
          <li>Random</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar