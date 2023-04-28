import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
  
    
    <>
    
    
    <div className='header'>
      <div className="logo">
        <Link to="/">
        StockInsights <span>Beta</span>
        </Link>
      </div>
      <div className="login-btn">
        <Link to="/login">
            Login
        </Link>
      </div>

    </div>

    </>
  )
}

export default Header
