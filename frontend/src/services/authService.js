import api from "./api";

const login = async (credentials) => {
    try {
        const response = await api.post(
            "/auth/login",
            credentials
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            {
                message: "Login failed."
            }
        );
    }
};

const signup = async (userData) => {
    try {
        const response = await api.post(
            "/auth/signup",
            userData
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            {
                message: "Signup failed."
            }
        );
    }
};

const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export default {
    login,
    signup,
    logout,
};