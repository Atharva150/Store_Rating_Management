const express = require("express");
const router = express.Router();

const storeController = require("../controllers/storeController");

const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");


router.get(
    "/",
    authenticate,
    storeController.getAllStores
);

router.get(
    "/:id",
    authenticate,
    storeController.getStoreById
);

router.post(
    "/",
    authenticate,
    authorize("ADMIN"),
    storeController.createStore
);


router.put(
    "/:id",
    authenticate,
    authorize("ADMIN"),
    storeController.updateStore
);

router.delete(
    "/:id",
    authenticate,
    authorize("ADMIN"),
    storeController.deleteStore
);

module.exports = router;

