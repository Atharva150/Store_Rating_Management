const pool = require("../config/db");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

const SALT_ROUNDS = 10;

/**
 * Register a new normal user
 */
const signup = async ({ name, email, password, address }) => {
    const existingUser = await pool.query(
        `SELECT id FROM users WHERE email = $1`,
        [email]
    );
    if (existingUser.rows.length > 0) {
        throw new Error("Email already exists.");
    }
    
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const result = await pool.query(
        `
        INSERT INTO users
        (name, email, password_hash, address, role)
        VALUES ($1, $2, $3, $4, 'USER')
        RETURNING id, name, email, address, role, created_at
        `,
        [name, email, passwordHash, address]
    );
    return result.rows[0];
};

const login = async ({ email, password }) => {
    const result = await pool.query(
        `
        SELECT *
        FROM users
        WHERE email = $1
        `,
        [email]
    );

    if (result.rows.length === 0) {
        throw new Error("Invalid email or password.");
    }
    const user = result.rows[0];
    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password_hash
    );
    if (!isPasswordCorrect) {
        throw new Error("Invalid email or password.");
    }
    const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
    });
    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            role: user.role,
        },
    };
};

const updatePassword = async (
    userId,
    oldPassword,
    newPassword
) => {

    const result = await pool.query(
        `
        SELECT password_hash
        FROM users
        WHERE id = $1
        `,
        [userId]
    );

    if (result.rows.length === 0) {
        throw new Error("User not found.");
    }
    const currentHash = result.rows[0].password_hash;
    const isMatch = await bcrypt.compare(
        oldPassword,
        currentHash
    );
    if (!isMatch) {
        throw new Error("Old password is incorrect.");
    }
    const newHash = await bcrypt.hash(
        newPassword,
        SALT_ROUNDS
    );
    await pool.query(
        `
        UPDATE users
        SET password_hash = $1
        WHERE id = $2
        `,
        [newHash, userId]
    );
    return {
        message: "Password updated successfully."
    };
};

module.exports = {
    signup,
    login,
    updatePassword,
};