"# Store_Rating_Management" 
A full-stack Store Rating Platform built with React, Node.js, Express.js, and PostgreSQL. The application provides a role-based system where users can browse stores and submit ratings, store owners can monitor their store performance, and administrators can manage the entire platform.

Project Overview
The Store Rating Platform enables users to discover stores, submit ratings, and allows administrators and store owners to manage platform data through dedicated dashboards.
The application follows a modular architecture with a clear separation between the frontend, backend, database, services, controllers, and reusable UI components

_**Features**_
 **Normal User**
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

**Store Owner**
Login securely
Update password
View average rating of their store
View all ratings received
View users who submitted ratings
Logout securely

**System Administrator**
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


Roles
There are three user roles:
USER
OWNER
ADMIN
Each role has access only to authorized routes using middleware-based role validation.

**Installation**
Clone Repository
git clone https://github.com/Atharva150/Store_Rating_Management.git
cd store-rating-platform
Backend
cd backend

npm install

npm run dev
Frontend
cd frontend
npm install
npm run dev

🌐 Environment Variables

Backend .env

PORT=3000

DATABASE_URL=your_database_url

JWT_SECRET=your_secret_key

## Initial Administrator Setup

Administrator accounts cannot be created through the public Signup page.

After setting up the database, create the initial administrator by running:

```bash
npm run seed
```

This command creates the first administrator account using the credentials defined in the seed script.

Example:

- **Email:** admin@example.com
- **Password:** Admin@123

Once logged in as the administrator, you can use the **Admin Dashboard** to:

- Create additional Administrator accounts
- Create Store Owner accounts
- Create Normal User accounts
- Manage stores and users

The seed script only needs to be run once for a new database.


**Author**
Atharva Kulkarni
