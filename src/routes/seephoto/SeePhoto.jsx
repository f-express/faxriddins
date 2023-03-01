import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SeePhoto.scss'
const SeePhoto = () => {
    const { id } = useParams()
    const [photo, setPhoto] = useState([])
    useEffect(() => {
        axios(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => setPhoto(response.data))
            .catch(err => console.error(err))
    }, [])

    const goBack = () => {
        window.location.href = `/product/${id}`
    }

    console.log(photo)
    return (
        <div>
            <button className='btn btn-primary back-button' onClick={goBack}>Go back</button>
            <div className='d-flex justify-content-center my-5'>
            <img src={photo.images} className='see-photo' />
        </div>
        </div>
    )
}

export default SeePhoto