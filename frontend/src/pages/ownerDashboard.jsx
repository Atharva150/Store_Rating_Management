import { useEffect, useState } from "react";

import ownerService from "../services/ownerService";

function OwnerDashboard() {

    const [store, setStore] = useState(null);

    const [ratings, setRatings] = useState([]);

    const [users, setUsers] = useState([]);

    const [average, setAverage] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");
const loadData = async () => {
    try {
        setLoading(true);
        setError("");

        const [ /* storeData, */ ratingsData, /* usersData, */ avgData ] = 
            await Promise.allSettled([
                // ownerService.getMyStore(),           // remove for now
                ownerService.getStoreRatings(),
                // ownerService.getRatingUsers(),
                ownerService.getAverageRating(),
            ]);

        // setStore(storeData.status === 'fulfilled' ? storeData.value : null);
        setRatings(ratingsData.status === 'fulfilled' ? ratingsData.value : []);
        // setUsers(usersData.status === 'fulfilled' ? usersData.value : []);
        setAverage(avgData.status === 'fulfilled' 
            ? (avgData.value?.data?.averageRating ?? avgData.value?.data?.average ?? avgData.value) 
            : null);

    } catch (err) {
        setError(err.message || "Failed to load dashboard");
    } finally {
        setLoading(false);
    }
};

    useEffect(() => {

        loadData();

    }, []);

    if (loading) return <h2>Loading Owner Dashboard...</h2>;

    if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

    return (

        <div className="owner-page container">

            <h1>Owner Dashboard</h1>

            {/* STORE INFO */}
            <div className="owner-card">

                <h2>My Store</h2>

                <p><b>Name:</b> {store?.name}</p>

                <p><b>Address:</b> {store?.address}</p>

            </div>

            {/* AVERAGE RATING */}
            <div className="owner-card">

                <h2>Average Rating</h2>

                <h1>{average ?? "No ratings yet"}</h1>

            </div>

            {/* RATINGS LIST */}
            <div className="owner-card">

                <h2>All Ratings</h2>

                {ratings.length === 0 ? (
                    <p>No ratings yet</p>
                ) : (
                    ratings.map((r) => (
                        <p key={r.id ?? r.rating ?? JSON.stringify(r)}>⭐ {r.rating}</p>
                    ))
                )}

            </div>

            {/* USERS WHO RATED */}
            <div className="owner-card">

                <h2>Users Who Rated</h2>

                {users.length === 0 ? (
                    <p>No users yet</p>
                ) : (
                    <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u) => (
                                <tr key={u.id ?? u.email ?? JSON.stringify(u)}>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OwnerDashboard;