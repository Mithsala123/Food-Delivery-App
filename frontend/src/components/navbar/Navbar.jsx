import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'
import search from '../../assets/search.png'
import cart from '../../assets/cart.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo' />
      <ul className='navbar-bar'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile app</li>
        <li>Contact</li>
      </ul>
      <div className='navbar-right'>
        <img src={search} alt="Search" className='search' />
        <div className='navbar-search-icon'></div>
        <img src={cart} alt="Cart" className='cart' />
        <div className='dot'> </div>
        <div>
          <button>sign in</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar