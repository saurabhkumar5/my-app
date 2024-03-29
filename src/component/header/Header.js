
import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <img
      className="logo"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <div className="nav-items">
        <ul>
        <li>Home</li>
        <Link to='/about'>
          <li>About</li>
        </Link>
        
        
          {/* <a href='/about'><li>About</li></a> */}
          
          <Link to='/contact'>
              <li>Contact</li>
          </Link>
          
          <Link to='/cart'>
             <li>Cart</li>
          </Link>
        </ul>

      </div>
    </div>
  )
}

export default Header