import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-pink-200 p-2'>
        <ul className='flex space-x-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
