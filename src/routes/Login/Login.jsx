import React from 'react'
import logo from '../../images/logo512.png'
import { Link } from 'react-router-dom'
import '../Login/Login.scss'
import FooterSmall from '../../components/Footer_small/FooterSmall'
const Login = () => {
    return (
        <div className='container'>
            <div className="login-wrapper">
                <div className="d-flex justify-content-between">
                    <Link to='/'>
                        <img src={logo} />
                    </Link>
                    <Link className='py-2'>Tell us what you think</Link>
                </div>
                <div className=" justify-content-center margin-left">
                    <h2 className='text-center'>Hello</h2>
                    <p className='text-center'>Sign in to eBay or <Link to='/create'>Create an account</Link></p>
                    <div className="login-elements">
                    <input className='input' type="text" placeholder='Email or username' />
                    <p className='py-2'>Created your account with a mobile number?</p>
                    <Link href="/sign-tel" className='text-dark d-block sign-tel'>Sign in with mobile</Link>
                    <br />
                    <button className='btn btn-primary btn-padding'>Sign in</button>
                    <p className='tc'>or</p>
                    <div className='d-flex auth-with-google google'>
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png " height="25" />
                        <p>Continue with Google</p>
                    </div>
                    </div>
                </div>
            </div>
            <FooterSmall />
        </div>
    )
}

export default Login