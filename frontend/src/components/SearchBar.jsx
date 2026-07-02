import React from "react";

function SearchBar({

    value,

    onChange,

    placeholder

}) {

    return (

        <div className="search-bar">

            <input

                className="search-input"

                type="text"

                value={value}

                placeholder={placeholder}

                onChange={(e) =>

                    onChange(e.target.value)

                }

            />

        </div>

    );

}

export default SearchBar;