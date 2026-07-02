const pool = require("../config/db");
const getDashboard = async (ownerId) => {

    const result = await pool.query(
        `
        SELECT
            s.id,
            s.name,
            s.address,

            COUNT(r.id) AS total_ratings,

            ROUND(COALESCE(AVG(r.rating),0),2) AS average_rating

        FROM stores s

        LEFT JOIN ratings r
        ON s.id = r.store_id

        WHERE s.owner_id = $1

        GROUP BY s.id
        `,
        [ownerId]
    );

    return result.rows;

};

const getUsersWhoRated = async (ownerId) => {

    const result = await pool.query(
        `
        SELECT

            u.id,

            u.name,

            u.email,

            r.rating,

            r.created_at,

            s.name AS store_name

        FROM stores s

        JOIN ratings r
            ON s.id = r.store_id

        JOIN users u
            ON u.id = r.user_id

        WHERE s.owner_id = $1

        ORDER BY r.created_at DESC
        `,
        [ownerId]
    );

    return result.rows;

};

const getAverageRating = async (ownerId) => {

    const result = await pool.query(
        `
        SELECT

            ROUND(COALESCE(AVG(r.rating),0),2)
            AS average_rating

        FROM stores s

        LEFT JOIN ratings r
            ON s.id = r.store_id

        WHERE s.owner_id = $1
        `,
        [ownerId]
    );

    return result.rows[0];

};

module.exports = {
    getDashboard,
    getUsersWhoRated,
    getAverageRating,
};