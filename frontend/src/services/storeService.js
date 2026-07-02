import api from "./api";
const getAllStores = async () => {

    try {
        const response = await api.get("/stores");
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to fetch stores" }
        );
    }
};

const getStoreById = async (id) => {
    try {
        const response = await api.get(`/stores/${id}`);
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to fetch store" }
        );
    }
};

const createStore = async (storeData) => {
    try {
        const response = await api.post(
            "/stores",
            storeData
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to create store" }
        );
    }
};

const updateStore = async (id, storeData) => {
    try {
        const response = await api.put(
            `/stores/${id}`,
            storeData
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to update store" }
        );
    }
};


const deleteStore = async (id) => {
    try {
        const response = await api.delete(
            `/stores/${id}`
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to delete store" }
        );
    }
};

export default {
    getAllStores,
    getStoreById,
    createStore,
    updateStore,
    deleteStore,
};