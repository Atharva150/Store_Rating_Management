import { useEffect, useState } from "react";

import adminService from "../services/adminService";

function AdminDashboard() {

    const [stats, setStats] = useState(null);

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    /**
     * Fetch dashboard stats
     */
    const fetchDashboard = async () => {

        try {

            const data = await adminService.getDashboard();

            setStats(data);

        } catch (err) {

            setError(err.message || "Failed to load dashboard");

        }

    };

    /**
     * Fetch users
     */
    const fetchUsers = async () => {

        try {
            const data = await adminService.getAllUsers();
            setUsers(Array.isArray(data) ? data : 
                data.data ? data.data : 
                data.users ? data.users : []);
        } catch (err) {
            setError(err.message || "Failed to load users");
        }
    };

    /**
     * Load everything
     */
    const loadData = async () => {

        setLoading(true);

        await Promise.all([
            fetchDashboard(),
            fetchUsers(),
        ]);

        setLoading(false);

    };

    useEffect(() => {

        loadData();

    }, []);

    /**
     * Delete user (optional admin action)
     */
    const handleDeleteUser = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        try {

            await adminService.deleteUser(id);

            alert("User deleted successfully");

            fetchUsers();

            fetchDashboard();

        } catch (err) {

            alert(err.message || "Failed to delete user");

        }

    };

    if (loading) return <h2>Loading Admin Dashboard...</h2>;

    if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

    return (

        <div className="admin-page container">

            <h1>Admin Dashboard</h1>

            {/* STATS SECTION */}
            <div className="stats-grid">

                <div className="stats-card">
                    <h3>Total Users</h3>
                    <p>{stats?.totalUsers ?? stats?.users ?? 0}</p>
                </div>

                <div className="stats-card">
                    <h3>Total Stores</h3>
                    <p>{stats?.totalStores ?? stats?.stores ?? 0}</p>
                </div>

                <div className="stats-card">
                    <h3>Total Ratings</h3>
                    <p>{stats?.totalRatings ?? stats?.ratings ?? 0}</p>
                </div>

            </div>

            {/* USERS TABLE */}

            <h2>Users</h2>

            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {users.map((user) => (

                            <tr key={user.id}>

                                <td>{user.name}</td>

                                <td>{user.email}</td>

                                <td>{user.address}</td>

                                <td>{user.role}</td>

                                <td>

                                    <button className="btn btn-danger"
                                        onClick={() =>
                                            handleDeleteUser(user.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            )}

        </div>

    );

}

export default AdminDashboard;