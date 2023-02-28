import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const SearchedProducts = () => {
    const {productTitle} = useParams()
    useEffect(() => {
        axios(`https://api.escuelajs.co/api/v1/products/?title=${productTitle}`)
            .then(response => console.log(response.data))
    },[])
    return (
        <div>

        </div>
    )
}

export default SearchedProducts