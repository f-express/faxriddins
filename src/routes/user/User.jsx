import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import './User.scss'
const User = () => {
    const userData = useSelector(data => data)
    const {avatar, email, id , name} = userData.create
    return (
        <>
        <div className="container my-3">
            <Search />

            <div className='d-flex shadow user-data'>
                <div className='user-avatar'>
                    <img src={avatar} className="shadow"/>
                </div>
                <div className='user-info'>
                    <p className='id'>id: {id}</p>
                    <h2><span>Name: </span>{name}</h2>
                    <p className='email'>Email: <strong>{email}</strong></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default User