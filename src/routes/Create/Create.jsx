import React from 'react'
import '../Create/Create.scss'
import logo from '../../images/logo512.png'
import { Link } from 'react-router-dom'
import FooterSmall from '../../components/Footer_small/FooterSmall'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Create = () => {
  const navigate = useNavigate()
  const dipatch = useDispatch()
  const [userData,setUserData] = useState({
    name:"",
    lastNmae:"",
    password:"",
    email:"",
    avatar:""
  });
  const createUser = (e) => {
    e.preventDefault();
    axios.post("https://api.escuelajs.co/api/v1/users/", userData)
    .then(response => {
      if(response.data.name,response.data.avatar){
        dipatch({name: response.data.name,image: response.data.avatar,  type:"CREATED_NAME",type:"CREATED_image"})
        navigate("/")
      }
    })
    .catch(err => console.error(err))
  }
  console.log(userData);
  return (
    <div className='container'>
      <div className="d-flex justify-content-between cmt">
        <Link to='/'><img src={logo} className='logotip' /></Link>
        <p className='to-sign'>Already a member?<Link to="/sign-in">Sign in</Link></p>
      </div>
      <h2 className='text-center'>Create an account</h2>
      <div className="create-wrapper">
        <div className="d-flex">
          <form onSubmit={createUser}>
            <div className='d-flex gap-3 align-items-center'>
              <input type="text" placeholder='First name' onChange={e => {setUserData({...userData, name:e.target.value})}} />
              <input type="text" placeholder='Last name' onChange={e => {setUserData({...userData, lastNmae:e.target.value})}} />
            </div>
            <div className='d-flex password-and-email ' >
              <input type="text" placeholder='Email'onChange={e => {setUserData({...userData, email:e.target.value})}} />
              <input type="password" placeholder='Password' onChange={e => {setUserData({...userData, password:e.target.value})}} />
              <input type="url" placeholder='Avatar' onChange={e => {setUserData({...userData, avatar:e.target.value})}} />
            </div>
            <p className='py-4'>By Creating an account, you agree to our <span className='text-blue'>User</span> <br /> <span className='text-blue'>Agreement</span>  and acknowledge reading our <span className='text-blue'>User </span><br /> <span className='text-blue'>User </span> Notice .</p>
            <button className='create-button'>Create Account</button>
          </form>
          <hr />
          <p className='align-self-center fs-5 or '>or</p>
          <hr />
          <div className='d-flex auth-with-google'>
            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png " height="25" />
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
      <FooterSmall />
    </div>
  )
}

export default Create