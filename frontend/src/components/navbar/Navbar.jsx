import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css' // Changed to lowercase to match your CSS file name

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      {/* Use text logo instead of missing image */}
      <div className='logo'>
        Grand Minato
      </div>
      
      <ul className='navbar-bar'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li className={menu==="home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
        </Link>
        <Link to="/menu" style={{ textDecoration: 'none', color: 'inherit' }}>
          <li className={menu==="menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
        </Link>
        <li className={menu==="mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>Mobile app</li>
        <li className={menu==="contact" ? "active" : ""} onClick={() => setMenu("contact")}>Contact</li>
      </ul>
      
      <div className='navbar-right'>
        {/* Use emoji icons instead of missing images */}
        <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>🔍</span>
        <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className='navbar-cart'>
            <span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>🛒</span>
            <div className='dot'></div>
          </div>
        </Link>
        <div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar