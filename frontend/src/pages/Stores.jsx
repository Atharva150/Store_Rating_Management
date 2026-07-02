import { useEffect, useState } from "react";

import storeService from "../services/storeService";
import ratingService from "../services/ratingService";
import {useAuth} from "../context/authContext";


function Stores() {

    const {user}  = useAuth();



    const [stores, setStores] = useState([]);

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const fetchStores = async () => {

        try {

            setLoading(true);

            const data = await storeService.getAllStores();

            setStores(data);

        } catch (err) {

            setError(err.message || "Failed to load stores");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchStores();

    }, []);

    const handleRating = async (storeId, rating) => {

        try {

            await ratingService.submitRating({
                store_id: storeId,
                rating: Number(rating),
            });

            alert("Rating submitted successfully");

            fetchStores();

        } catch (err) {

            alert(err.message || "Failed to submit rating");

        }

    };


    const filteredStores = stores.filter((store) => {

        return (

            store.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            store.address
                ?.toLowerCase()
                .includes(search.toLowerCase())

        );

    });

    if (loading) return <h2>Loading stores...</h2>;

    if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

    return (

        <div className="stores-page container">
            <div className="stores-header">
            <h2>Stores</h2>

            <input
                className="search-input"
                type="text"
                placeholder="Search by name or address"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </div>

    
            {filteredStores.length === 0 ? (

                <p>No stores found</p>

            ) : (

                filteredStores.map((store) => (

                    <div className="store-card"
                        key={store.id}
                    >

                        <h3>{store.name}</h3>

                        <p><b>Address:</b> {store.address}</p>

                        <p>
                            <b>Overall Rating:</b>{" "}
                            {store.average_rating ?? "No ratings yet"}
                        </p>

                    
                        {user?.role === "USER" && (

                            <div className="store-rating-section">

                                <label>Rate this store:</label>{" "}

                                <select className="form-select"
                                    onChange={(e) =>
                                        handleRating(
                                            store.id,
                                            e.target.value
                                        )
                                    }
                                    defaultValue=""
                                >

                                    <option value="" disabled>
                                        Select
                                    </option>

                                    <option value="1">1</option>

                                    <option value="2">2</option>

                                    <option value="3">3</option>

                                    <option value="4">4</option>

                                    <option value="5">5</option>

                                </select>

                            </div>

                        )}

                    </div>

                ))

            )}

        </div>

    );

}

export default Stores;
