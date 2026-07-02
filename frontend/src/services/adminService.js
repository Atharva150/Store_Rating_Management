import api from "./api";

const getDashboard = async () => {
    try {
        const response = await api.get(
            "/admin/dashboard"
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to fetch dashboard data" }
        );
    }
};

const getAllUsers = async () => {
    try {
        const response = await api.get(
            "/admin/users"
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to fetch users" }
        );
    }
};

const getUserById = async (id) => {
    try {
        const response = await api.get(
            `/admin/users/${id}`
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to fetch user" }
        );
    }
};

const createUser = async (userData) => {
    try {
        const response = await api.post(
            "/admin/users",
            userData
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to create user" }
        );
    }
};

const updateUser = async (id, userData) => {
    try {
        const response = await api.put(
            `/admin/users/${id}`,
            userData
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to update user" }
        );
    }
};

const deleteUser = async (id) => {
    try {
        const response = await api.delete(
            `/admin/users/${id}`
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to delete user" }
        );
    }
};

const getAllStores = async () => {
    try {
        const response = await api.get(
            "/admin/stores"
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to fetch stores" }
        );
    }
};

export default {
    getDashboard,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getAllStores,};
