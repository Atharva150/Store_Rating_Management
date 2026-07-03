
# ⭐ Store Rating Platform

A full-stack Store Rating Platform built with **React**, **Node.js**, **Express.js**, and **PostgreSQL**. The application provides a role-based system where users can browse stores and submit ratings, store owners can monitor their store performance, and administrators can manage the entire platform.

---

## 📌 Project Overview
=======
⭐ Store Rating Platform

A full-stack Store Rating Platform built with React, Node.js, Express.js, and PostgreSQL. The application provides a role-based system where users can browse stores and submit ratings, store owners can monitor their store performance, and administrators can manage the entire platform.

📌 Project Overview

The Store Rating Platform enables users to discover stores, submit ratings, and allows administrators and store owners to manage platform data through dedicated dashboards.

The application follows a modular architecture with a clear separation between the frontend, backend, database, services, controllers, and reusable UI components.


## 🚀 Features

### 👤 Normal User

* Register and login securely
* Update password
* Browse all available stores
* Search stores by name or address
* View:

  * Store Name
  * Address
  * Overall Rating
  * Personal Submitted Rating
* Submit ratings
* Modify previously submitted ratings
* Logout securely

---

### 🏪 Store Owner

* Login securely
* Update password
* View average rating of their store
* View all ratings received
* View users who submitted ratings
* Logout securely

---

### 🛠 System Administrator

* Login securely
* Dashboard statistics

  * Total Users
  * Total Stores
  * Total Ratings
* Add new Users

  * USER
  * OWNER
  * ADMIN
* Add new Stores
* View all Users
* View all Stores
* Search Users
* Search Stores
* View User Details
* Delete Users
* Logout securely

---

# 🏗 Tech Stack

## Frontend

* React
* React Router DOM
* Axios
* CSS

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* PostgreSQL (pg)

# 🔐 Authentication

Authentication is implemented using **JSON Web Tokens (JWT)**.

Every protected route requires a valid access token.

Passwords are securely hashed using **bcrypt** before being stored in the database.

---

# 👥 Roles

There are three user roles:

```
=======
🚀 Features
👤 Normal User
Register and login securely
Update password
Browse all available stores
Search stores by name or address
View:
Store Name
Address
Overall Rating
Personal Submitted Rating
Submit ratings
Modify previously submitted ratings
Logout securely
🏪 Store Owner
Login securely
Update password
View average rating of their store
View all ratings received
View users who submitted ratings
Logout securely
🛠 System Administrator
Login securely
Dashboard statistics
Total Users
Total Stores
Total Ratings
Add new Users
USER
OWNER
ADMIN
Add new Stores
View all Users
View all Stores
Search Users
Search Stores
View User Details
Delete Users
Logout securely
🏗 Tech Stack
Frontend
React
React Router DOM
Axios
CSS3
Backend
Node.js
Express.js
JWT Authentication
bcrypt
PostgreSQL (pg)
Database
PostgreSQL

👥 Roles

There are three user roles:

>>>>>>> 0a07ec544a8fced1872dec51814e0a2579311954
USER

OWNER

ADMIN
```

Each role has access only to authorized routes using middleware-based role validation.


---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/store-rating-platform.git

cd store-rating-platform
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🌐 Environment Variables

Backend `.env`

```
PORT=3000

DATABASE_URL=your_database_url

JWT_SECRET=your_secret_key


# 📦 Deployment


Ensure the following environment variables are configured during deployment.

Backend

```
DATABASE_URL

JWT_SECRET



# 👨‍💻 Author

**Atharva Kulkarni**
=======

Each role has access only to authorized routes using middleware-based role validation.

⚙ Installation
Clone Repository
git clone https://github.com/Atharva150/Store_Rating_System.git

cd store-rating-platform
Backend
cd backend
npm install
npm run dev


Frontend
cd frontend
npm install
npm run dev

👨‍💻 Author
Atharva Kulkarni

🌐 Environment Variables
Backend .env
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
>>>>>>> 0a07ec544a8fced1872dec51814e0a2579311954
