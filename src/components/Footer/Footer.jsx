import React from 'react'
import '../Footer/Footer.scss'
import facebookIcon from '../../images/facebookIcon.png'
import twittericon from '../../images/twitterIcon.png'
const Footer = () => {
    return (
        <div className='container'>
            <hr />
            <br />
            <div className="footer-wrapper d-flex">
                <div>
                    <p className='fw-bold fs-4'>Buy</p>
                    <p>Registration</p>
                    <p>eBay Money Back Guarantee</p>
                    <p>Bidding & buying help</p>
                    <p>Stores</p>
                    <p>eBay for Charity</p>
                    <p>Charity Shop</p>
                    <p>Seasonal Sales and events</p>
                </div>
                <div>
                    <div>
                        <p className='fw-bold fs-4'>
                            Sell
                        </p>
                        <p>Start selling</p>
                        <p>How to sell</p>
                        <p>Business sellers</p>
                        <p>Affiliates</p>
                        <p className='fw-bold '>Tools & apps</p>
                        <p>Developers</p>
                        <p>Security center</p>
                        <p>Site map</p>
                    </div>
                </div>
                <div>
                    <p className='fw-bold fs-4'>Stay connected</p>
                    <div className="d-flex gap-1">
                        <img src={facebookIcon} height='20' />
                        <p>Facebook</p>
                    </div>
                    <div className="d-flex gap-1">
                        <img src={twittericon} height='20' />
                        <p>Twitter</p>
                    </div>
                </div>
                <div>
                    <p className='fw-bold fs-4'>About eBay</p>
                    <p>Company info</p>
                    <p>News</p>
                    <p>Investors</p>
                    <p>Careers</p>
                    <p>Diversity & Inclusion</p>
                    <p>Global Impact</p>
                    <p>Government relations</p>
                    <p>Advertise with us</p>
                    <p>Policies</p>
                    <p>Verified Rights Owner (VeRO) Program</p>
                    <p>eCI Licenses</p>
                </div>
                <div>
                    <p className='fw-bold fs-4'>Help & Contact</p>
                        <p>Seller Center</p>
                        <p>Contact Us</p>
                        <p>eBay Returns</p>
                        <p className='fw-bold fs-4'>Community</p>
                        <p>Announcements</p>
                        <p>eBay Community</p>
                        <p>eBay for Business Podcast</p>
                </div>
            </div>
            <div className="d-flex gap-1 my-5">
                <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>
                <p>Accessibility</p>
                <p>User Agreement</p>
                <p>Privacy</p>
                <p>Payments Terms of Use</p>
                <p>Cookies</p>
                <p>Your Privacy Choices</p>
                <p>and</p>
                <p>AdChoice</p>
            </div>
        </div>
    )
}

export default Footer