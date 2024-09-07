import React from 'react'
import './Offers.css'
import banner1 from '../assist/banner-1.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Daily Sale</h1>
            <h1>Offers For Your Health</h1>
            <p>ONLY ON ORGANIC PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={banner1} alt="Offer Image" />
        </div>      
    </div>
  )
}

export default Offers
