import React from 'react'
import '../Search/Search.scss'
import logo from '../../images/logo512.png'
import searchIcon from '../../images/search.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Search = () => {
    const navigate = useNavigate()
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState([])
    const [searchedInputValue,setSearchedInputValue] = useState([])
    const searchProuducts = (e) => {
        setSearchValue(e.target.value)
        setSearchedInputValue(e.target.value)
        axios(`https://api.escuelajs.co/api/v1/products/?title=${e.target.value}&offset=0&limit=3`)
            .then(response => setSearchResult(response.data))
            .catch(err => console.error(err))
    }
    console.log(searchResult);
    const getSearchResult = (e) => {
        e.preventDefault();
        window.location.href = `/searched/${searchValue}`
    }
    return (
        <div className='container '>
            <div className="search-wrapper">
                <div className="d-flex">
                    <Link to='/'> <img src={logo} className='logo' /></Link>
                    <div class="dropdown first-drop">
                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Shop by category
                        </button>
                        <ul class="dropdown-menu bg-light">
                            <li><a class="dropdown-item active" href="/category/1">Clothes</a></li>
                                <li><a class="dropdown-item" href="/category/2">Electronics</a></li>
                                <li><a class="dropdown-item" href="/category/3">Furnitures</a></li>
                                <li><a class="dropdown-item" href="/category/4">Shoes</a></li>
                                <li><a class="dropdown-item" href="/category/5">Others</a></li>
                            </ul> 
                    </div>
                    <form className="search d-flex" onSubmit={getSearchResult}>
                        <div className='search-icon' >
                            <img src={searchIcon} height='20' />
                        </div>
                        <input type="text" className='search-input' onChange={searchProuducts} placeholder='Search for anything' id='input' />
                        <div class="dropdown bordered">
                            <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                All Categories
                            </button>
                            <ul class="dropdown-menu bg-light">
                            <li><a class="dropdown-item active" href="/category/1">Clothes</a></li>
                                <li><a class="dropdown-item" href="/category/2">Electronics</a></li>
                                <li><a class="dropdown-item" href="/category/3">Furnitures</a></li>
                                <li><a class="dropdown-item" href="/category/4">Shoes</a></li>
                                <li><a class="dropdown-item" href="/category/5">Others</a></li>
                            </ul>
                        </div>
                        <button className='btn btn-primary'>Search</button>
                        <p className='advanced'>Advanced</p>
                    </form>
                </div>
            </div>
            <div>
                {searchResult.length > 0  && searchValue.length > 0 ?
                    <div  className=' text-light search-value'>
                        {
                            searchResult.map(element =>
                                <a className='element-title'  href={`/product/${element.id}`}>{element.title}</a>
                            )
                        }
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default Search 