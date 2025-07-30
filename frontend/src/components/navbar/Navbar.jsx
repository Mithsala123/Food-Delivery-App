import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'
import search from '../../assets/search.png'
import cart from '../../assets/cart.png'

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo' />
      
      <ul className='navbar-bar'>
        <li className={menu==="home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
        <li className={menu==="menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
        <li className={menu==="mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>Mobile app</li>
        <li className={menu==="contact" ? "active" : ""} onClick={() => setMenu("contact")}>Contact</li>
      </ul>
      <div className='navbar-right'>
        <img src={search} alt="Search" className='search' />
        <div className='navbar-cart'>
          <img src={cart} alt="Cart" className='cart' />
          <div className='dot'> </div>
        </div>
        <div>
          <button>sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar