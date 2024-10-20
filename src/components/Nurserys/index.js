import React from 'react'
import "./index.css"

const Nursery = (props) => {
    const {item}=props
    return (
        <div className="paginationInnerContainer">
            <img className="nurseryImg"
                src={item.path}
                alt={item.alt}
            />
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>

        </div>
    )
}

export default Nursery
