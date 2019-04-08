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

        this.shopName = <h1 className="manager-h2">{this.props.currentUser.shop_name}</h1>
        this.addListing = <Link to="/addListing" className="add-listing"> <i className="fas fa-plus" /> Add Listing </Link>
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
                    <div key={idx} className="managers-product-index-items">
                        <ProductIndexItem
                            product={product}
                            key={product.id}
                            merchant={this.props.shop_name}
                            updateProduct={this.props.updateProduct}
                        />
                        <Link className="update-listing" to={`/updateListing/${product.id}`}> Update Product </Link>
                        <button onClick={() => this.removeProduct(product.id)} className="remove-listing"> End Listing </button>
                    </div>
                )
            })

        } else {
            this.products = null;
        }

        return (
            <div className="shop-manager-box">
                <div className="left-nav">
                
                </div>
                <div className="manager-main">

                    <header className="shop-manager-header">
                        {this.header}
                    </header>
                    <div className="manager-actions">
                    
                    </div>
                    <div className="manager-ul-box">
                        <ul className="manager-ul">

                            {this.products}

                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default ShopManager;

