import api from '../../../../app/ApiConfig';
import { Apis } from '../../../../config';
import { NotificationManager } from 'react-notifications';

const AddCart = async (data) => {
    try {
        let result = await api.post(Apis.AddCart, data);
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
const removeCart = async(data) => {
    try {
        let result = await api.delete(Apis.deleteCart+data.id, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${data.token}`,
            }
        });
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
    // if (typeof window !== 'undefined') {
    //     if (localStorage.getItem('cartItems')) {
    //         localStorage.removeItem('cartItems')
    //         window.location.href = "/order/success";
    //     }
    // }
    // return [];
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
        let result = await api.get(Apis.GetCart, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${Token}`,
            }
        });
        if (result.data.error) {
            console.log(result);
            NotificationManager.error(result.data.massage);
            return null;
        }
        return result.data.result;
    } catch (error) {
        console.log(error);
        return null;
    }
};


export default {
    removeCart,
    AddCart,
    updateCart,
    GetCart,

};