import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const PlantCard = (props) => {
    const {plant}=props
  return (
    <div className='cardContainer'>
      <div className='imageContainer'>
        <img className='heartIcon' alt="icon" src="https://res.cloudinary.com/duwmzyo4e/image/upload/v1729427297/Vector_9_ue4tmg.png"/>
        <img className='plantImg' alt={plant.alt} src={plant.path} />
        <div className='cardHeadDiv'>
          <Link to="/Thank">
          <button className='cardBtn'>View Product</button>
          </Link>
        </div>
      </div>
      <div className='cardBottomContainer'>
        <h3 className='PlantNameHead'>Monsterra</h3>
        <p className='plantPara'>Indoor Plant, Low maintenance</p>
        <div className='ratingDiv'>
            <img className='starIcon' alt="starsIcon" src="https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__"/>
            <p>4.9</p>
        </div>
        <h2><span className='priceSpan'>₹ 359</span> ₹ 299</h2>
        <div className='btnContainer'>
            <Link to="/cart">
              <button className='AddToCart'>-  Add to cart  +</button>
            </Link>
            <button className='BuyBtn'>Buy on Rent</button>
        </div>
      </div>
    </div>
  )
}

export default PlantCard
