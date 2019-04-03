import React from "react";
import { Link } from 'react-router-dom';

class ShopManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="shop-manager-box">
                <header className="shop-manager-header">
                    <Link to="/addListing" className="black-button add-listing"> <i className="fas fa-plus"/> Add Listing </Link>
                </header>
            </div>
        );
    }
}

export default ShopManager;