import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'
function Navigation() {
  return (
    <nav>
      <ul className='menu'>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/blog">Blog</Link></li>
           <li><Link to="/users">utilisateurs</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation