import React from 'react'
import banner from '../../images/banner.png'
import bannerSecond from '../../images/bannerSec.png'
import '../Discounts/Discount.scss'
import { Link } from 'react-router-dom'
const Discount = () => {
  return (
    <div className='container banners-wrapper'>
      <hr />
        <ul className='navigate-bar mx-3'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link>&hearts; Saved</Link>
          </li>
          <li>
            <Link>Motors</Link>
          </li>
          <li>
            <Link>Electronics</Link>
          </li>
          <li>
            <Link>Collectibles</Link>
          </li>
          <li>
            <Link>Home & Garden</Link>
          </li>
          <li>
            <Link>Fashion</Link>
          </li>
          <li>
            <Link>Toys</Link>
          </li>
          <li>
            <Link>Sporting Goods</Link>
          </li>
          <li>
            <Link>Business & Industrial</Link>
          </li>
          <li>
            <Link>Jewelry & Watches</Link>
          </li>
          <li>
            <Link>Refurbished</Link>
          </li>
        </ul>
        <Link to='/all-products'>
        <img src={banner} />
        </Link>
        <img src={bannerSecond} className='banner-second' />
    </div>
  )
}

export default Discount