import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import logo from '../../images/logo512.png'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import './Basket.scss'
const Basket = () => {
    const basketObj = useSelector(data => data)
    console.log(basketObj);
    return (
        <section>
            <div className='container'>
                <Header />
                <Search />
                <h2 className='basket-title'>Shopping Cart</h2>
                <div>
                    {
                        basketObj.basket.obj.map(e =>
                            <div className='d-flex gap-5 my-5 shadow'>
                                <img src={e.images} height="300" />
                                <div>
                                    <h4 className='fs-2'>{e.title}</h4>
                                    <p className='fw-bolder'>{e.description}</p>
                                    <p className='fs-3'>Price: <strong>{e.price}$</strong></p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section >
    )
}

export default Basket