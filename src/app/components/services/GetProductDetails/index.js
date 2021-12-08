import api from '../../../../app/ApiConfig';
import { Apis } from '../../../../config';
import { NotificationManager } from 'react-notifications';

const getProductById = async (id) => {
    try {
        let result = await api.get(Apis.GetProductById+id);
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

const getAllProductList = async (slug) => {
    try {
        let result = await api.get(Apis.GetAllProductList);
        if (result.data.error) {
            NotificationManager.error(result.data.message);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getProductByFilter = async (txt) => {
    try {
        let result = await api.get(Apis.GetProductByFilter);
        if (result.data.error) {
            NotificationManager.error(result.data.message);
            return null;
        }
        return result.data.result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getCategoryListByFilter = async (data) => {
    try {
        let result = await api.post(Apis.GetCategoryListByFilter,data);
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

const getProductBySubcategory = async (data) => {
    try {
        let result = await api.get(Apis.GetProductBySubcategory+data.id);
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
    getProductById,
    getAllProductList,
    getProductByFilter,
    getCategoryListByFilter,
    getProductBySubcategory
};