import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Discount from '../Discounts/Discount'
import Products from '../../routes/Products/Products'
import FooterSmall from '../Footer_small/FooterSmall'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Search />
            <Discount />
            <Products />
            <Footer />
        </div>
    )
}

export default Home