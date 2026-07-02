import api from "./api";

const submitRating = async (data) => {

    try {
        const response = await api.post(
            "/ratings",
            data
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to submit rating" }
        );
    }
};

const getMyRatings = async () => {
    try {
        const response = await api.get(
            "/ratings/my"
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to fetch ratings" }
        );
    }
};

const updateRating = async (storeId, ratingData) => {
    try {
        const response = await api.patch(
            `/ratings/${storeId}`,
            ratingData
        );
        return response.data;
    } catch (error) {
        throw (
            error.response?.data ||
            { message: "Failed to update rating" }
        );
    }
};

export default {
    submitRating,
    getMyRatings,
    updateRating,
};
