import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, incrementToCart, decreaseToCart ,getCart} from "../../../../store/actions/cartActions";
class Cartsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grandTotal: '', toggle: false,cartItems:0
        }
    }
   componentDidMount(){
    this.setState({ cartItems: this.props.cartItems })
   }
    handleHide() {
        this.setState({ toggle: !this.state.toggle })
    }
    // componentDidUpdate(){
    //     console.log("old",this.state.cartItems.length,"curent", this.props.cartItems.length );
       
    //     if (this.state.cartItems.length !==  this.props.cartItems.length) {
    //         console.log("enter");
    //         this.setState({ cartItems: this.props.cartItems });
    //     }
    // }
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                <span data-toggle="offcanvas" className="btn btn-link border-none"><i className="mdi mdi-cart" /> My Cart <small className="cart-value">{ cartItems.length}</small></span>
                <div className="cart-sidebar">
                    <div className="bs-canvas-header side-cart-header p-3 ">
                        <div className="d-inline-block  main-cart-title">My Cart <span>({cartItems.length} Items)</span></div>
                        <button type="button" className="bs-canvas-close close" data-toggle="offcanvas"><i className="mdi mdi-close"></i></button>
                    </div>
                    <div className="cart-sidebar-body">
                        {
                            cartItems.map((row, index) => {
                                return (
                                    <div className="cart-item" key={index}  >
                                        <div className="cart-product-img ">
                                            <img className="img-fluid " src={row.productModel.imageURL} alt="cart" />
                                            <div className="offer-badge">{row.productModel.discount}%</div>
                                        </div>
                                        <div className="cart-text">
                                            <h4>{row.productModel.name}</h4>
                                            <div className="cart-radio" style={{ visibility: "hidden" }}>
                                                <ul className="kggrm-now">
                                                    <li>
                                                        <input type="radio" id="a1" name="cart1" />
                                                        <label >{row.unitSize}</label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="qty-group">
                                                <div className="quantity buttons_added">
                                                    <input type="button" defaultValue="-" className="minus minus-btn" onClick={() => this.props.decreaseToCart(row)} />
                                                    <input type="number" value={row.quantity || 1} className="input-text qty text" disabled />
                                                    <input type="button" defaultValue="+" className="plus plus-btn" onClick={() => this.props.incrementToCart(row)} />
                                                    <button type="button" className="cart-close-btn" onClick={() => this.props.removeFromCart(row)}><i className="mdi mdi-close" /></button>
                                                </div>
                                                <div className="cart-item-price">&#x20B9;{(row.quantity || 1) * parseInt(row.productModel.price)}<span>&#x20B9;{parseInt(row.productModel.price) + 250}</span></div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="cart-sidebar-footer">
                        <div className="cart-store-details">
                            <p>Sub Total <strong className="float-right">
                                &#x20B9;{cartItems.reduce((sum, i) => (
                                    sum += i.quantity * i.productModel.price
                                ), 0)}
                            </strong></p>
                            <p>Delivery Charges <strong className="float-right text-danger">+ &#x20B9;29.69</strong></p>
                            <h6>Your total savings <strong className="float-right text-danger">&#x20B9;55 (42.31%)</strong></h6>
                        </div>
                        <Link to="/checkout"><button data-toggle="offcanvas" className="btn btn-secondary btn-lg btn-block text-left" type="button"><span className="float-left"><i className="mdi mdi-cart-outline" /> Proceed to Checkout </span><span className="float-right"><strong>
                            &#x20B9;{cartItems.reduce((sum, i) => (
                                sum += i.quantity * i.productModel.price
                            ), 0)}
                        </strong> <span className="mdi mdi-chevron-right" /></span></button></Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(
    (state) => ({
        cartItems: state.cart.cartItems,
    }),
    { incrementToCart, decreaseToCart, removeFromCart ,getCart}
)(Cartsidebar);