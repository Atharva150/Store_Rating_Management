const ownerService = require("../services/ownerService");

const getDashboard = async (req, res) => {

    try {

        const ownerId = req.user.id;

        const dashboard = await ownerService.getDashboard(ownerId);

        return res.status(200).json({
            success: true,
            data: dashboard,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

const getUsersWhoRated = async (req, res) => {

    try {

        const ownerId = req.user.id;

        const ratings = await ownerService.getUsersWhoRated(ownerId);

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

const getAverageRating = async (req, res) => {

    try {

        const ownerId = req.user.id;

        const averageRating = await ownerService.getAverageRating(ownerId);

        return res.status(200).json({
            success: true,
            data: averageRating,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    getDashboard,
    getUsersWhoRated,
    getAverageRating,
};

