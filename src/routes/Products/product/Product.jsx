import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../Products/Products.scss'
import banner from '../../../images/productsBanner.png'
import loader from '../../../images/loadaer.gif'
const Product = () => {
    const [categoryData, setCategorydata] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios("https://api.escuelajs.co/api/v1/categories")
            .then(response => {
                setLoading(false)
                setCategorydata(response.data)
            })
            .catch(err => {
                setLoading(false)
                console.error(err)
            })
    }, [])
    console.log(categoryData);
    return (
        <>
            <div className="product-wrapper">
                <div className="d-flex gap-3">
                    <h3>Score these trending kicks</h3>
                    <Link to='/all-products' className='text-decoration-none text-dark'>
                        <p>See all <span className='  px-1 fs-5'> &#10132;</span></p>
                    </Link>
                </div>
                <div className='d-flex flex-wrap gap-5 circle-products my-3'>
                    {loading === false ?
                        categoryData.map(data =>
                            <Link to={`/category/${data.id}`}  className='text-decoration-none text-dark' key={data.id}>
                                <div>
                                    <img src={data.image} height='160' />
                                </div>
                                <div>
                                <p className='fw-bolder product-title my-3 text-center'>{data.name} </p>
                                </div>
                            </Link>
                        )
                        :
                        <img src={loader} className='loader' />
                    }
                </div>
            </div>
            <div className="product-wrapper">
                <div className="d-flex gap-3">
                    <h3>Extra 20% off for Presidents' Day</h3>
                    <Link to='/category' className='text-decoration-none text-dark'>
                        <p>See all <span className=' px-1 fs-5'> &#10132;</span></p>
                    </Link>
                </div>
                <div className='d-flex flex-wrap gap-5 circle-products my-3'>
                    {loading === false ?
                        categoryData.map(data =>
                            <Link to={`/category/${data.id}`} className='text-decoration-none text-dark' key={data.id}>
                                <div>
                                    <img src={data.image} height='160' />
                                </div>
                                <div>
                                    <p className='fw-bolder product-title my-3'>{data.name} </p>
                                </div>
                            </Link>
                        )
                        :
                        <img src={loader} className='loader' />
                    }
                </div>
            </div>
            <Link to='/category/2'>
                <img src={banner}  className='banner' />
            </Link>
            <div className="product-wrapper">
                <div className="d-flex gap-3">
                    <h3>Today's Deals – All With Free Shipping</h3>
                    <Link to='/all-products' className='text-decoration-none text-dark'>
                        <p>See all <span className=' px-1 fs-5'> &#10132;</span></p>
                    </Link>
                </div>
                <div className='d-flex flex-wrap gap-5 circle-products my-3'>
                    {loading === false ?
                        categoryData.map(data =>
                            <Link to={`/category/${data.id}`}  className='text-decoration-none text-dark ' key={data.id}>
                                <div>
                                    <img src={data.image} height='160' />
                                </div>
                                <div>
                                    <p className='fw-bolder product-title my-3'>{data.name} </p>
                                </div>
                            </Link>
                        )
                        :
                        <img src={loader} className='loader' />
                    }
                </div>
            </div>
        </>
    )
}

export default Product