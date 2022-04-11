import api from '../../../../app/ApiConfig';
import { Apis } from '../../../../config';
import Cookies from 'js-cookie';
import { NotificationManager } from 'react-notifications';
import history from '../../../../history';
import Axios from 'axios';
const getUserLogin = async (data) => {
    console.log(data);
    try {
        let result = await api.post(Apis.GetUserLogin, data, {
            // withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                 'Content-Type': 'application/json'
            }
        });
        console.log(result);
        if (result.data.error) {
            // NotificationManager.error(result.data.message);
            return null;
        }
        setTimeout(
            function () {
                window.location.reload();
            },
            1000
        );
        return result.data.result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getUserRegister = async (data) => {
    try {
        let result = await api.post(Apis.GetUserRegsiter, data);
        if (result.data.error) {
            NotificationManager.error(result.data.message);
            return null;
        }
        setTimeout(
            function () {
                window.location.reload();
            },
            100
        );
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const authenticate = async (data, email,id) => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem('_sid', data)
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('id', id)
        setTimeout(
            function () {
                window.location.reload();
            },
            1000
        );
    }
};

const getCustomerDetail = async (Token) => {
    try {
        let result = await api.get(Apis.GetCustomerDetails ,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${Token}`,
                //  'Content-Type': 'application/json'

            }
        });
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data.result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getCustomerUpdate = async (data) => {
    try {
        let result = await api.post(Apis.GetCustomerUpdateDetails,{data});
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const authenticateByCart = async (token, email,id) => {
    if (typeof window !== "undefined") {
       sessionStorage.setItem('_sid',token )
       sessionStorage.setItem('email', email);
       sessionStorage.setItem('id', id)
       try {
        let result =  Axios.get(Apis.GetCart, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`,
            }
        });
        if (result.data.error) {
            NotificationManager.error(result.data.massage);
            return null;
        }
        console.log(result);
        // setUsercart(result.data)
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
        setTimeout(
            function () {
                // window.location.href = "/checkout";
                // history.push('/checkout')
            },
            1000
        );
    } else {
        NotificationManager.error("Please check your login", "Input Error");
    }
};

const logout = (next) => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem('_sid');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('id');
        window.location.href = "/";
        // next();
    }
};

const isAuthenticate = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    return sessionStorage.getItem('_sid');
};

export default {
    getUserLogin,
    authenticate,
    isAuthenticate,
    authenticateByCart,
    getUserRegister,
    getCustomerDetail,
    getCustomerUpdate,
    logout,
};