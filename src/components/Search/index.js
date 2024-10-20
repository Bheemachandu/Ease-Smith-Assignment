import "./index.css"

import React from 'react'

const Search = () => {
  return (
    <div className="searchContainer">
      <div className="searchInnerContainer">
        <img className="SerachIcons" alt="search-icon" src="https://res.cloudinary.com/duwmzyo4e/image/upload/v1729403191/image_1_ylsbah.png"/>
        <input className="searchInput" placeholder="Search Plant" />
        <img className="SerachIcons" alt="icon" src="https://res.cloudinary.com/duwmzyo4e/image/upload/v1729403203/image_91_gwmcf0.png" />
      </div>
    </div>
  )
}

export default Search
