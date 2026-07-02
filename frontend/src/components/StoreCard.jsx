function StoreCard({

    store,

    user,

    onRate

}) {

    return (

        <div className="card store-card">

            <h3 className="card-title">

                {store.name}

            </h3>

            <div className="card-body">

                <p>

                    <strong>Address:</strong>

                    {store.address}

                </p>

                <p>

                    <strong>Rating:</strong>

                    {store.average_rating ??

                    "No ratings"}

                </p>

                {

                    user?.role === "USER" && (

                        <select

                            className="form-select"

                            defaultValue=""

                            onChange={(e)=>

                                onRate(

                                    store.id,

                                    e.target.value

                                )

                            }

                        >

                            <option value="" disabled>

                                Select Rating

                            </option>

                            <option value="1">1</option>

                            <option value="2">2</option>

                            <option value="3">3</option>

                            <option value="4">4</option>

                            <option value="5">5</option>

                        </select>

                    )

                }

            </div>

        </div>

    );

}

export default StoreCard;