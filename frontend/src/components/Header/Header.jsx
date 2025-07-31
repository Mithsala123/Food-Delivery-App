import React from 'react'
import './Header.css'
import newImg from '../../assets/new.jpg'

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${newImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Remove this div if you only want the image */}
      <div className="heager-contend">
        <h2>Are You Hungry?</h2>
        <h1>Don't Wait</h1>
        <h2>Let's start to order food now</h2>
        <p>Enjoy your favorite meals delivered fresh and fast! From local flavors to international dishes, satisfy your hunger with just a few clicks.</p>
        <button>View Menu</button>
      </div> 
    </div>
  )
}

export default Header

