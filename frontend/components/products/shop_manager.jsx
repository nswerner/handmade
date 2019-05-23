import React from "react";
import { Link } from 'react-router-dom';
import ProductIndexItem from './product_index_items';

class ShopManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shop_name: this.props.shop_name
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterProducts = this.filterProducts.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    handleChange() {
        return (e) => {
            this.setState({ shop_name: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        $.ajax({
            method: "PATCH",
            url: `/api/users/${this.props.currentUser.id}`,
            data: { user: { shop_name: `${this.state.shop_name}` } }
        }).then((user) => this.props.receiveCurrentUser(user));
    }

    componentDidMount() {
        this.props.clearSearch();
        this.props.fetchUserProducts(this.props.currentUser.id);
    }

    filterProducts(id) {
        const filteredProducts = this.props.products.filter(product => {
            return (product.merchant_id === id)
        })

        return filteredProducts;
    }

    removeProduct(id) {
        this.props.removeProduct(id).then(() => {
            this.props.fetchUserProducts(this.props.currentUser.id);
        });
    }

    render() {

        this.shopName = <h1 className="manager-h2 mngr-h2">{this.props.currentUser.shop_name}</h1>
        this.addListing = <Link to="/addListing" className="add-listing mngr-add-listing"> <i className="fas fa-plus" /> Add Listing </Link>
        this.header = (
            <div className="manager-form">
                {this.shopName}
                {this.addListing}
            </div>
        )


        if (this.props.products.length > 0) {

            this.products = this.filterProducts(this.props.currentUser.id);
            this.products = this.products.map((product, idx) => {

                return (
                    <li key={idx} className="manager-product-index-item">
                        <Link className="link-to-product" to={`/products/${product.id}`}>
                            <div className="mngr-item-img-box">
                                <img className="mngr-item-img" src={product.productPictures[0]} />
                            </div>
                        </Link>
                        <div className="mngr-item-prod-details">
                            <div className="mngr-item-prod-tite">
                                <span className="mngr-item-prod-h4">{product.title}</span>
                            </div>
                            <div className="mngr-item-stock-price">
                                <span className="mngr-item-stock">stock </span>
                                <span className="mngr-item-detail-separator"> | </span>
                                <span className="mngr-item-price">${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="manager-options">
                            <Link className="update-listing" to={`/updateListing/${product.id}`}> 
                                <i className="far fa-edit"/> 
                            </Link>
                            <button onClick={() => this.removeProduct(product.id)} className="remove-listing">
                                <i className="far fa-trash-alt"/>
                            </button>
                        </div>
                    </li>
                )
            })

        } else {
            this.products = <span className="manager-h2"> Your Listed Products can be Managed Here </span>
        }

        return (
            <div className="shop-manager-box">
                <div className="left-nav">
                    <header className="left-nav-header">
                        <div className="mngr-icon-bg">
                            <i className="fas fa-store"/>
                        </div>
                        <span> Shop Manager </span>
                    </header>
                    <div className="left-nav-listings">
                        <button className="nav-listings-button">
                            <i className="fas fa-shapes" />
                            <span className="listings-span"> Listings </span>
                        </button>
                    </div>
                    {/* <div className="left-nav-orders">
                        <button className="nav-orders-button">
                            <i className="fas fa-clipboard-list"/>
                            <span className="orders-span">  Orders and reviews </span>
                        </button>
                    </div> */}

                </div>

                <div className="manager-main">

                    <header className="shop-manager-header">
                        {this.header}
                    </header>

                    <div className="mngr-main-background">

                        <div className="manager-ul-box">

                            <ul className="manager-ul">

                                {this.products}

                            </ul>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default ShopManager;

