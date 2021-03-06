import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
                <section className="section-padding bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-truck-fast" />
                                    <h6>Free &amp; Next Day Delivery</h6>
                                    <p>Lorem ipsum dolor sit amet, cons...</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-basket" />
                                    <h6>100% Satisfaction Guarantee</h6>
                                    <p>Rorem Ipsum Dolor sit amet, cons...</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-tag-heart" />
                                    <h6>Great Daily Deals Discount</h6>
                                    <p>Sorem Ipsum Dolor sit amet, Cons...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding footer bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                {/* <h4 className="mb-5 mt-0"><Link className="logo" href="index.html"><img src="img/logo-footer.png" alt="CitwaShop" /></Link> </h4>
                                <p className="mb-0"><Link className="text-dark" href="#"><i className="mdi mdi-phone" /> +61 525 240 310</Link>  </p>
                                <p className="mb-0"><Link className="text-dark" href="#"><i className="mdi mdi-cellphone-iphone" /> 12345 67890, 56847-98562</Link> </p> */}
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">TOP CITIES </h6>
                                <ul>
                                    <li><Link to="#">New Delhi</Link> </li>
                                    <li><Link to="#">Bengaluru</Link> </li>
                                    <li><Link to="#">Hyderabad</Link> </li>
                                    <li><Link to="#">Kolkata</Link> </li>
                                    <li><Link to="#">Gurugram</Link> </li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">CATEGORIES</h6>
                                <ul>
                                    <li><Link to="#">Vegetables</Link> </li>
                                    <li><Link to="#">Grocery &amp; Staples</Link> </li>
                                    <li><Link to="#">Breakfast &amp; Dairy</Link> </li>
                                    <li><Link to="#">Soft Drinks</Link> </li>
                                    <li><Link to="#">Biscuits &amp; Cookies</Link> </li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">ABOUT US</h6>
                                <ul>
                                    <li><Link to="#">Company Information</Link> </li>
                                    <li><Link to="#">Careers</Link></li>
                                    <li><Link to="#">Store Location</Link> </li>
                                    <li><Link to="#">Affillate Program</Link> </li>
                                    <li><Link to="#">Copyright</Link></li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-3 col-md-3">
                                <h6 className="mb-4">Download App</h6>
                                <div className="app">
                                    <Link to="#"><img src='http://assets.stickpng.com/images/5a902dbf7f96951c82922875.png' alt /></Link>
                                    <Link to="#"><img src="https://e7.pngegg.com/pngimages/488/584/png-clipart-app-store-iphone-apple-mobile-app-iphone-electronics-text.png" alt /></Link>
                                </div>
                                <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                                <div className="footer-social">
                                    <a className="btn-facebook" href="#"><i className="mdi mdi-facebook" /></a>
                                    <a className="btn-twitter" href="#"><i className="mdi mdi-twitter" /></a>
                                    <a className="btn-instagram" href="#"><i className="mdi mdi-instagram" /></a>
                                    <a className="btn-whatsapp" href="#"><i className="mdi mdi-whatsapp" /></a>
                                    <a className="btn-messenger" href="#"><i className="mdi mdi-facebook-messenger" /></a>
                                    <a className="btn-google" href="#"><i className="mdi mdi-google" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Footer */}
                {/* Copyright */}
                <section className="pt-4 pb-4 footer-bottom">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                <p className="mt-1 mb-0">?? Copyright 2020 <strong className="text-dark">Farm63</strong>. All Rights Reserved<br />
                                    <small className="mt-0 mb-0">Made with <i className="mdi mdi-heart text-danger" /> by webrixtec
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Copyright */}
            </div>
        )
    }
}
