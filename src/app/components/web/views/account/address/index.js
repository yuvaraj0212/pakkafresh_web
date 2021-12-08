import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GetUserLogin } from '../../../../services';
import '../css/index.css'

export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
        };
    }
    async componentDidMount() {
        let email = sessionStorage.getItem('_sid')
        if (email) {
            let value = await GetUserLogin.getCustomerDetail(email);
            if (value) {
                this.setState({ user: value })
            }
        }
    }
    handleLogout = async (event) => {
        event.preventDefault();
        await GetUserLogin.logout();
    }
    render() {
        let { user } = this.state;
        return (
            <div className="wrapper">
                <div className="gambo-Breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Home</li>
                                        <li className="breadcrumb-item active" aria-current="page">User Dashboard</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-group">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="user-dt">
                                    <div className="user-img">
                                        <img src="/img/avatar/img-5.jpg" alt />
                                        <div className="img-add">
                                            <input type="file" id="file" />
                                            <label htmlFor="file"><i className="uil uil-camera-plus" /></label>
                                        </div>
                                    </div>
                                    <h4>{user.username}</h4>
                                    <p>+91 {user.phone}</p>
                                    {/* <div className="earn-points"><img src="images/Dollar.svg" alt />Points : <span>20</span></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="left-side-tabs">
                                    <div className="dashboard-left-links">
                                    <Link to="/account/view" className="user-item active"><i className="uil uil-apps" />Overview</Link>
                                        <Link to="/account/profile" className="user-item"><i className="mdi mdi-account-outline" />My profile</Link>
                                        <Link to="/account/order/list" className="user-item"><i className="uil uil-box" />My Orders</Link>
                                        {/* <Link to="/account/rewards" className="user-item"><i className="uil uil-gift" />My Rewards</Link> */}
                                        <Link to="/account/wishlist" className="user-item"><i className="uil uil-heart" />Shopping Wishlist</Link>
                                        <Link to="/account/address" className="user-item"><i className="uil uil-location-point" />My Address</Link>
                                        <a className="user-item" onClick={this.handleLogout}><i className="uil uil-exit" />Logout</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <div className="dashboard-right">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="main-title-tab">
                                                <h4><i className="uil uil-location-point" />My Address</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="pdpt-bg">
                                                <div className="pdpt-title">
                                                    <h4>My Address</h4>
                                                </div>
                                                <div className="address-body">
                                                    <a to="#" className="add-address hover-btn" data-toggle="modal" data-target="#address_model">Add New Address</a>
                                                    {
                                                        user.Addresses   ?
                                                            user.Addresses.map((row, index) => (
                                                                <div className="address-item" key={index}>
                                                                    <div className="address-icon1">
                                                                        <i className="uil uil-home-alt" />
                                                                    </div>
                                                                    <div className="address-dt-all">
                                                                        {/* <h4>Home</h4> */}
                                                                        <p>#{row.shipping+' , ' +row.area+' , ' +row.city+' , ' +row.discrict+' , ' +row.states}</p>
                                                                        <ul className="action-btns">
                                                                            <li><a href="#" className="action-btn"><i className="uil uil-edit" /></a></li>
                                                                            <li><a href="#" className="action-btn"><i className="uil uil-trash-alt" /></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                            ))
                                                            : <p>Loading...</p>}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
