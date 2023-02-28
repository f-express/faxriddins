import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo512.png'
const AllProducts = () => {
    const [usersdata, setUsersdata] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios("https://api.escuelajs.co/api/v1/products?offset=0&limit=150")
            .then(response => {
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
            <div className="d-flex justify-content-between align-items-center">
                <Link to='/'>
                    <img src={logo} className=' my-3 ' />
                </Link>
                <Link to='/sign-in' >Login</Link>
            </div>
            <div className='d-flex flex-wrap gap-2  my-3'>
                {loading == false ? 
                    usersdata.map(data =>
                        <Link to={`/product/${data.id}`} className='text-decoration-none text-dark'>
                            <div>
                                <img src={data.images[0]} height='100' />
                            </div>
                            <div>
                                <p className='fw-bolder product-title my-3'>{data.price}$ </p>
                            </div>
                        </Link>
                    )
                    :
                    <p>Loading</p>
                }
            </div>
        </div>
    )
}

export default AllProducts