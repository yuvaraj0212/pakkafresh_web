import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default class Bestofferbanner extends Component {
    render() {
        return (
            <div>
                <div className="section145">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-title-tt">
                                    <div className="main-title-left">
                                        <span>Offers</span>
                                        <h2>Best Values</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link to="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-1.jpg" alt />
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link to="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-2.jpg" alt />
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link to="#" className="best-offer-item offr-none">
                                    <img src="img/best-offers/offer-3.jpg" alt />
                                    <div className="cmtk_dt">
                                        <div className="product_countdown-timer offer-counter-text" data-countdown="2021/01/06">165 days 01:28:33</div>
                                    </div>
                                </Link >
                            </div>
                            <div className="col-md-12">
                                <Link to="#" className="code-offer-item">
                                    <img src="img/best-offers/offer-4.jpg" alt />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
