import api from '../../../../app/ApiConfig';
import { Apis } from '../../../../config';
import { NotificationManager } from 'react-notifications';

const getLocationListDetails = async (Token) => {
    try {
        let result = await api.get(Apis.GetLocationListDetails ,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${Token}`,
            }
        });
        if (result.data.error) {
            console.log(result.data);
            NotificationManager.error(result.data.message);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getFilterByCategory = async (data) => {
    try {
        let result = await api.get(Apis.GetFilterByCategory+`/${data.slug}/${data.id}`);
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

const getAreaListDetails = async (data) => {
    try {
        let result = await api.get(Apis.GetAreaListDetails+`/${data.slug}`);
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

export default {
    getLocationListDetails,
    getFilterByCategory,
    getAreaListDetails
};