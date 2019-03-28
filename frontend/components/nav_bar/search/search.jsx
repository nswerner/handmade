import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="search-bar-and-button">
                <input className="search-bar" type="text"/>
                <button className="search-button">Search</button>
            </div>
        )
    }
}

export default Search;
