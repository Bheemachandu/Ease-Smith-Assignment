import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const ThankUPage = () => {
  return (
    <div className='mainContainer'>
      <h1>Thank You</h1>
      <Link to="/">
        <button className='thankButton'>Continue Shopimng</button>
      </Link>
    </div>
  )
}

export default ThankUPage
