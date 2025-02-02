import React from 'react'

import "./index.css"


const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="logoContainer" >
        <img alt="logo" src="https://res.cloudinary.com/duwmzyo4e/image/upload/v1729313546/image_55_eyd8ci.png"/>
        <h1>Chaperone</h1>
      </div>
      <div className='menuContainer'>
        <button>Home</button>
        <button>Plants & Pots</button>
        <select>
            <option selected value="Tools">Tools</option>
        </select>
        <select>
            <option selected value="Our Services">Our Services</option>
        </select>
        <button>Blog</button>
        <button>Our Story</button>
        <button>FAQs</button>
      </div>
      <div className='ProfileCartConatiner'>
        <div className='profileContainer'>
          <svg className='profileIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>
          <p>My Profile</p>
        </div>
        <div>
          <svg className='profileIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
          <p>Cart</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
