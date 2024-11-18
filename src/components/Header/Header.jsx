import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header className="header">
    <div className="container">
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/About'}>About</Link>
            <Link to={'Contacts'}>Contacts</Link>
        </nav>
    </div>
   </header>
  )
}

export default Header