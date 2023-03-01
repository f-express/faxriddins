import React from 'react'
import { Link } from 'react-router-dom'
import arrowDown from '../../images/down-arrow.png'
import '../Header/Header.scss'
import bellIcon from '../../images/bell.png'
import basketIcon from '../../images/basket.png'
import { useSelector } from 'react-redux'
import user from '../../images/user.png'
const Header = () => {
    const userData = useSelector(data => data)
    console.log(userData);
    return (
        <>
            <div className='container py-2'>
                <div className="wrapper">
                    <ul>
                        <div className='my-3'>
                        <Link to='/user' className='avatar'><img src={userData.create.avatar ? userData.create.avatar : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"} height='30' width='50' /></Link>
                        <p className='text-center'>{userData.create.name}</p>
                        </div>
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
                </div>
            </div>

        </>
    )
}

export default Header