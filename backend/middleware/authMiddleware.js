const { verifyToken } = require("../utils/jwt");
const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Invalid token format" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = verifyToken(token);
        
        if (!decoded) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }

        req.user = decoded;
        next();
    } catch (error) {
        console.error("Auth error:", error.message);
        return res.status(401).json({ success: false, message: "Invalid or expired token." });
    }
};

module.exports = authenticate;