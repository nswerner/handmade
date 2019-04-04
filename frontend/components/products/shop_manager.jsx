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
    }

    handleChange() {
        return (e) => {
            this.setState({ shop_name: e.currentTarget.value} )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        $.ajax({
            method: "PATCH",
            url: `/api/users/${this.props.currentUser.id}`,
            data: {user: {shop_name: `${this.state.shop_name}`}}
        }).then( (user) => this.props.receiveCurrentUser(user));    
    }

    componentDidMount() {
        this.props.fetchUserProducts(this.props.currentUser.id);
    }

    render() {

        if (this.props.shop_name) {
            this.shopName = <h1 className="manager-h1">{this.props.currentUser.shop_name}</h1>
            this.addListing = <Link to="/addListing" className="black-button add-listing"> <i className="fas fa-plus" /> Add Listing </Link>
            this.form = (
                <div className="manager-form">
                    {this.shopName}
                    {this.addListing}
                </div> 
            )

        
            if (this.props.products.length > 0) {

                this.products = this.props.products.filter( (product) => {
                    return (product.merchant_id === this.props.currentUser.id)
                })

                this.products = this.props.products.map( (product, idx)=> {
                    return(
                        <div key={idx} className="managers-product-index-items">
                            <ProductIndexItem
                                product={product}
                                key={product.id}
                                merchant={this.props.shop_name}
                                updateProduct={this.props.updateProduct}
                                />
                            <Link to={`/updateListing/${product.id}`}> Update Product </Link>
                        </div>
                    )
                })

            } else {
                this.products = null;
            }

        } else {
            this.shop_name = <input className="shop-name-input" type="text" value={this.state.shop_name} onChange={this.handleChange()} />
            this.addListing = null;
            this.form = (
                <form className="manager-form-real" onSubmit={this.handleSubmit}>
                    {this.shop_name}
                    <input className="create-shop-button" type="submit" value="Create Shop"/>
                </form>
            )

          this.products = null;
        }

        return(
            <div className="shop-manager-box">
                <header className="shop-manager-header">
                    {this.form}
                </header>
                <ul className="manager-products-ul">
                    {this.products}
                </ul>
            </div>
        );
    }
}

export default ShopManager;