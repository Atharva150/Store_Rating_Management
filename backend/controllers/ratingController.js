const ratingService = require("../services/ratingService");

const submitRating = async (req, res) => {

    try {

        const user_id = req.user.id;

        const { store_id, rating } = req.body;

        const newRating = await ratingService.submitRating({
            user_id,
            store_id,
            rating,
        });

        return res.status(201).json({
            success: true,
            message: "Rating submitted successfully.",
            data: newRating,
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

const updateRating = async (req, res) => {

    try {

        const user_id = req.user.id;

        const { storeId } = req.params;

        const { rating } = req.body;

        const updatedRating = await ratingService.updateRating(
            user_id,
            storeId,
            rating
        );

        return res.status(200).json({
            success: true,
            message: "Rating updated successfully.",
            data: updatedRating,
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};


const getMyRatings = async (req, res) => {

    try {

        const user_id = req.user.id;

        const ratings = await ratingService.getMyRatings(user_id);

        return res.status(200).json({
            success: true,
            count: ratings.length,
            data: ratings,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    submitRating,
    updateRating,
    getMyRatings,
};


