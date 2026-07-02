/**
 * Role-Based Authorization Middleware
 *
 * Usage:
 * authorize("ADMIN")
 * authorize("OWNER")
 * authorize("USER")
 * authorize("ADMIN", "OWNER")
 */

const authorize = (...allowedRoles) => {

    return (req, res, next) => {

        // authMiddleware should already have populated req.user
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required."
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to access this resource."
            });
        }

        next();
    };

};

module.exports = authorize;