import React, { Component } from 'react';
import { GetUserLogin, GetOrderDetails } from '../../../../../services';
import { NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import '../../css/index.css'
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '', orderList: []
        };
    }
    async componentDidMount() {
        let email = sessionStorage.getItem('_sid')
        if (email) {
            let value = await GetUserLogin.getCustomerDetail(email);
            let list = await GetOrderDetails.getOrderByUser(email);
            if (value) {
                this.setState({ user: value, orderList: list.order })
            } else {
                NotificationManager.error("Check your credential", "Login");
            }
        }
    }
    handleLogout = async (event) => {
        event.preventDefault();
        await GetUserLogin.logout();
    }
    render() {
        let { user, orderList } = this.state;
        console.log("List -> render -> orderList", orderList)
        return (
            <div className="wrapper">
                <div className="gambo-Breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">Home</li>
                                        <li className="breadcrumb-item active" aria-current="page">My Orders</li>
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
                                                <h4><i className="uil uil-box" />My Orders</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="pdpt-bg">
                                                <div className="pdpt-title">
                                                    <h6>Order List</h6>
                                                </div>
                                                <div className="order-body10">

                                                    <div class="card card-body account-right">
                                                        <div class="widget">
                                                            <div class="order-list-tabel-main table-responsive">
                                                                <table class="datatabel table table-striped table-bordered order-list-tabel" width="100%" cellspacing="0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Order #</th>
                                                                            <th>Date Purchased</th>
                                                                            <th>Delivery Date</th>
                                                                            <th>Status</th>
                                                                            <th>Total</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {
                                                                            orderList ?
                                                                                orderList.map((row, index) => (
                                                                                    <tr key={index}>
                                                                                        <td>#{row.number}</td>
                                                                                        <td><Moment format='MMMM Do YYYY'>{row.createdAt}</Moment></td>
                                                                                        <td>{row.deliverydate?<Moment format='MMMM Do YYYY'>{row.deliverydate}</Moment>:''}</td>
                                                                                        <td>
                                                                                            {row.status === "processing" ?
                                                                                                <span className="badge badge-info">In Progress</span> :
                                                                                                row.status === "cancel" ?
                                                                                                    <span className="badge badge-danger">Canceled</span> :
                                                                                                    row.status === "shipping" ?
                                                                                                        <span className="badge btn-primary">shipping</span> :
                                                                                                        row.status === "delieverd" ?
                                                                                                            <span className="badge badge-success">Delivered</span> :
                                                                                                            <span className="badge badge-warning">Delayed</span>
                                                                                            }

                                                                                        </td>
                                                                                        <td>{row.grandtotal}</td>
                                                                                        <td>
                                                                                            <Link
                                                                                                className="btn btn-info btn-sm"
                                                                                                to={{ pathname: '/account/order/details', query: row }}>
                                                                                                <i className="mdi mdi-eye"></i>
                                                                                            </Link>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))
                                                                                : <p>Loading...</p>
                                                                        }


                                                                    </tbody>
                                                                </table>
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
                    </div>
                </div>
            </div>

        )
    }
}
