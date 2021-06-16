import React from 'react'
import logo from '../../logo.gif'
import './navbar.scss'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Islamic Books' />
      <ul className='nav-links'>
        <li>
          <a href='/' className='nav-link'>
            Home
          </a>
        </li>
        <li>
          <a href='/' className='nav-link'>
            About
          </a>
        </li>
        <li>
          <a href='/' className='nav-link active'>
            Books
          </a>
        </li>
      </ul>
    </nav>
  )
}
