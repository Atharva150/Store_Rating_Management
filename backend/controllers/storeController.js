const storeService = require("../services/storeService");

const createStore = async (req, res) => {
    try {

        const store = await storeService.createStore(req.body);

        return res.status(201).json({
            success: true,
            message: "Store created successfully.",
            data: store,
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};

const getAllStores = async (req, res) => {
    try {

        const stores = await storeService.getAllStores();

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

const getStoreById = async (req, res) => {
    try {

        const { id } = req.params;

        const store = await storeService.getStoreById(id);

        return res.status(200).json({
            success: true,
            data: store,
        });

    } catch (error) {

        return res.status(404).json({
            success: false,
            message: error.message,
        });

    }
};

const updateStore = async (req, res) => {
    try {

        const { id } = req.params;

        const updatedStore = await storeService.updateStore(
            id,
            req.body
        );

        return res.status(200).json({
            success: true,
            message: "Store updated successfully.",
            data: updatedStore,
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }
};

const deleteStore = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await storeService.deleteStore(id);

        return res.status(200).json({
            success: true,
            message: result.message,
        });

    } catch (error) {

        return res.status(404).json({
            success: false,
            message: error.message,
        });

    }
};

module.exports = {
    createStore,
    getAllStores,
    getStoreById,
    updateStore,
    deleteStore,
};

