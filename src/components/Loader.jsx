import React from 'react'
import logo from '../assets/logo.png'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="loader-logo" />
        </div>
      </div>
    </div>
  )
}

export default Loader
