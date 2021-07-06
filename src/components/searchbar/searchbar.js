import React from 'react';

import './searchbar.css';

const Searchbar = () => {
    return (<div className="searchWrapper">
                <input type="number" className="searchBox" placeholder="Search for any IP address or domain"></input>
                <button className="searchButton">&gt;</button>
            </div>
            )
}

export default Searchbar;