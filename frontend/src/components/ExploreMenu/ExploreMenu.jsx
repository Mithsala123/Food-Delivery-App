import React from 'react'
import './ExploreMenu.css'
import rice from '../../assets/rice.png'
import ramen from '../../assets/ramen.jpg'
import orange from '../../assets/orange.jpg'
import ramen02 from '../../assets/ramen02.jpg'
import sprite from '../../assets/sprite.jpeg'

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">Choose your favorite foods.</p>
      <div className="explore-menu-items">
        <div className="explore-menu-item">
          <img src={rice} alt="Rice" />
          <h2>Rice</h2>
        </div>
        <div className="explore-menu-item">
          <img src={ramen} alt="Ramen" />
          <h2>Ramen</h2>
        </div>
        <div className="explore-menu-item">
          <img src={orange} alt="Orange" />
          <h2>Orange</h2>
        </div>
        <div className="explore-menu-item">
          <img src={ramen02} alt="Ramen 2" />
          <h2>Ramen 2</h2>
        </div>
        <div className="explore-menu-item">
          <img src={sprite} alt="Sprite" />
          <h2>Sprite</h2>
        </div>
      </div>
    </div>
  )
}

export default ExploreMenu
