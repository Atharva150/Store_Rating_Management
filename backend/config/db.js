const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

    // ssl: {
    //     rejectUnauthorized: false,
    // },
})

// Test database connection
pool.connect()
    .then(client => {
        console.log("✅ Connected to PostgreSQL");

        client.release();
    })
    .catch(err => {
        console.error("❌ PostgreSQL Connection Error");
        console.error(err.message);
    });

module.exports = pool;

