import "./index.css"
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Nursery from "../Nurserys/index.js"


import React from 'react'

const nurseryImages=[
    {
        id:1,
        path:"https://res.cloudinary.com/duwmzyo4e/image/upload/v1729408396/Ellipse_63_oir8gd.png",
        alt:"img1"
    },
    {
        id:2,
        path:"https://res.cloudinary.com/duwmzyo4e/image/upload/v1729408405/Ellipse_62_cjuy6q.png",
        alt:"img2"
    },
    {
        id:3,
        path:"https://res.cloudinary.com/duwmzyo4e/image/upload/v1729408416/Ellipse_71_pvdphr.png",
        alt:"img3"
    },
    {
        id:4,
        path:"https://res.cloudinary.com/duwmzyo4e/image/upload/v1729408424/Ellipse_70_km5xob.png",
        alt:"img4"
    },
    {
        id:5,
        path:"https://res.cloudinary.com/duwmzyo4e/image/upload/v1729408434/Ellipse_69_rwdlic.png",
        alt:"img5"
    },
    {
        id:6,
        path:"https://res.cloudinary.com/duwmzyo4e/image/upload/v1729408443/Ellipse_68_nb6snr.png",
        alt:"img6"
    }
]

const Pagination = () => {
    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
  return (
    <div className="paginationContainer">
      <Slider {...settings}>
        {nurseryImages.map(img => (
          <Nursery item={img}/>
        ))}
      </Slider>
    </div>
  )
}

export default Pagination
