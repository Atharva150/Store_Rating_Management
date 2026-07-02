const pool = require("../config/db");

const submitRating = async ({
    user_id,
    store_id,
    rating,
}) => {
    const store = await pool.query(
        `
        SELECT id
        FROM stores
        WHERE id = $1
        `,
        [store_id]
    );

    if (store.rows.length === 0) {
        throw new Error("Store not found.");
    }

    // Check if user already rated this store
    const existingRating = await pool.query(
        `
        SELECT id
        FROM ratings
        WHERE user_id = $1
        AND store_id = $2
        `,
        [user_id, store_id]
    );

    if (existingRating.rows.length > 0) {
        throw new Error("You have already rated this store.");
    }

    const result = await pool.query(
        `
        INSERT INTO ratings
        (rating, user_id, store_id)

        VALUES ($1, $2, $3)

        RETURNING *
        `,
        [
            rating,
            user_id,
            store_id,
        ]
    );

    return result.rows[0];
};

/**
 * Update an existing rating
 */
const updateRating = async (
    user_id,
    store_id,
    rating
) => {

    const result = await pool.query(
        `
        UPDATE ratings

        SET rating = $1

        WHERE user_id = $2
        AND store_id = $3

        RETURNING *
        `,
        [
            rating,
            user_id,
            store_id,
        ]
    );

    if (result.rows.length === 0) {
        throw new Error("Rating not found.");
    }

    return result.rows[0];
};

/**
 * Get all ratings submitted by a user
 */
const getMyRatings = async (user_id) => {

    const result = await pool.query(
        `
        SELECT
            r.id,
            r.rating,
            r.store_id,
            s.name AS store_name,
            s.address,
            r.created_at

        FROM ratings r

        JOIN stores s
        ON r.store_id = s.id

        WHERE r.user_id = $1

        ORDER BY r.created_at DESC
        `,
        [user_id]
    );

    return result.rows;
};

module.exports = {
    submitRating,
    updateRating,
    getMyRatings,
};