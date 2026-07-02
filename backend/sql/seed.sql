INSERT INTO users
(name,email,password_hash,address,role)
VALUES
('Admin',
'admin@test.com',
'$2b$10....',
'Pune',
'ADMIN');

INSERT INTO users
(name,email,password_hash,address,role)

VALUES

('Rahul',
'rahul@test.com',
'$2b$10....',
'Mumbai',
'OWNER');

INSERT INTO stores
(name,email,address,owner_id)

VALUES

('Fresh Mart',
'fresh@test.com',
'Baner',
2);
