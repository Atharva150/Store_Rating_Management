import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * Automatically attach JWT token
 * before every request.
 */
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

/**
 * Handle common API errors.
 */
api.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response?.status === 401) {
            console.log("Unauthorized. Please login again.");
        }

        if (error.response?.status === 403) {
            console.log("Access denied.");
        }

        return Promise.reject(error);
    }
);

export default api;