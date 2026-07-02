const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

const authenticate = require("../middleware/authMiddleware");

const {
    signupValidator,
    loginValidator,
    updatePasswordValidator
} = require("../validators/authValidator");


router.post(
    "/signup",
    signupValidator,
    authController.signup
);


router.post(
    "/login",
    loginValidator,
    authController.login
);


router.patch(
    "/password",
    authenticate,
    updatePasswordValidator,
    authController.updatePassword
);

module.exports = router;