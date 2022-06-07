import React from 'react'
import './navBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="navMenu">
        <ul className="navList">
          <li className="navItem">
            TRIPS
          </li>
          <li className="navItem">
            RECENTLY VIEWED
          </li>
          <li className="navItem">
            BOOKINGS
          </li>
        </ul>
        <div className="imgBox">
          <img src="./images/image.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default NavBar