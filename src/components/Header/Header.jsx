import React from 'react'
import { Link } from 'react-router-dom'
import arrowDown from '../../images/down-arrow.png'
import '../Header/Header.scss'
import bellIcon from '../../images/bell.png'
import basketIcon from '../../images/basket.png'
import { useSelector } from 'react-redux'
import user from '../../images/user.png'
const Header = () => {
    const { name, image } = useSelector(data => data)
    console.log(name, image);
    return (
        <div className='container py-2'>
            <div className="wrapper">
                <ul>
                    <li>
                        Hi! <Link to="/sign-in">Sign in</Link>
                    </li>
                    <li>
                        or <Link to="/create">register</Link>
                    </li>
                    <li>
                        Daily Deals
                    </li>
                    <li>
                        Brand Outlet
                    </li>
                    <li>
                        Help & Contact
                    </li>
                </ul>
                <div className="d-flex gap-3 marginleft">
                    <p>Sell</p>
                    <div className='d-flex gap-1 '>
                        <p>Watchlist</p><img src={arrowDown} height="20" className='arrow-down' />
                    </div>
                    <div className='d-flex gap-1 '>
                        <p>My eBay</p><img src={arrowDown} height="20" className='arrow-down' />
                    </div>
                    <div className="d-flex gap-4 px-2">
                        <Link to='/messages'><img src={bellIcon} height='20' /></Link>
                        <Link to='/basket'> <img src={basketIcon} height='20' /></Link>
                    </div>
                </div>
                <div className="d-flex flex-column avatar">
                    <img src={image ? image : user } height="50" width='50' className='circle-avatar' />
                    <p className='text-center'>{name ? name : "User"  }</p>
                </div>
            </div>

        </div>
    )
}

export default Header