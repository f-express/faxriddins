import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../Products/Products.scss'
import {Link} from 'react-router-dom'
import Product from './product/Product'
import loader from '../../images/loadaer.gif'
const Products = () => {
    const [usersdata, setUsersdata] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios("https://api.escuelajs.co/api/v1/products?offset=0&limit=5")
            .then(response =>{
                setLoading(false)
                setUsersdata(response.data)
            })
            .catch(err => {
                setLoading(false)
                console.error(err)
            })
    }, [])
    console.log(usersdata);
    return (
        <div className='container'>
            <div className="products-wrapper my-5">
                <div>
                    <h3 className='fw-bold'>
                    Up to 60% off <br /> home must- <br />
                    haves
                    </h3>
                        <Link to='/all-products' key={"123"}>
                    <button className='shop-button'>Shop now <span className='fw-bold px-1 fs-5'> &#10132;</span></button>
                        </Link>
                </div>
                {loading === false ?  
                usersdata.map(data =>
                    <Link to={`/product/${data.id}`} className='text-decoration-none text-dark' key={data.id}>
                        <div className='shadow'>
                            <img src={data.images[0]} height='140' />
                        </div>
                        <div>
                            <p className='fw-bolder my-2'>{data.price}$</p>
                        </div>
                    </Link>
                )
                :
                <img src={loader} className="loader" />
            }
            <Product />
            <div className='container'>
            <div className="products-wrapper my-5">
                {loading === false ?
                usersdata.map(data =>
                    <Link to={`/product/${data.id}`} className='text-decoration-none text-dark'>
                        <div className='shadow'>
                            <img src={data.images[0]} height='170' />
                        </div>
                        <div>
                            <p className='fw-bolder my-2 fs-5'>{data.price}$</p>
                        </div>
                    </Link>
                )
                :
                <img src={loader} className='loader' />
            }
            </div>
        </div>
            </div>
        </div>
    )
}

export default Products