import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FooterSmall from '../../components/Footer_small/FooterSmall'
import logo from '../../images/logo512.png'
import '../SingleProduct/SingleProduct.scss'
import  Search  from '../../components/Search/Search'
import Header from '../../components/Header/Header'
const SingleProduct = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState([])
    useEffect(() => {
        axios(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => setProductData(response.data))
            .catch(err => console.error(err))
    }, [])
    console.log(productData);
    const [moreProducts,setMoreProducts] = useState([])

    useEffect(() => {
        axios("https://api.escuelajs.co/api/v1/products?offset=50&limit=20")
            .then(response => setMoreProducts(response.data))
            .catch(error => console.error(error))
    },[])
    const { images, title, description, price } = productData
    return (
        <div className='container'>
            <Header />
            <Search />
            <div className='d-flex gap-5 single-product-wrapper'>
                <div>
                    <img src={images} />
                </div>
                <div className='p-2'>
                    <h3>{title}</h3>
                    <hr />
                    <p><strong>Description:</strong>  {description}</p>
                    <p>Price:  <strong>US ${price}</strong></p>
                    <div className="d-flex flex-column gap-3 w-50 my-5 buttons-group">
                        <button className='buy-button btn  btn-primary'>Buy it Now</button>
                        <button className='buy-button btn btn-primary'>Add to Card</button>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap gap-3'>
                    {
                        moreProducts.map(element =>
                            <a href={`/product/${element.id}`} className="text-decoration-none text-dark">
                                <div>
                                    <img src={element.images}  height="170" />
                                    <p>{element.title}</p>
                                    <p>Price: {element.price}$</p>
                                </div>
                            </a>
                        )
                    }
            </div>
            <FooterSmall />
        </div>
    )
}

export default SingleProduct