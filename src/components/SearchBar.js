import React, { useState } from 'react'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        console.log(searchInput);
    }

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
                value={searchInput} />
        </div>
    )

}

export default SearchBar