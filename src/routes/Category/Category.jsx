import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import appleBanner from '../../images/appleBanner.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../Category/Category.scss'
import { Link } from 'react-router-dom'
import FooterSmall from '../../components/Footer_small/FooterSmall'
const Category = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([])
  const [moreCategoies, setMoreCategories] = useState([])
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/categories/${id}/products?offset=0&limit=24`)
      .then(response => setCategory(response.data))
      .catch(err => console.error(err))
  }, [])
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/categories?offset=${id}`)
      .then(response => setMoreCategories(response.data))
      .catch(err => console.error(err))
  }, [])
  console.log(category);
  console.log(moreCategoies);
  return (
    <div className='container'>
      <Header />
      <Search />
      <div className='mx-5 my-5 px-5'>
        <h4>Featured Event</h4>
        <img src={appleBanner} className='text-center' />
      </div>
        <h3 className='mx-5 px-5 '>Shop by Category</h3>
      <div className='d-flex mx-5 px-5 flex-wrap gap-3 more-category'>
        {
          moreCategoies.map(element =>
            <a href={`/category/${element.id}`} className="text-decoration-none text-dark" >
              <div>
                <img src={element.image} height='116' />
                <p className='text-center'>{element.name}</p>
              </div>
            </a>
          )
        }
      </div>
      <div className='mx-5 px-5 categories-wrapper'>
        { category.length > 0 ? 
          category.map(el =>
            <Link to={`/product/${el.id}`} className="text-decoration-none text-dark" >
              <div >
                <img src={el.images} height='172' />
                <p>{el.title}</p>
                <p><strong>Price: {el.price}$</strong></p>
              </div>
            </Link>
            )
            :
            <h2 className='text-primary '>Not more informations</h2>
        }
      </div>
      <FooterSmall />
    </div>
  )
}

export default Category