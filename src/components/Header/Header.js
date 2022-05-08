import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className="hero">
      <div className="navbar">
        <div className="nav-name">Crosslinks</div>
        <div className="nav-dot">.</div>
      </div>
      <div className="hero-wrapper">
        <div className="hero-text">
        <div className="hero-text-main">Scribble Day</div>
        <div className="hero-text-secondary">2022</div>
        <div className="hero-description">16th May 2022</div>
        </div>
        <button className="button">Get your Tshirt</button>
      </div>
    </div>
  )
}

export default Header