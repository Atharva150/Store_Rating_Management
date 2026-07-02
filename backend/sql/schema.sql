CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    address VARCHAR(400),
    role VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    address VARCHAR(400),
    owner_id INTEGER UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(owner_id)
        REFERENCES users(id)
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    rating INTEGER CHECK(rating BETWEEN 1 AND 5),

    user_id INTEGER,

    store_id INTEGER,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id)
        REFERENCES users(id),

    FOREIGN KEY(store_id)
        REFERENCES stores(id),

    UNIQUE(user_id, store_id)
);

-- {
--     "email":"john@test.com",
--     "password":"Password@123"
-- "role": "USER"
-- }

-- {
--     "name":"Atharva Kulkarni Backend",
--     "email":"atharva@test.com",
--     "password":"Password@123",
--     "address":"Pune"
-- role:user
-- }

-- (
-- 'John Doe Backend',
-- 'john@test.com',
-- 'Password@123',
-- 'Pune',
-- 'USER'
-- );

--   8 | Athu                     | admin@test123.com | ADMIN pass = Admin@123 ADMIN

-- pass : Owner@123 {
--     "email": "owner@test.com",
--     "password": "owner@test.com"
-- Role: Owner

-- store_rating=# SELECT id,name,email,role
-- store_rating-# FROM users;
--  id |           name           |      email       | role                                                                                      
-- ----+--------------------------+------------------+-------
--   1 | Admin                    | admin@test.com   | ADMIN
--   2 | Atharva Kulkarni Backend | atharva@test.com | USER
--   4 | System Administrator     | admin@123.com    | ADMIN
--   5 | Rahul Sharma             | rahul@test.com   | OWNER
--   6 | John Doe Backend         | john@test.com    | USER
-- (5 rows)

