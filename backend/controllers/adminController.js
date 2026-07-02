const adminService = require("../services/adminService");

/**
 * Dashboard Statistics
 * GET /api/admin/dashboard
 */
const getDashboardStats = async (req, res) => {
    try {

        const stats = await adminService.getDashboardStats();

        return res.status(200).json({
            success: true,
            data: stats,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Create User
 * POST /api/admin/users
 */
const createUser = async (req, res) => {
    try {

        const user = await adminService.createUser(req.body);

        return res.status(201).json({
            success: true,
            message: "User created successfully.",
            data: user,
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Get All Users
 * GET /api/admin/users
 */
const getAllUsers = async (req, res) => {
    try {

        const users = await adminService.getAllUsers();

        return res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Get User By ID
 * GET /api/admin/users/:id
 */
const getUserById = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await adminService.getUserById(id);

        return res.status(200).json({
            success: true,
            data: user,
        });

    } catch (error) {

        return res.status(404).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Get All Stores
 * GET /api/admin/stores
 */
const getAllStores = async (req, res) => {
    try {

        const stores = await adminService.getAllStores();

        return res.status(200).json({
            success: true,
            count: stores.length,
            data: stores,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Search Users
 * GET /api/admin/users/search?keyword=value
 */
const searchUsers = async (req, res) => {
    try {

        const { keyword } = req.query;

        const users = await adminService.searchUsers(keyword || "");

        return res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

/**
 * Search Stores
 * GET /api/admin/stores/search?keyword=value
 */
const searchStores = async (req, res) => {
    try {

        const { keyword } = req.query;

        const stores = await adminService.searchStores(keyword || "");

        return res.status(200).json({
            success: true,
            count: stores.length,
            data: stores,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

module.exports = {
    getDashboardStats,
    createUser,
    getAllUsers,
    getUserById,
    getAllStores,
    searchUsers,
    searchStores,
};

