require("dotenv").config();

const bcrypt = require("bcrypt");
const pool = require("../config/db");

async function seedAdmin() {
    try {
        const email = "admin@gmail.com";

        // Check if admin already exists
        const existing = await pool.query(
            "SELECT id FROM users WHERE email = $1",
            [email]
        );

        if (existing.rows.length > 0) {
            console.log("Admin already exists.");
            process.exit(0);
        }

        const passwordHash = await bcrypt.hash("Admin@123", 10);

        await pool.query(
            `
            INSERT INTO users
            (
                name,
                email,
                password_hash,
                address,
                role
            )

            VALUES
            ($1,$2,$3,$4,$5)
            `,
            [
                "System Administrator",
                email,
                passwordHash,
                "Pune",
                "ADMIN"
            ]
        );

        console.log("Admin created successfully.");
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await pool.end();
    }
}

seedAdmin();