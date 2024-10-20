import React from 'react'
import Filter from '../Filters/index.js'
import ListOfProducts from '../ListOfProducts/index.js'
import "./index.css"

const Products = () => {
  return (
    <div className='productsContainer'>
      <Filter/>
      <ListOfProducts/>
    </div>
  )
}

export default Products
