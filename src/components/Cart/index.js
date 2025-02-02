import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='cartContainer'>
      <h4 className='cartHead1'>Your Cart</h4>
      <hr/>
      <h1 className='cartHead2'>Congratulations Order Placed!</h1>
      <img alt="img" src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg__"/>
      <p className='cartHead1'>Thank you for choosing Chaperone services.
      We will soon get in touch with you!</p>
      <Link to="/">
      <button className='cartBtn'>CONTINUE SHOPPING</button>
      </Link>
    </div>
  )
}

export default Cart
