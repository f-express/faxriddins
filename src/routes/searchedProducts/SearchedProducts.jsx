import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Search from '../../components/Search/Search'
import './SearchProducts.scss'
import loader from '../../images/loadaer.gif'
const SearchedProducts = () => {
    const { productName } = useParams()
    const [loading, setLoading] = useState([])
    console.log(productName);
    const [product, setProduct] = useState([])
    useEffect(() => {
        setLoading(true)
        axios(`https://api.escuelajs.co/api/v1/products/?title=${productName}`)
            .then(response => {
                setLoading(false)
                setProduct(response.data)
            })
            .catch(err => {
                setLoading(false)
                console.error(err)
            })
    }, [])
    console.log(product);
    return (
        <div className='my-3'>
            <Search />
            <div className='container'>
                <h2 className='found-products'>Found products</h2>
                <hr />
                {loading === false ? 
                    product.map(el =>
                        <Link to={`/product/${el.id}`} className="text-decoration-none text-dark">
                            <div className='d-flex my-5 py-5'>
                                <div className='product-image shadow'>
                                    <img src={el.images} />
                                </div>
                                <div className='product-info shadow'>
                                    <h3>{el.title}</h3>
                                    <p className='description'>{el.description}</p>
                                    <p className='price'>Price: <strong>{el.price}$</strong></p>
                                </div>
                            </div>
                        </Link>
                    )
                    :
                        <img src={loader} className="searched-products-loader" />
                }
            </div>
        </div>
    )
}

export default SearchedProducts