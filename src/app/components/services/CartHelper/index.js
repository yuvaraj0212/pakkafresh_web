import api from '../../../../app/ApiConfig';
import { Apis } from '../../../../config';
import { NotificationManager } from 'react-notifications';

const AddCart = async (data) => {
    try {
        let result = await api.post(Apis.AddCart, data);
        if (result.data.error) {
            NotificationManager.error(result.data.massage);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const emptyCart = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cartItems')) {
            localStorage.removeItem('cartItems')
            window.location.href = "/order/success";
        }
    }
    return [];
};
const updateCart = async (data) => {
    try {
        let result = await api.post(Apis.updateCart, data);
        if (result.data.error) {
            NotificationManager.error(result.data.massage);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const GetCart = async (Token) => {
    try {
        let result = await api.post(Apis.GetCart, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${Token}`,
            }
        });
        if (result.data.error) {
            NotificationManager.error(result.data.massage);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};


export default {
    emptyCart,
    AddCart,
    updateCart,
    GetCart,

};