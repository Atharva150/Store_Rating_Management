const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Generate JWT Token
 * @param {Object} payload
 * @returns {String} token
 */
const generateToken = (payload) => {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET
    );
};

/**
 * Verify JWT Token
 * @param {String} token
 * @returns {Object} decoded payload
 */
const verifyToken = (token) => {
    return jwt.verify(
        token,
        process.env.JWT_SECRET
    );
};

module.exports = {
    generateToken,
    verifyToken,
};
