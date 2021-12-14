import React, { Component } from 'react'
import Login from '../../auth/login';
import { Link, withRouter } from 'react-router-dom';
import Cartsidebar from '../web/views/cart-sidebar';
import { GetUserLogin } from '../../components/services';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '', userName: '', searchtxt: ''
        };
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    async componentDidMount() {
        let cookies = await GetUserLogin.isAuthenticate();
        this.setState({ token: cookies })
        let email = sessionStorage.getItem('_sid')
        if (email) {
            let user = await GetUserLogin.getCustomerDetail(email);
            if (user) {
                this.setState({ userName: user.username })
            }
        }
    }
    handleLogout = async (event) => {
        event.preventDefault();
        await GetUserLogin.logout();
    }
    handleClickSearch = event => {
        let { searchtxt } = this.state;
        this.props.history.push(`/product/catalogsearch/result/${searchtxt}`);
    }
    render() {
        let { token, userName, searchtxt } = this.state;
        return (
            <div>
                <header className="header clearfix">
                    {/* <div className="navbar-top bg-success pt-2 pb-2">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <Link to="/" className="mb-0 text-white">
                                        20% cashback for new users | Code: <strong><span className="text-light">OGOFERS13 <span className="mdi mdi-tag-faces" /></span> </strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
                        <div className="container-fluid">
                            <Link to='/'  >
                                <div style={{ paddingLeft: '11px', color: '#f55d2c', fontSize: '297%' }}>
                                𝔽𝕒𝕣𝕞<span style={{ color: '#9fd040' }}> 𝟞𝟛</span>
                                    </div>
                            {/* <img src='img/LOGO.png' /> */}
                            </Link>
                            {/* <button className="navbar-toggler navbar-toggler-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                 <span className="navbar-toggler-icon" /> 
                            </button> */}
                            <div className="navbar-collapse" id="navbarNavDropdown">
                                <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                                    <div className="top-categories-search" onSubmit={this.handleClickSearch}>
                                        <div className="input-group">
                                            <input className="form-control" placeholder="Search products in Your City" aria-label="Search products in Your City" type="text" name="searchtxt" value={searchtxt} onChange={(e) => this.handleChange(e)} />
                                            <span className="input-group-btn">
                                                <button className="btn btn-secondary" type="submit" onClick={this.handleClickSearch}><i className="mdi mdi-file-find" /> Search</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2 my-lg-0">
                                    <ul className="list-inline main-nav-right" >
                                        <li className="list-inline-item">
                                            <a data-target="#bd-example-modal" data-toggle="modal" className="btn btn-link" style={token ? { display: 'none' } : { display: 'block' }}><i className="mdi mdi-account-circle" /> Login/Sign Up</a>
                                            <div className="dropdown" style={token ? { display: 'block' } : { display: 'none' }}>
                                                <button className="btn btn-account dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {userName+' '}
                                                    <i className="mdi mdi-account-circle" />
                                                </button>

                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <Link className="dropdown-item" to="/account/view"><i className="uil uil-apps" />Dashboard</Link>
                                                    <Link className="dropdown-item" to="/account/profile"><i className="mdi mdi-account-outline" aria-hidden="true"></i>My Profile</Link>
                                                    <Link className="dropdown-item" to="/account/wishlist"><i className="mdi mdi-heart-outline" aria-hidden="true"></i>Wish List</Link>
                                                    <Link className="dropdown-item" to="/account/order/list"><i className="mdi mdi-format-list-bulleted" aria-hidden="true"></i> Orders List</Link>
                                                    <div class="dropdown-divider"></div>
                                                    <span className="dropdown-item" onClick={this.handleLogout}><i className="mdi mdi-lock" aria-hidden="true"></i> Logout</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-inline-item cart-btn">
                                            <Cartsidebar />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* login popup */}
                <Login />
            </div>
        )
    }
}
export default withRouter(Navigation)
