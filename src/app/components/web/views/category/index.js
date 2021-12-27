import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { GetProductDetails } from '../../../services';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [], categorybyproduct: [], isloaded: false,
        }
    }
    async getFilterByProduct() {
        let p = await GetProductDetails.getProductByFilter();
        // console.log(p);
        if (p) {
            this.setState({ list: p, isloaded: true })
        }

    }
    async componentDidMount() {
        this.getFilterByProduct();
    }
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        };
        return (
            <div style={{ background: '#fff' }}>
                <div className="container" id="header-category-bk">
                    <Slider {...settings}>
                        { this.state.list.map((lists,index) => {
                           return <div className="item" key={index}>
                                <div className="category-item">
                                    <Link to={{
                                        pathname: `/product/catagory/${lists.id}`,
                                    }}>
                                        <img className="img-fluid" src={lists.imageURL} alt="personalcare" />
                                        <h6>{lists.name}</h6>
                                    </Link>
                                </div>
                            </div>
                        })}

                        {/* <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/grocery-staples`,
                                }}>
                                    <img className="img-fluid" src="img/category/grocerystample.jpg" alt="grocery-stamples" />
                                    <h6>Grocery &amp; Staples</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/personal-care`,
                                }}>
                                    <img className="img-fluid" src="img/category/personalcare.png" alt="personalcare" />
                                    <h6>Personal Care</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/household-items`,
                                }}>
                                    <img className="img-fluid" src="img/category/household.png" alt="household-imtes" />
                                    <h6>Household Needs</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/home-kitchen`,
                                }}>
                                    <img className="img-fluid" src="img/category/kitchen.png" alt="kitchen" />
                                    <h6>Home &amp; Kitchen</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/beverages`,
                                }}>
                                    <img className="img-fluid" src="img/category/beverage.png" alt="beverages" />
                                    <h6>Beverages</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/breakfast-dairy`,
                                }}>
                                    <img className="img-fluid" src="img/category/breakfastdairy.png" alt="breakfastdairy" />
                                    <h6>Breakfast &amp; Dairy</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/biscuits-snacks-chocolates`,
                                }}>
                                    <img className="img-fluid" src="img/category/Biscuits.png" alt="biscuits-snacks-chocklates" />
                                    <h6>Biscuits, Snacks &amp; Chocolates</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/noodles-sauces-instant-food`,
                                }}>
                                     <img className="img-fluid" src="img/category/noodles.png" alt="noodles" />
                                    <h6>Noodles, Sauces &amp; Instant Food</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/pet-care`,
                                }}>
                                     <img className="img-fluid" src="img/category/petcare.png" alt="pet-care" />
                                    <h6>Pet Care</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                            <Link to={{
                                    pathname: `/shop/baby-care`,
                                }}>
                                     <img className="img-fluid" src="img/category/babycare.png" alt="baby-care" />
                                    <h6>Baby Care</h6>
                                </Link>
                            </div>
                        </div> */}
                    </Slider >
                </div>
            </div >
        )
    }
}
export default Category;