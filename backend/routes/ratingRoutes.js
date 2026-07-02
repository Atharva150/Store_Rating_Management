const express = require("express");
const router = express.Router();

const ratingController = require("../controllers/ratingController");

const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");


router.post(
    "/",
    authenticate,
    authorize("USER"),
    ratingController.submitRating
);

router.patch(
    "/:storeId",
    authenticate,
    authorize("USER"),
    ratingController.updateRating
);


router.get(
    "/my",
    authenticate,
    authorize("USER"),
    ratingController.getMyRatings
);

module.exports = router;