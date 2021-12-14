import React, { Component } from 'react';
import { GetUserLogin } from '../../components/services';
import { NotificationManager } from "react-notifications";
import Register from '../register';
import { Link } from 'react-router-dom';
import history from '../../../history';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logemail: null,
            logpassword: null,
            logformErrors: {
                email: "",
                password: ""
            },
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
            phone: null,
            formErrors: {
                name: "",
                email: "",
                password: "",
                confirmPassword: '',
                phone: ''
            }
        };
    }
    handleChange1 = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let logformErrors = { ...this.state.logformErrors };

        switch (name) {
            case "logemail":
                logformErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "logpassword":
                logformErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ logformErrors, [name]: value });
    };
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "username":
                formErrors.name =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "phone":
                formErrors.phone = value.length === 10
                    ? ""
                    : "maximum 10 Numbers required";
                break;
            case "email":
                console.log(name);
                formErrors.phone = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            case "confirmPassword":
                formErrors.confirmPassword =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value });
    };
    handleSubmit1 = async (event) => {
        event.preventDefault();
        let { logemail, logpassword } = this.state;
        let data = { username: logemail, password: logpassword }
        // if (formValid(this.state)) {
        let user = await GetUserLogin.getUserLogin(data);
        console.log(user);
        if (user) {
            NotificationManager.success("success", "Login");
            await GetUserLogin.authenticate(user.token, logemail,user.id);
            history.push('/')
           
        } else {
            NotificationManager.error("Please check your email & passord", "Input Error");
        }
        // } else {
        //     NotificationManager.error("Please check your Login", "Input Error");
        // }

    }
    handleSubmit = async (event) => {
        event.preventDefault();
        let { name, email, password, confirmPassword, phone } = this.state;
        let data = { username: name, email: email, password: password, confirmPassword: confirmPassword, phone: phone }
        // if (formValid(this.state)) {
        let list = await GetUserLogin.getUserRegister(data);
        if (list) {
            NotificationManager.success(list.message);
            // window.location.href="/";
            history.push('/login')
            // history.goBack()
        }
        // } 
        // else {
        //     NotificationManager.error("Please check your Register", "Input Error");
        // }

    }
    render() {
        let { logemail, logpassword, logformErrors } = this.state;
        let { name, email, password, formErrors, confirmPassword, phone } = this.state;
        return (
            <div>
                <div className="modal fade login-modal-main" id="bd-example-modal">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="login-modal">
                                    <div className="row">
                                        <div className="col-lg-6 pad-right-0">
                                            <div className="login-modal-left">
                                            </div>
                                        </div>
                                        <div className="col-lg-6 pad-left-0">
                                            <button type="button" className="close close-top-right" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true"><i className="mdi mdi-close" /></span>
                                                <span className="sr-only">Close</span>
                                            </button>

                                            <div className="login-modal-right">
                                                {/* Tab panes */}
                                                <div className="tab-content">

                                                    <div className="tab-pane active" id="login" role="tabpanel">
                                                        <form onSubmit={this.handleSubmit1} >
                                                            <h5 className="heading-design-h5">Login to your account</h5>
                                                            <fieldset className="form-group">
                                                                <label>Enter Email</label>
                                                                <input type="email" className="form-control" name="logemail" value={logemail || ''} onChange={this.handleChange1} />
                                                                {logformErrors.email.length > 0 && (
                                                                    <span className="errorMessage">{logformErrors.email}</span>
                                                                )}
                                                            </fieldset>
                                                            <fieldset className="form-group">
                                                                <label>Enter Password</label>
                                                                <input type="password" className="form-control" name="logpassword" value={logpassword || ''} onChange={this.handleChange1} />
                                                                {logformErrors.password.length > 0 && (
                                                                    <span className="errorMessage">{logformErrors.password}</span>
                                                                )}
                                                            </fieldset>
                                                            <fieldset className="form-group">
                                                                <button type="submit" className="btn btn-lg btn-secondary btn-block" >Enter to your account</button>
                                                            </fieldset>
                                                            {/* <div className="login-with-sites text-center">
                                                                <p>or Login with your social profile:</p>
                                                                <button className="btn-facebook login-icons btn-lg"><i className="mdi mdi-facebook" /> Facebook</button>
                                                                <button className="btn-google login-icons btn-lg"><i className="mdi mdi-google" /> Google</button>
                                                            </div> */}
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                                            </div>
                                                        </form>
                                                    </div>


                                                    <div className="tab-pane" id="register" role="tabpanel">
                                                        {/* <Register /> */}
                                                        <form onSubmit={this.handleSubmit}>
                                                            <div>
                                                                <h5 className="heading-design-h5">Register Now!</h5>
                                                                <fieldset className="form-group">
                                                                    <label>First Name</label>
                                                                    <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                                                                    {formErrors.name.length > 0 && (
                                                                        <span className="errorMessage">{formErrors.name}</span>
                                                                    )}
                                                                </fieldset>
                                                                <fieldset className="form-group">
                                                                    <label>Enter Email</label>
                                                                    <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                                                                    {formErrors.email.length > 0 && (
                                                                        <span className="errorMessage">{formErrors.email}</span>
                                                                    )}
                                                                </fieldset>
                                                                <fieldset className="form-group">
                                                                    <label>Enter Mobile number</label>
                                                                    <input type="number" className="form-control" name="phone" value={phone} onChange={this.handleChange} />
                                                                    {formErrors.phone.length > 0 && (
                                                                        <span className="errorMessage">{formErrors.phone}</span>
                                                                    )}
                                                                </fieldset>
                                                                <fieldset className="form-group">
                                                                    <label>Enter Password</label>
                                                                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                                                    {formErrors.password.length > 0 && (
                                                                        <span className="errorMessage">{formErrors.password}</span>
                                                                    )}
                                                                </fieldset>
                                                                <fieldset className="form-group">
                                                                    <label>Enter Confirm Password </label>
                                                                    <input type="password" className="form-control" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                                                                    {formErrors.confirmPassword.length > 0 && (
                                                                        <span className="errorMessage">{formErrors.confirmPassword}</span>
                                                                    )}
                                                                </fieldset>
                                                                <fieldset className="form-group">
                                                                    <button type="submit" className="btn btn-lg btn-secondary btn-block" >Create Your Account</button>
                                                                </fieldset>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                                    <label className="custom-control-label" htmlFor="customCheck2">I Agree with <Link to="#">Term and Conditions</Link></label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />
                                                <div className="text-center login-footer-tab">
                                                    <ul className="nav nav-tabs" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" data-toggle="tab" href="#login" role="tab"><a> <i className="mdi mdi-lock" /></a> LOGIN</a >
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#register" role="tab"><a><i className="mdi mdi-pencil" /></a> REGISTER</a >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="clearfix" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </div >
        )
    }
}
